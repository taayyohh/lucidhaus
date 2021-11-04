import {getBooneAutoComplete as getBooneSuggestions, getPlaceFromBoone} from 'features/place/services/boone'
import {call, put, takeEvery}                                           from 'redux-saga/effects'


export function* getBooneAutoComplete({payload}) {
    try {
        const suggestions = yield call(getBooneSuggestions, payload)
        const failedToFetch = !!suggestions.stack && suggestions.stack.includes('TypeError')

        console.log('suggestions', suggestions)

        if (!suggestions.error && !failedToFetch && suggestions?.data?.length > 0) {
            yield put({type: 'place/getBooneAutoCompleteSuccess', payload: suggestions})
        } else {
            yield put({type: 'place/getBooneAutoCompleteFailure', payload: suggestions?.message || suggestions})
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
