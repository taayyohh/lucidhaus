import {push} from 'connected-react-router'
import {
    call,
    put,
    takeLatest
}                       from 'redux-saga/effects'
import {
    addAlbum,
    deleteAlbum,
    updateAlbum
}                       from 'services/apiAlbum'
import {
    getSignedRequest,
    uploadFile
}                       from 'services/apiS3'

export function* createAlbum({payload}) {
    const {_id, token, coverArt, coverArtFile, albumName, collaborators, primaryArtist, description, isPublished} = payload

    //add to formdata so api can read
    const album = new FormData()
    album.set('albumName', albumName)
    album.set('description', description)
    album.set('coverArt', coverArt)
    album.set('isPublished', isPublished)
    album.set('primaryArtist', primaryArtist)
    if(!!collaborators) {
        album.set('collaborators', collaborators)
    }


    const s3Payload = yield call(getSignedRequest, coverArtFile)
    if (!!s3Payload.signedRequest) {
        yield call(uploadFile, {file: coverArtFile, signedRequest: s3Payload.signedRequest})

        const createdAlbum = yield call(addAlbum, {_id, token, album})
        if (!createdAlbum.error) {
            yield put({type: 'album/getAlbums'})
            yield put(push('/admin/music/update/' + createdAlbum.slug))

        } else {
            yield put({type: 'admin/createAlbumsFailure', payload})

        }

    }
}

export function* updateAlbumDetail({payload}) {
    const {slug, _id, token, coverArt, coverArtFile, albumName, collaborators, primaryArtist, description, isPublished} = payload

    //add to formData so api can read
    const updatedAlbum = new FormData()

    updatedAlbum.set('albumName', albumName)
    updatedAlbum.set('description', description)
    updatedAlbum.set('coverArt', coverArt)
    updatedAlbum.set('isPublished', isPublished)
    updatedAlbum.set('primaryArtist', primaryArtist)
    if(!!collaborators) {
        updatedAlbum.set('collaborators', collaborators)
    }


    if (!!coverArtFile) {
        const s3Payload = yield call(getSignedRequest, coverArtFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: coverArtFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateAlbum, {slug: slug, _id: _id, token: token, album: updatedAlbum})
        if (!updated.error) {
            yield put({type: 'album/updateAlbumSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Album',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'album/updateAlbumFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'album/updateAlbumFailure'})
    }
}

export function* attemptDestroyAlbum({payload}) {
    yield put({type: 'admin/confirmDestroyAlbum', payload: payload})
}

export function* attemptDestroySong({payload}) {
    yield put({type: 'admin/confirmDestroySong', payload: payload})
}

export function* destroyAlbum({payload}) {
    const destroyed = yield call(deleteAlbum, payload)
    const {objectID} = payload

    if (!destroyed.error) {
        yield put({type: 'admin/destroyAlbumSuccess'})
        yield put({type: 'album/destroyAlbumSuccess', payload: {objectID}})
        yield put({type: 'album/getAlbums'})
        yield put(push('/admin/music'))
    } else {
        yield put({type: 'admin/destroyAlbumFailure'})
    }
}

export function* destroyAlbumSuccess() {
    yield put(push('/admin/music'))
}

export function* addSongToAlbum({payload}) {
    const {slug, _id, token, audio, audioId, audioFile, title, trackNumber} = payload

    //add to formData so api can read
    const updatedAlbum = new FormData()

    updatedAlbum.set('audio', audio)
    updatedAlbum.set('title', title)
    updatedAlbum.set('trackNumber', trackNumber)

    if (!!audioId)
        updatedAlbum.set('_id', audioId)

    if (!!audioFile) {
        const s3Payload = yield call(getSignedRequest, audioFile)
        if (!!s3Payload.signedRequest) {
             yield call(uploadFile, {file: audioFile, signedRequest: s3Payload.signedRequest})
            //TODO: upload success and failure
        }
    }

    try {
        const updated = yield call(updateAlbum, {slug: slug, _id: _id, token: token, album: updatedAlbum})
        if (!updated.error) {
            yield put({type: 'album/updateAlbumSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Album',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'album/updateAlbumFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'album/updateAlbumFailure'})
    }
}

export function* destroySong({payload}) {
    const {slug, _id, token, audio, audioId, title, trackNumber, remove} = payload

    //add to formData so api can read
    const updatedAlbum = new FormData()

    updatedAlbum.set('audio', audio)
    updatedAlbum.set('title', title)
    updatedAlbum.set('trackNumber', trackNumber)
    updatedAlbum.set('_id', audioId)
    updatedAlbum.set('remove', remove)


    try {
        const updated = yield call(updateAlbum, {slug: slug, _id: _id, token: token, album: updatedAlbum})
        if (!updated.error) {
            yield put({type: 'album/updateAlbumSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: `Removed ${title} from album`,
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'album/updateAlbumFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'album/updateAlbumFailure'})
    }
}

export function* destroySongSuccess() {
    yield put(push('/admin/music'))
}


/**
 *
 *
 * ADMIN SONG WATCHERS
 *
 *
 */

export function* watchCreateAlbum() {
    yield takeLatest('admin/createAlbum', createAlbum)
}

export function* watchAttemptDestroyAlbum() {
    yield takeLatest('admin/attemptDestroyAlbum', attemptDestroyAlbum)
}

export function* watchDestroyAlbum() {
    yield takeLatest('admin/destroyAlbum', destroyAlbum)
}

export function* watchDestroyAlbumSuccess() {
    yield takeLatest('admin/attemptDestroyAlbumSuccess', destroyAlbumSuccess)
}

export function* watchUpdateAlbum() {
    yield takeLatest('admin/updateAlbum', updateAlbumDetail)
}

export function* watchAddSongToAlbum() {
    yield takeLatest('admin/addSongToAlbum', addSongToAlbum)
}

export function* watchAttemptDestroySong() {
    yield takeLatest('admin/attemptDestroySong', attemptDestroySong)
}

export function* watchDestroySong() {
    yield takeLatest('admin/destroySong', destroySong)
}

export function* watchDestroySongSuccess() {
    yield takeLatest('admin/attemptDestroyPostSuccess', destroySongSuccess)
}
