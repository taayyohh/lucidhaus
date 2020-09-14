import {
    all,
    takeEvery,
    takeLatest,
    call,
    put
}               from 'redux-saga/effects'
import {signin} from '../services/api'

import {stripTrailingSlash} from '../utils/url'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* navigate({payload}) {
    // stripping trailing slash by default
    const {pathname, search} = payload.location

    let slug = stripTrailingSlash(pathname)

    yield console.log('slug', slug)
    yield console.log('slug', search)

    // how to dispatch an action

    // yield put({
    //     type: 'REQUEST_DATA',
    //     pathname: slug,
    //     search: search
    // })
}

function* signIn({email, password}) {
    try {
        const payload = yield call(signin, {email, password})
        if(payload.error) {
            yield console.log('ERROR', payload)
            yield put({type: 'user/signInFailure', payload})
        } else {
            yield console.log('SUCCES', payload)
            yield put({type: 'user/signInSuccess', payload})
        }
    } catch(error) {
        yield put({type: 'user/signInFailure', error})
    }
}


/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
function* watchSignIn() {
    yield takeEvery('user/signIn', signIn)
}

function* watchNavigate() {
    yield takeLatest('@@router/LOCATION_CHANGE', navigate)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchSignIn(),
        watchNavigate()
        // watchIncrementAsync()
    ])
}
