import {push}      from 'connected-react-router'
import {takeEvery} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import {
    call,
    put
}                  from 'redux-saga/effects'
import {
    getPurchaseHistory,
    signin,
    signout,
    signup
}                  from 'services/apiUser'

export function* signIn({payload}) {
    try {
        const user = yield call(signin, payload)
        if (!user.error) {
            yield put({type: 'user/signInSuccess', payload: user})
            yield put({type: 'user/authenticate', payload: user})
            yield put(push(user?.user?.role === 1 ? '/admin' : '/dashboard'))
        } else {
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: user.error,
                    theme: 'red'
                }
            })
        }
    } catch (error) {
        yield put({type: 'site/signInFailure', error})
    }
}

export function* signOut() {
    const payload = yield call(signout)
    if (!payload.error) {
        yield put({type: 'user/signOutSuccess', payload})
        yield put(push('/signin'))
    } else {
        yield put({type: 'user/signOutFailure', payload})
    }
}

export function* signUp({payload}) {
    //TODO: if no users exists in database make first user a superAdmin
   // const newPayload = {...payload, role: 1}

    const user = yield call(signup, payload)
    try {
        if (!user.error) {
            yield put({type: 'user/signUpSuccess', payload: user})
            yield put(push('/signin/'))
        } else {
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: user.error,
                    theme: 'red'
                }
            })
        }
    } catch (error) {
        yield put({type: 'user/signUpFailure', payload: error})
    }

}

export function* purchaseHistory({payload}) {
    try {
        const user = yield call(getPurchaseHistory, payload)
        if (!user.error) {
            yield put({type: 'user/getPurchaseHistorySuccess', payload: user})
        } else {
            yield put({type: 'user/getPurchaseHistoryFailure', payload: user})
        }
    } catch (error) {
        yield put({type: 'user/getPurchaseHistoryFailure', error})
    }
}

/**
 *
 *
 * USER WATCHERS
 *
 *
 */

export function* watchSignIn() {
    yield takeEvery('user/signIn', signIn)
}

export function* watchSignOut() {
    yield takeEvery('user/signOut', signOut)
}

export function* watchSignUp() {
    yield takeEvery('user/signUp', signUp)
}

export function* watchUserHistory() {
    yield takeEvery('user/getPurchaseHistory', purchaseHistory)
}