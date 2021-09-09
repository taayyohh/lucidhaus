import {push}                               from 'connected-react-router'
import {call, put, takeLatest}              from 'redux-saga/effects'
import {addEvent, deleteEvent, updateEvent} from 'services/apiEvent'
import {getSignedRequest, uploadFile}       from 'services/apiS3'

export function* createEvent({payload}) {
    const {_id, token, name, description, dateOfEvent, rsvps, flyer, flyerFile, isPublished} = payload

    //add to formdata so api can read
    const event = new FormData()
    event.set('name', name)
    event.set('description', description)
    event.set('dateOfEvent', dateOfEvent)
    event.set('flyer', flyer)
    event.set('rsvps', rsvps)
    event.set('isPublished', isPublished)

    const s3Payload = yield call(getSignedRequest, flyerFile)
    if (!!s3Payload.signedRequest) {
        yield call(uploadFile, {file: flyerFile, signedRequest: s3Payload.signedRequest})

        const createdEvent = yield call(addEvent, {_id: _id, token: token, event: event})
        if (!createdEvent.error) {
            yield put({type: 'event/getEvents'})
            yield put(push('/admin/events/update/' + createdEvent.slug))

        } else {
            yield put({type: 'admin/createEventsFailure', payload})

        }

    }
}

export function* updateEventDetail({payload}) {
    const {slug, _id, token, name, dateOfEvent, description, rsvps, flyer, flyerFile, isPublished} = payload

    //add to formData so api can read
    const updatedEvent = new FormData()
    updatedEvent.set('name', name)
    updatedEvent.set('description', description)
    updatedEvent.set('dateOfEvent', dateOfEvent)
    updatedEvent.set('flyer', flyer)
    updatedEvent.set('rsvps', rsvps)
    updatedEvent.set('isPublished', isPublished)

    if (!!flyerFile) {
        const s3Payload = yield call(getSignedRequest, flyerFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: flyerFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateEvent, {slug: slug, _id: _id, token: token, event: updatedEvent})
        if (!updated.error) {
            yield put({type: 'event/updateEventSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Event',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'event/updateEventFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'event/updateEventFailure'})
    }
}

export function* attemptDestroyEvent({payload}) {
    yield put({type: 'admin/confirmDestroyEvent', payload: payload})
}

export function* attemptDestroyRsvp({payload}) {
    yield put({type: 'admin/confirmDestroyRsvp', payload: payload})
}

export function* destroyEvent({payload}) {
    const destroyed = yield call(deleteEvent, payload)
    const {objectID} = payload

    if (!destroyed.error) {
        yield put({type: 'admin/destroyEventSuccess'})
        yield put({type: 'event/destroyEventSuccess', payload: {objectID}})
        yield put({type: 'event/getEvents'})
        yield put(push('/admin/events'))
    } else {
        yield put({type: 'admin/destroyEventFailure'})
    }
}

export function* destroyEventSuccess() {
    yield put(push('/admin/events'))

}

export function* addRsvpToEvent({payload}) {
    const {slug, _id, token, name, email} = payload

    //add to formData so api can read
    const updatedEvent = new FormData()

    updatedEvent.set('rsvp', true)
    updatedEvent.set('name', name)
    updatedEvent.set('email', email)

    try {
        const updated = yield call(updateEvent, {slug: slug, _id: _id, token: token, event: updatedEvent})
        if (!updated.error) {
            yield put({type: 'event/updateEventSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'See you there!',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'event/updateEventFailure', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: updated.error,
                    theme: 'red'
                }
            })
        }
    } catch (error) {
        yield put({type: 'event/updateEventFailure'})
    }
}

export function* destroyRsvp({payload}) {
    const {slug, _id, token, name, email, remove} = payload

    //add to formData so api can read
    const updatedRsvp = new FormData()

    updatedRsvp.set('name', name)
    updatedRsvp.set('email', email)
    updatedRsvp.set('remove', remove)


    try {
        const updated = yield call(updateEvent, {slug: slug, _id: _id, token: token, event: updatedRsvp})
        if (!updated.error) {
            yield put({type: 'event/updateRsvpSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: `${name} is no longer Rsvp'd`,
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'event/updateRsvpFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'event/updateRsvpFailure'})
    }
}

export function* destroyRsvpSuccess() {
    yield put(push('/music'))
}


/**
 *
 *
 * ADMIN COLLABORATOR WATCHERS
 *
 *
 */

export function* watchCreateEvent() {
    yield takeLatest('admin/createEvent', createEvent)
}

export function* watchAttemptDestroyEvent() {
    yield takeLatest('admin/attemptDestroyEvent', attemptDestroyEvent)
}

export function* watchDestroyEvent() {
    yield takeLatest('admin/destroyEvent', destroyEvent)
}

export function* watchDestroyEventSuccess() {
    yield takeLatest('admin/attemptDestroyEventSuccess', destroyEventSuccess)
}

export function* watchUpdateEvent() {
    yield takeLatest('admin/updateEvent', updateEventDetail)
}


export function* watchAddRsvpToEvent() {
    yield takeLatest('admin/addRsvpToEvent', addRsvpToEvent)
}

export function* watchAttemptDestroyRsvp() {
    yield takeLatest('admin/attemptDestroyRsvp', attemptDestroyRsvp)
}

export function* watchDestroyRsvp() {
    yield takeLatest('admin/destroyRsvp', destroyRsvp)
}

export function* watchDestroyRsvpSuccess() {
    yield takeLatest('admin/attemptDestroyRsvpSuccess', destroyRsvpSuccess)
}

