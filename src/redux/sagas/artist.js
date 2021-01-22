import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects'
import {
    getArtist,
    getArtists
} from 'services/apiArtist'

/**
 *
 *
 * @param POST
 *
 *
 */


export function* getArtistsDetail() {
    try {
        const payload = yield call(getArtists)
        if (!payload.error) {
            yield put({type: 'artist/getArtistsSuccess', payload})
        } else {
            yield put({type: 'artist/getArtistsFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getArtistsFailure', error})
    }
}

export function* getArtistDetail({payload}) {
    try {
        const artist = yield call(getArtist, payload)
        if (!artist.error) {
            yield put({type: 'artist/getArtistSuccess', payload: artist})
        } else {
            yield put({type: 'artist/getArtistFailure', payload: artist})
        }
    } catch (error) {
        yield put({type: 'artist/getArtistFailure'})
    }
}

/**
 *
 *
 * POST WATCHERS
 *
 *
 */

export function* watchGetArtists() {
    yield takeEvery('artist/getArtists', getArtistsDetail)
}

export function* watchGetArtistDetail() {
    yield takeEvery('artist/getArtist', getArtistDetail)
}