import {takeEvery} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import {
    call,
    put
}                  from 'redux-saga/effects'
import {
    authenticate,
    isAuthenticated
}                  from 'services/apiUser'

export function* authenticateUser({payload}) {
    yield call(authenticate, payload)
    yield put({type: 'user/authenticateSuccess', payload})
}

export function* isAuth() {
    const authUser = yield call(isAuthenticated)
    if (authUser.token) {
        yield put({type: 'user/isAuthenticatedSuccess', payload: authUser})
        yield put({type: 'site/initializeSuccess'})
    } else {
        yield put({type: 'user/isAuthenticatedFailure', payload: authUser})
        yield put({type: 'site/initializeSuccess'})
    }
}

/**
 *
 *
 * AUTH WATCHERS
 *
 *
 */


export function* watchAuthenticate() {
    yield takeEvery('user/authenticate', authenticateUser)
}

export function* watchIsAuthenticated() {
    yield takeEvery('user/isAuthenticated', isAuth)
}