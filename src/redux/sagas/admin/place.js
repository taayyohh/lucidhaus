import {push} from 'connected-react-router'
import moment from 'moment'
import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import {
    addPlace,
    deletePlace,
    updatePlace
} from 'services/place'
import {
    getSignedRequest,
    uploadFile
} from 'services/s3'

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
        const uploadImage = yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        console.log('upload', uploadImage)

        const createdPlace = yield call(addPlace, {_id: _id, token: token, place: place})
        console.log('createdPlace', createdPlace)
        if (!createdPlace.error) {
            yield put({type: 'place/getPlaces'})
            yield put(push('/admin/places/update/' + createdPlace.slug))

        } else {
            yield put({type: 'admin/createPlacesFailure', payload})

        }

    }
}

export function* updatePlaceDetail({payload}) {
    const {slug, _id, token, name, description, photo, isPublished, photoFile} = payload

    //add to formData so api can read
    const updatedPlace = new FormData()
    updatedPlace.set('name', name)
    updatedPlace.set('description', description)
    updatedPlace.set('photo', photo)
    updatedPlace.set('isPublished', isPublished)

    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            const uploadImage = yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
            console.log('upload', uploadImage)
        }
    }

    try {
        const updated = yield call(updatePlace, {slug: slug, _id: _id, token: token, place: updatedPlace})
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
    yield put({type: 'admin/confirmDestroyPlace', payload: payload})
}

export function* destroyPlace({payload}) {
    const destroyed = yield call(deletePlace, payload)
    const {objectID} = payload

    if (!destroyed.error) {
        yield put({type: 'admin/destroyPlaceSuccess'})
        yield put({type: 'place/destroyPlaceSuccess', payload: {objectID}})
        yield put({type: 'place/getPlaces'})
        yield put(push('/admin/places'))
    } else {
        yield put({type: 'admin/destroyPlaceFailure'})
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
    yield takeLatest('admin/createPlace', createPlace)
}

export function* watchAttemptDestroyPlace() {
    yield takeLatest('admin/attemptDestroyPlace', attemptDestroyPlace)
}

export function* watchDestroyPlace() {
    yield takeLatest('admin/destroyPlace', destroyPlace)
}

export function* watchDestroyPlaceSuccess() {
    yield takeLatest('admin/attemptDestroyPlaceSuccess', destroyPlaceSuccess)
}

export function* watchUpdatePlace() {
    yield takeLatest('admin/updatePlace', updatePlaceDetail)
}
