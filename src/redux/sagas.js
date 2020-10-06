import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {authenticate, getPurchaseHistory, isAuthenticated, signin, signout, signup, update} from '../services/apiAuth'
import {push} from 'connected-react-router'
import {stripTrailingSlash} from '../utils/url'
import {getBusinesses} from "../services/apiAdmin";


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
            yield put(push(payload?.user?.role === 1 ? '/admin/dashboard' : '/user/dashboard'))
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
        yield put({type: 'site/initializeSuccess'})
    } else {
        yield put({type: 'user/isAuthenticatedFailure', payload})
        yield put({type: 'site/initializeSuccess'})
    }
}

function* signOut() {
    const payload = yield call(signout)
    if (!payload.error) {
        yield put({type: 'user/signOutSuccess', payload})
        yield put(push('/'))
    } else {
        yield put({type: 'user/signOutFailure', payload})
    }
}

function* signUp(user) {
    const payload = yield call(signup, user.payload)
    try {
        if (!payload.error) {
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
        const payload = yield call(getPurchaseHistory, user.payload)
        if (!payload.error) {
            yield put({type: 'user/getPurchaseSuccess', payload})
        } else {
            yield put({type: 'user/getPurchaseFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/getPurchaseFailure', error})
    }
}

function* loadConfig() {
    yield put({type: 'user/isAuthenticated'})
}

function* updateProfile(user) {
    try {
        const {_id, updatedUser, token} = user.payload
        const payload = yield call(update, _id, token, updatedUser)
        console.log('PAYLOAD', payload)
        if (!payload.error) {
            //     const updatedPayload = yield call(updateUser, payload)
            //  console.log('payyy', updatedPayload)
            //     yield put({type: 'user/updateSuccess', updatedPayload})
        } else {
            yield({type: 'user/updateFailure', payload})
        }

    } catch (error) {
        yield({type: 'user/updateFailure', error})
    }
    //  yield put({type: 'user/updateProfile'})


    // update(_id, token, {updatedName, updatedEmail, updatedPassword}).then(data => {
    //     if (data.error) {
    //         console.log(data.error)
    //     } else {
    //         updateUser(data, () => {
    //             setValues({
    //                 ...values,
    //                 name: data.name,
    //                 email: data.email,
    //                 success: true
    //             })
    //         })
    //     }
    // })
}


function* getAllBusinesses() {
    try {
        const payload = yield call(getBusinesses)
        console.log('payload', payload)
        if (!payload.error) {
            yield put({type: 'admin/getBusinessesSuccess', payload})
        } else {
            yield put({type: 'admin/getBusinessesFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getBusinessFailure', error})
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

function* watchLoadConfig() {
    yield takeEvery('site/loadConfig', loadConfig)
}

function* watchUpdateProfile() {
    yield takeEvery('user/updateProfile', updateProfile)
}

function* watchGetBusiness() {
    yield takeEvery('admin/getAllBusinesses', getAllBusinesses)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        fork(watchNavigate),
        fork(watchLoadConfig),
        fork(watchSignIn),
        fork(watchAuthenticate),
        fork(watchIsAuthenticated),
        fork(watchSignOut),
        fork(watchSignUp),
        fork(watchUserHistory),
        fork(watchUpdateProfile),
        fork(watchGetBusiness)
    ])
}
