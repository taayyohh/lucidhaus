import {takeEvery}                     from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import {call, put}                     from 'redux-saga/effects'
import {authenticate, isAuthenticated} from '../../site/services'

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

export function* isAuthenticatedSuccess({payload}) {
    yield put({
        type: 'user/getUser',
        payload: {
            slug: payload.user.slug,
            _id: payload.user._id,
            token: payload.token
        }
    })
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

export function* watchAuthenticateSuccess() {
    yield takeEvery('user/isAuthenticatedSuccess', isAuthenticatedSuccess)
}

export function* watchAuthenticateUserSuccess() {
    yield takeEvery('user/authenticateSuccess', isAuthenticatedSuccess)
}

export function* watchIsAuthenticated() {
    yield takeEvery('user/isAuthenticated', isAuth)
}
