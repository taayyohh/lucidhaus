import {all, call, put, fork, takeEvery, takeLatest} from 'redux-saga/effects'
import {authenticate, getPurchaseHistory, isAuthenticated, signin, signout, signup} from '../services/api'

import {stripTrailingSlash} from '../utils/url'

function* navigate({payload}) {
    // stripping trailing slash by default
    const {pathname, search} = payload.location

    let slug = stripTrailingSlash(pathname)
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
    yield call(authenticate, payload.payload)
    yield put({type: 'user/authenticateSuccess', payload})
}

function* isAuth() {
    const payload = yield call(isAuthenticated)
    if (payload.token) {
        yield put({type: 'user/isAuthenticatedSuccess', payload})
    } else {
        yield put({type: 'user/isAuthenticatedFailure', payload})
    }
}

function* signOut() {
    yield call(signout)
}

function* signUp(user) {
    const payload = yield call(signup, user.payload)
    try {
        if(!payload.error) {
            yield put({type: 'user/signUpSuccess', payload})
        } else {
            yield put({type: 'user/signUpFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/signUpFailure', payload})
    }

}

function* purchaseHistory(user) {
    try {
        console.log('purchase', user)
        const payload = yield call(getPurchaseHistory, user.payload)
        if(!payload.error) {
            yield put({type: 'user/getPurchaseSuccess', payload})
        } else {
            yield put({type: 'user/getPurchaseFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/getPurchaseFailure', error})
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

function* watchSignOut() {
    yield takeEvery('user/signOut', signOut)
}

function* watchSignUp() {
    yield takeEvery('user/signUp', signUp)
}

function* watchUserHistory() {
    yield takeEvery('user/getPurchaseHistory', purchaseHistory)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        fork(watchNavigate),
        fork(watchSignIn),
        fork(watchAuthenticate),
        fork(watchIsAuthenticated),
        fork(watchSignOut),
        fork(watchSignUp),
        fork(watchUserHistory)
    ])
}
