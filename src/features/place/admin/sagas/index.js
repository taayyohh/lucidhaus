import {push}                               from 'connected-react-router'
import {addPlace, deletePlace, updatePlace} from 'features/place/services'
import moment                               from 'moment'
import {call, put, takeLatest}              from 'redux-saga/effects'
import {getSignedRequest, uploadFile}       from 'features/site/services/s3'
import {setFormData}                        from '../../../../utils/abstractions/setFormData'

export function* createPlace({payload}) {
    const {_id, token, name, description, photo, photoFile, isPublished} = payload

    //add to formdata so api can read
    const place = new FormData()
    place.set('_id', moment().format().replace(/\D+/g, ''))
    place.set('name', name)
    place.set('description', description)
    place.set('photo', photo)
    place.set('isPublished', isPublished)

    const s3Payload = yield call(getSignedRequest, photoFile)
    if (!!s3Payload.signedRequest) {
        yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})

        const createdPlace = yield call(addPlace, {_id: _id, token: token, place: place})
        if (!createdPlace.error) {
            yield put({type: 'place/getPlaces'})
            yield put(push('/admin/places/update/' + createdPlace.slug))

        } else {
            yield put({type: 'place/createPlacesFailure', payload})

        }

    }
}

export function* updatePlaceDetail({payload}) {
    const {slug, _id, token, name, description, photo, isPublished, photoFile} = payload

    //add to formData so api can read
    const place = new FormData()
    const fields = [name, description, photo, isPublished]
    for (let field of fields)
        setFormData(place, field)

    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updatePlace, {slug: slug, _id: _id, token: token, place: place})
        if (!updated.error) {
            yield put({type: 'place/updatePlaceSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Place',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/updatePlaceFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'place/updatePlaceFailure'})
    }
}

export function* attemptDestroyPlace({payload}) {
    yield put({type: 'place/confirmDestroyPlace', payload: payload})
}

export function* destroyPlace({payload}) {
    const destroyed = yield call(deletePlace, payload)
    const {objectID} = payload

    if (!destroyed.error) {
        // yield put({type: 'place/destroyPlaceSuccess'})
        yield put({type: 'place/destroyPlaceSuccess', payload: {objectID}})
        yield put({type: 'place/getPlaces'})
        yield put(push('/admin/places'))
    } else {
        yield put({type: 'place/destroyPlaceFailure'})
    }
}

export function* destroyPlaceSuccess() {
    yield put(push('/admin/places'))
}

/**
 *
 *
 * ADMIN ARTIST WATCHERS
 *
 *
 */

export function* watchCreatePlace() {
    yield takeLatest('place/createPlace', createPlace)
}

export function* watchAttemptDestroyPlace() {
    yield takeLatest('place/attemptDestroyPlace', attemptDestroyPlace)
}

export function* watchDestroyPlace() {
    yield takeLatest('place/destroyPlace', destroyPlace)
}

export function* watchDestroyPlaceSuccess() {
    yield takeLatest('place/attemptDestroyPlaceSuccess', destroyPlaceSuccess)
}

export function* watchUpdatePlace() {
    yield takeLatest('place/updatePlace', updatePlaceDetail)
}
