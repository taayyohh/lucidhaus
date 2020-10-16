import {push} from 'connected-react-router'
import {
    all,
    call,
    fork,
    put,
    takeEvery
}             from 'redux-saga/effects'
import {
    addBusiness,
    deleteBusiness,
    getBusiness,
    getBusinesses,
    getSignedRequest,
    uploadFile
} from '../services/apiAdmin'
import {
    authenticate,
    getPurchaseHistory,
    isAuthenticated,
    signin,
    signout,
    signup,
    update,
    updateUser
}             from '../services/apiUser'


/**
 *
 *
 * @param ADMIN
 *
 *
 */

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

function* createBusiness(business) {
    const {_id, token, s3Path, values} = business.payload
    const {name, description, key, image} = values

    //add to formdata so api can read
    const newBusiness = new FormData()
    newBusiness.set('name', name)
    newBusiness.set('description', description)
    newBusiness.set('photo', s3Path + '/' + key)

    const payload = yield call(getSignedRequest, {croppedImage: values.image, s3Path: s3Path})
    if (!!payload.signedRequest) {
        const uploadImage = yield call(uploadFile, {file: image, signedRequest: payload.signedRequest})
        console.log('upload', uploadImage)

        const created = yield call(addBusiness, {userId: _id, token: token, business: newBusiness})
        console.log('created', created)
        if (!created.error) {
            yield put({type: 'admin/createBusinessesSuccess', payload})

        } else {
            yield put({type: 'admin/createBusinessesFailure', payload})

        }

    }
}

function* destroyBusiness(business) {
    const destroyed = yield call(deleteBusiness, business.payload)
    console.log('destroyed', destroyed)
}


/**
 *
 *
 * @param USER
 *
 *
 */

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

function* updateProfile(user) {
    try {
        const {_id, token, updatedUser} = user.payload
        const payload = yield call(update, _id, token, updatedUser.values)

        if (!payload.error) {
            yield call(updateUser, {name: payload.name, email: payload.email, _id: payload._id, role: payload.role})
            yield put({type: 'user/updateSuccess', payload})
            yield put(push(payload?.user?.role === 1 ? '/admin/dashboard' : '/user/dashboard'))
        } else {
            yield put({type: 'user/updateFailure', payload})
        }

    } catch (error) {
        yield put({type: 'user/updateFailure', error})
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


/**
 *
 *
 * @param SITE
 *
 *
 */

function* loadConfig() {
    yield put({type: 'user/isAuthenticated'})
}


/**
 *
 *
 * @param BUSINESS
 *
 *
 */



function* getMarketplace() {
    try {
        const payload = yield call(getBusinesses)
        if (!payload.error) {
            yield put({type: 'business/getMarketplaceSuccess', payload})
        } else {
            yield put({type: 'business/getMarketplaceFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getBusinessFailure', error})
    }
}


function* getBusinessDetail(business) {
    try {
        const payload =  yield call(getBusiness, business.payload)
        if (!payload.error) {
            yield put({type: 'business/getBusinessSuccess', payload})
        } else {
            yield put({type: 'business/getBusinessFailure', payload})
        }
    } catch (error) {
        yield put({type: 'business/getBusinessFailure'})
    }
}


/**
 * ****************************************************************************/

/******************************* WATCHERS *************************************/

/****************************************************************************
 **/

/**
 *
 *
 * ADMIN WATCHERS
 *
 *
 */

function* watchCreateBusiness() {
    yield takeEvery('admin/createBusiness', createBusiness)
}

function* watchDestroyBusiness() {
    yield takeEvery('admin/destroyBusiness', destroyBusiness)
}

function* watchAuthenticate() {
    yield takeEvery('user/authenticate', authenticateUser)
}

function* watchIsAuthenticated() {
    yield takeEvery('user/isAuthenticated', isAuth)
}


/**
 *
 *
 * USER WATCHERS
 *
 *
 */

function* watchSignIn() {
    yield takeEvery('user/signIn', signIn)
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


/**
 *
 *
 * SITE WATCHERS
 *
 *
 */

function* watchLoadConfig() {
    yield takeEvery('site/loadConfig', loadConfig)
}

function* watchUpdateProfile() {
    yield takeEvery('user/updateProfile', updateProfile)
}


/**
 *
 *
 * BUSINESS WATCHERS
 *
 *
 */

function* watchGetMarketplace() {
    yield takeEvery('business/getMarketplace', getMarketplace)
}

function* watchGetBusinessDetail() {
    yield takeEvery('business/getBusiness', getBusinessDetail)
}


//TODO: determine best method of combining rootSaga
export default function* rootSaga() {
    yield all([
        fork(watchLoadConfig),
        fork(watchSignIn),
        fork(watchAuthenticate),
        fork(watchIsAuthenticated),
        fork(watchSignOut),
        fork(watchSignUp),
        fork(watchUserHistory),
        fork(watchUpdateProfile),
        fork(watchGetMarketplace),
        fork(watchCreateBusiness),
        fork(watchDestroyBusiness),
        fork(watchGetBusinessDetail)
    ])
}