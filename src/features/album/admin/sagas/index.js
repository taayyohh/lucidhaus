<<<<<<< HEAD:src/features/album/admin/sagas/index.js
import {push}                               from 'connected-react-router'
import {addAlbum, deleteAlbum, updateAlbum} from 'features/album/services'
import {getSignedRequest, uploadFile}       from 'features/site/services/s3'
import {call, put, takeLatest}              from 'redux-saga/effects'
import {setFormData}                        from 'utils/abstractions/setFormData'

=======
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
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb:src/redux/sagas/admin/album.js

export function* createAlbum({payload}) {
    const {
        _id,
        token,
        coverArt,
        coverArtFile,
        albumName,
        collaborators,
        primaryArtist,
        description,
        isPublished
    } = payload

    //add to formdata so api can read
    const album = new FormData()
    const fields = [
        {albumName},
        {description},
        {coverArt},
        {isPublished},
        {primaryArtist}
    ]
    for (let field of fields)
        setFormData(album, field)

    if (!!collaborators) {
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
            yield put({type: 'album/createAlbumsFailure', payload})

        }

    }
}

export function* updateAlbumDetail({payload}) {
    const {
        slug,
        _id,
        token,
        coverArt,
        coverArtFile,
        albumName,
        collaborators,
        primaryArtist,
        description,
        isPublished
    } = payload

    //add to formData so api can read
    const updatedAlbum = new FormData()
    const fields = [
        {albumName},
        {description},
        {coverArt},
        {isPublished},
        {primaryArtist}
    ]
    for (let field of fields)
        setFormData(updatedAlbum, field)

    if (!!collaborators) {
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
    const fields = [
        {audio},
        {title},
        {trackNumber}
    ]
    for (let field of fields)
        setFormData(updatedAlbum, field)

    if (!!audioId)
        updatedAlbum.set('_id', audioId)

    if (!!audioFile) {
        const s3Payload = yield call(getSignedRequest, audioFile)
        if (!!s3Payload.signedRequest) {
<<<<<<< HEAD:src/features/album/admin/sagas/index.js
            yield call(uploadFile, {file: audioFile, signedRequest: s3Payload.signedRequest})
=======
             yield call(uploadFile, {file: audioFile, signedRequest: s3Payload.signedRequest})
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb:src/redux/sagas/admin/album.js
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
    const fields = [
        {audio},
        {title},
        {trackNumber},
        {_id: audioId},
        {remove}
    ]
    for (let field of fields)
        setFormData(updatedAlbum, field)


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
    yield takeLatest('album/createAlbum', createAlbum)
}

export function* watchUpdateAlbum() {
    yield takeLatest('album/updateAlbum', updateAlbumDetail)
}

export function* watchAddSongToAlbum() {
    yield takeLatest('album/addSongToAlbum', addSongToAlbum)
}
