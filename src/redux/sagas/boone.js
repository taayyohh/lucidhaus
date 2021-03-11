import {call, put, takeEvery}                        from 'redux-saga/effects'
import {getBooneAutoComplete as getBooneSuggestions} from '../../services/apiBoone'


export function* getBooneAutoComplete({payload}) {
    try {
        const suggestions = yield call(getBooneSuggestions, payload)

        console.log('sugg', suggestions)

        if (!suggestions.error) {
            yield put({type: 'place/getBooneAutoCompleteSuccess', suggestions})
        } else {
            yield put({type: 'place/getBooneAutoCompleteFailure', suggestions})
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