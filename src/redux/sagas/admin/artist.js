import {push} from 'connected-react-router'
import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import {
    addArtist,
    deleteArtist,
    updateArtist
} from 'services/apiArtist'
import {
    getSignedRequest,
    uploadFile
} from 'services/apiS3'

export function* createArtist({payload}) {
    const {_id, token, name, description, photo, photoFile, isPublished} = payload

    //add to formdata so api can read
    const artist = new FormData()
    artist.set('name', name)
    artist.set('description', description)
    artist.set('photo', photo)
    artist.set('isPublished', isPublished)

    const s3Payload = yield call(getSignedRequest, photoFile)
    if (!!s3Payload.signedRequest) {
        yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})

        const createdArtist = yield call(addArtist, {_id: _id, token: token, artist: artist})
        if (!createdArtist.error) {
            yield put({type: 'artist/getArtists'})
            yield put(push('/admin/artists/update/' + createdArtist.slug))

        } else {
            yield put({type: 'admin/createArtistsFailure', payload})

        }

    }
}

export function* updateArtistDetail({payload}) {
    const {slug, _id, token, name, description, photo, isPublished, photoFile} = payload

    //add to formData so api can read
    const updatedArtist = new FormData()
    updatedArtist.set('name', name)
    updatedArtist.set('description', description)
    updatedArtist.set('photo', photo)
    updatedArtist.set('isPublished', isPublished)

    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            const uploadImage = yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateArtist, {slug: slug, _id: _id, token: token, artist: updatedArtist})
        if (!updated.error) {
            yield put({type: 'artist/updateArtistSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Artist',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'artist/updateArtistFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'artist/updateArtistFailure'})
    }
}

export function* attemptDestroyArtist({payload}) {
    yield put({type: 'admin/confirmDestroyArtist', payload: payload})
}

export function* destroyArtist({payload}) {
    const destroyed = yield call(deleteArtist, payload)
    const {objectID} = payload

    if (!destroyed.error) {
        yield put({type: 'admin/destroyArtistSuccess'})
        yield put({type: 'artist/destroyArtistSuccess', payload: {objectID}})
        yield put({type: 'artist/getArtists'})
        yield put(push('/admin/artists'))
    } else {
        yield put({type: 'admin/destroyArtistFailure'})
    }
}

export function* destroyArtistSuccess() {
    yield put(push('/admin/artists'))
}

/**
 *
 *
 * ADMIN ARTIST WATCHERS
 *
 *
 */

export function* watchCreateArtist() {
    yield takeLatest('admin/createArtist', createArtist)
}

export function* watchAttemptDestroyArtist() {
    yield takeLatest('admin/attemptDestroyArtist', attemptDestroyArtist)
}

export function* watchDestroyArtist() {
    yield takeLatest('admin/destroyArtist', destroyArtist)
}

export function* watchDestroyArtistSuccess() {
    yield takeLatest('admin/attemptDestroyArtistSuccess', destroyArtistSuccess)
}

export function* watchUpdateArtist() {
    yield takeLatest('admin/updateArtist', updateArtistDetail)
}
