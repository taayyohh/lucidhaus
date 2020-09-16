import {
    all,
    call,
    put,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'
import {
    authenticate,
    signin,
    isAuthenticated
} from '../services/api'

import {stripTrailingSlash} from '../utils/url'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* navigate({payload}) {
    // stripping trailing slash by default
    const {pathname, search} = payload.location

    let slug = stripTrailingSlash(pathname)

  //  yield put({type: 'user/isAuthenticated', payload})
}

function* signIn(user) {
    try {
        const payload = yield call(signin, user.payload)
        if (!payload.error) {
            yield put({type: 'user/signInSuccess', payload})
            yield put({type: 'user/authenticate', payload})
        } else {
            yield put({type: 'user/signInFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/signInFailure', error})
    }
}

function* authenticateUser(payload) {
    yield delete payload.payload['user']
    yield call(authenticate, payload.payload)
    yield put({type: 'user/authenticateSuccess', payload})
}

function* isAuth() {
    const payload = yield call(isAuthenticated)
    if(payload.token) {
        yield put({type: 'user/isAuthenticatedSuccess', payload})
    } else {
        yield put({type: 'user/isAuthenticatedFailure', payload})
    }
}


/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/


function* watchNavigate() {
    yield takeLatest('@@router/LOCATION_CHANGE', navigate)
}

function* watchSignIn() {
    yield takeEvery('user/signIn', signIn)
}

function* watchAuthenticate() {
    yield takeEvery('user/authenticate', authenticateUser)
}

function* watchIsAuthenticated() {
    yield takeEvery('user/isAuthenticated', isAuth)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchNavigate(),
        watchSignIn(),
        watchAuthenticate(),
        watchIsAuthenticated()

        // watchIncrementAsync()
    ])
}
