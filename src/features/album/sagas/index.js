import {getAlbum, getAlbums}  from 'features/album/services'
import {call, put, takeEvery} from 'redux-saga/effects'


/**
 *
 *
 * @param POST
 *
 *
 */


export function* getAlbumsDetail() {
    try {
        const payload = yield call(getAlbums)
        if (!payload.error) {
            yield put({type: 'album/getAlbumsSuccess', payload})
        } else {
            yield put({type: 'album/getAlbumsFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getAlbumsFailure', error})
    }
}

export function* getAlbumDetail({payload}) {
    try {
        const album = yield call(getAlbum, payload)
        if (!album.error) {
            yield put({type: 'album/getAlbumSuccess', payload: album})
        } else {
            yield put({type: 'album/getAlbumFailure', payload: album})
        }
    } catch (error) {
        yield put({type: 'album/getAlbumFailure'})
    }
}

/**
 *
 *
 * POST WATCHERS
 *
 *
 */

export function* watchGetAlbums() {
    yield takeEvery('album/getAlbums', getAlbumsDetail)
}

export function* watchGetAlbumDetail() {
    yield takeEvery('album/getAlbum', getAlbumDetail)
}
