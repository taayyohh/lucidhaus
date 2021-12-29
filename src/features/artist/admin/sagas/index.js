import {push}                         from 'connected-react-router'
import {addArtist, updateArtist}      from 'features/artist/services'
import {getSignedRequest, uploadFile} from 'features/site/services/s3'
import {call, put, takeLatest}        from 'redux-saga/effects'
import {setFormData}                  from 'utils/abstractions/setFormData'

export function* createArtist({payload}) {
    const {_id, token, name, description, photo, photoFile, isPublished} = payload

    //add to formData so api can read
    const artist = new FormData()
    const fields = [
        {name},
        {description},
        {photo},
        {isPublished}
    ]
    for (let field of fields)
        setFormData(artist, field)


    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        }
    }

    const createdArtist = yield call(addArtist, {_id: _id, token: token, artist: artist})
    if (!createdArtist.error) {
        yield put({type: 'artist/getArtists'})
        yield put(push('/admin/artists/update/' + createdArtist.slug))

    } else {
        yield put({type: 'artist/createArtistsFailure', payload})
    }
}

export function* updateArtistDetail({payload}) {
    const {slug, _id, token, name, description, photo, isPublished, photoFile} = payload

    //add to formData so api can read
    const artist = new FormData()
    const fields = [
        {name},
        {description},
        {photo},
        {isPublished}
    ]
    for (let field of fields)
        setFormData(artist, field)

    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateArtist, {slug: slug, _id: _id, token: token, artist: artist})
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


/**
 *
 *
 * ADMIN ARTIST WATCHERS
 *
 *
 */

export function* watchCreateArtist() {
    yield takeLatest('artist/createArtist', createArtist)
}

export function* watchUpdateArtist() {
    yield takeLatest('admin/updateArtist', updateArtistDetail)
}
