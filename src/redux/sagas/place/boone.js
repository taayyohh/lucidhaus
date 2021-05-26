import {call, put, takeEvery}                                           from 'redux-saga/effects'
import {getBooneAutoComplete as getBooneSuggestions, getPlaceFromBoone} from 'services/boone'


export function* getBooneAutoComplete({payload}) {
    try {
        const suggestions = yield call(getBooneSuggestions, payload)

        if (!suggestions.error) {
            yield put({type: 'place/getBooneAutoCompleteSuccess', payload: suggestions})
        } else {
            yield put({type: 'place/getBooneAutoCompleteFailure', payload: suggestions})
        }
    } catch (error) {
        yield put({type: 'place/getBooneFailure', error})
    }
}

export function* getBoonePlace({payload}) {
    try {
        const place = yield call(getPlaceFromBoone, payload)

        if (!place.errors && !place.error) {
            yield put({type: 'place/getBoonePlaceSuccess', payload: place})
        } else {
            yield put({type: 'place/getBoonePlaceFailure', payload: place.errors || place})
        }
    } catch (error) {
        yield put({type: 'place/getBooneFailure', error})
    }
}


/**
 *
 *
 * BOONE WATCHERS
 *
 *
 */

export function* watchGetBooneAutoComplete() {
    yield takeEvery('place/getBooneAutoComplete', getBooneAutoComplete)
}

export function* watchGetBoonePlace() {
    yield takeEvery('place/getBoonePlace', getBoonePlace)
}
