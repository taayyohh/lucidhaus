import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects'
import {
    getPlace,
    getPlaces
} from 'features/place/services'

/**
 *
 *
 * @param POST
 *
 *
 */


export function* getPlacesDetail() {
    try {
        const payload = yield call(getPlaces)
        if (!payload.error) {
            yield put({type: 'place/getPlacesSuccess', payload})
        } else {
            yield put({type: 'place/getPlacesFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getPlacesFailure', error})
    }
}

export function* getPlaceDetail({payload}) {
    try {
        const place = yield call(getPlace, payload)
        if (!place.error) {
            yield put({type: 'place/getPlaceSuccess', payload: place})
        } else {
            yield put({type: 'place/getPlaceFailure', payload: place})
        }
    } catch (error) {
        yield put({type: 'place/getPlaceFailure'})
    }
}

/**
 *
 *
 * POST WATCHERS
 *
 *
 */

export function* watchGetPlaces() {
    yield takeEvery('place/getPlaces', getPlacesDetail)
}

export function* watchGetPlaceDetail() {
    yield takeEvery('place/getPlace', getPlaceDetail)
}
