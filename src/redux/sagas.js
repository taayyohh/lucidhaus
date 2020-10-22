import {push}    from 'connected-react-router'
import {
    all,
    call,
    fork,
    put,
    takeEvery
}                from 'redux-saga/effects'
import {getCart} from '../features/shop/cartHelpers'
import {
    addBusiness,
    addProduct,
    deleteBusiness,
    deleteProduct,
    getBusiness,
    getBusinesses,
    getProduct,
    getProducts,
    getSignedRequest,
    listOrders,
    listStatusValues,
    updateBusiness,
    updateOrderStatus,
    updateProduct,
    uploadFile
}                from '../services/apiAdmin'
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
import {
    updateBusinessPath,
    updateProductPath
}             from '../variables/pathnames'


/**
 *
 *
 * @param ADMIN
 *
 *
 */

/* Auth */

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


/* Business */

function* createBusiness(business) {
    const {_id, token, values} = business.payload
    const {name, description, photo, image} = values

    //add to formdata so api can read
    const newBusiness = new FormData()
    newBusiness.set('name', name)
    newBusiness.set('description', description)
    newBusiness.set('photo', photo)

    const payload = yield call(getSignedRequest, {croppedImage: image})
    if (!!payload.signedRequest) {
        const uploadImage = yield call(uploadFile, {file: image, signedRequest: payload.signedRequest})
        console.log('upload', uploadImage)

        const created = yield call(addBusiness, {userId: _id, token: token, business: newBusiness})
        console.log('created', created)
        if (!created.error) {
            yield put({type: 'admin/createBusinessesSuccess', payload})
            yield put(push(updateBusinessPath + created.slug))

        } else {
            yield put({type: 'admin/createBusinessesFailure', payload})

        }

    }
}

function* updateBusinessDetail(business) {
    const {slug, _id, token, values} = business.payload
    const {name, description, photo, image} = values

    //add to formData so api can read
    const newBusiness = new FormData()
    newBusiness.set('name', name)
    newBusiness.set('description', description)
    newBusiness.set('photo', photo)

    if (!!image) {
        const s3Payload = yield call(getSignedRequest, {croppedImage: image})
        if (!!s3Payload.signedRequest) {
            const uploadImage = yield call(uploadFile, {file: image, signedRequest: s3Payload.signedRequest})
            console.log('upload', uploadImage)
        }
    }

    try {
        const updated = yield call(updateBusiness, {slug: slug, userId: _id, token: token, business: newBusiness})
        if (!updated.error) {
            yield put({type: 'business/updateBusinessSuccess', updated})
        } else {
            yield put({type: 'business/updateBusinessFailure', updated})
        }
    } catch (error) {
        yield put({type: 'business/updateBusinessFailure'})
    }
}

function* attemptDestroyBusiness(business) {
    yield put({type: 'admin/confirmDestroyBusiness', payload: business.payload})
}

function* destroyBusiness(business) {
    const destroyed = yield call(deleteBusiness, business.payload)
    if (!destroyed.error) {
        yield put({type: 'admin/destroyBusinessSuccess'})
        yield put(push('/admin/marketplace'))
    } else {
        yield put({type: 'admin/destroyBusinessFailure'})
    }
}

function* destroyBusinessSuccess() {
    yield put(push('/admin/marketplace'))
}


/* Product */
function* createProduct(product) {
    const {_id, token, values} = product.payload
    const {name, description, photo, image, quantity, price} = values

    //add to formdata so api can read
    const newProduct = new FormData()
    newProduct.set('name', name)
    newProduct.set('description', description)
    newProduct.set('photo', photo)
    newProduct.set('quantity', quantity)
    newProduct.set('price', price)

    const payload = yield call(getSignedRequest, {croppedImage: image})
    if (!!payload.signedRequest) {
        const uploadImage = yield call(uploadFile, {file: image, signedRequest: payload.signedRequest})
        console.log('upload', uploadImage)

        const created = yield call(addProduct, {userId: _id, token: token, product: newProduct})
        console.log('created', created)
        if (!created.error) {
            yield put({type: 'admin/createProductSuccess', payload})
            yield put(push(updateProductPath + created.slug))

        } else {
            yield put({type: 'admin/createProductFailure', payload})

        }

    }
}

function* updateProductDetail(product) {
    const {slug, _id, token, values} = product.payload
    const {name, description, photo, image, quantity, price} = values

    //add to formData so api can read
    const newProduct = new FormData()
    newProduct.set('name', name)
    newProduct.set('description', description)
    newProduct.set('photo', photo)
    newProduct.set('quantity', quantity)
    newProduct.set('price', price)

    if (!!image) {
        const s3Payload = yield call(getSignedRequest, {croppedImage: image})
        if (!!s3Payload.signedRequest) {
            const uploadImage = yield call(uploadFile, {file: image, signedRequest: s3Payload.signedRequest})
            console.log('upload', uploadImage)
        }
    }

    try {
        const updated = yield call(updateProduct, {slug: slug, userId: _id, token: token, product: newProduct})
        if (!updated.error) {
            yield put({type: 'product/updateProductSuccess', updated})
        } else {
            yield put({type: 'product/updateProductFailure', updated})
        }
    } catch (error) {
        yield put({type: 'product/updateProductFailure'})
    }
}

function* attemptDestroyProduct(product) {
    yield put({type: 'admin/confirmDestroyProduct', payload: product.payload})
}

function* destroyProduct(product) {
    console.log('DDDD', product.payload)
    const destroyed = yield call(deleteProduct, product.payload)
    if (!destroyed.error) {
        yield put({type: 'admin/destroyProductSuccess'})
        yield put(push('/admin/shop'))
    } else {
        yield put({type: 'admin/destroyProductFailure'})
    }
}

function* destroyProductSuccess() {
    yield put(push('/admin/shop'))
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
    const cart = yield getCart()
    if(cart.length > 0) {
        yield put({type: 'shop/updateCartSuccess', payload: {cart: cart}})
    }
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
        yield put({type: 'admin/getMarketplaceFailure', error})
    }
}

function* getBusinessDetail(business) {
    try {
        const payload = yield call(getBusiness, business.payload)
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
 *
 *
 * @param SHOP
 *
 *
 */


function* getShop() {
    try {
        const payload = yield call(getProducts)
        if (!payload.error) {
            yield put({type: 'shop/getShopSuccess', payload})
        } else {
            yield put({type: 'shop/getShopFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getShopFailure', error})
    }
}

function* getProductDetail(product) {
    try {
        const payload = yield call(getProduct, product.payload)
        if (!payload.error) {
            yield put({type: 'shop/getProductSuccess', payload})
        } else {
            yield put({type: 'shop/getProductFailure', payload})
        }
    } catch (error) {
        yield put({type: 'shop/getProductFailure'})
    }
}

function* getOrders(request) {
    try {
        const payload = yield call(listOrders, request.payload)
        if (!payload.error) {
            yield put({type: 'shop/getOrdersSuccess', payload})
        } else {
            yield put({type: 'shop/getOrdersFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getOrdersFailure', error})
    }
}

function* getStatusValues(request) {
    try {
        const payload = yield call(listStatusValues, request.payload)
        if (!payload.error) {
            yield put({type: 'shop/getStatusValuesSuccess', payload})
        } else {
            yield put({type: 'shop/getStatusValuesFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getStatusValuesFailure', error})
    }
}

function* updateStatusValue(request) {
    const {_id, token, orderId, status} = request.payload

    try {
        const payload = yield call(updateOrderStatus, {_id, token, orderId, status: {status, orderId}})
        if (!payload.error) {
            yield put({type: 'shop/updateStatusValueSuccess', payload})
        } else {
            yield put({type: 'shop/updateStatusValueFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/updateStatusValueFailure', error})
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

/* Auth */
function* watchAuthenticate() {
    yield takeEvery('user/authenticate', authenticateUser)
}

function* watchIsAuthenticated() {
    yield takeEvery('user/isAuthenticated', isAuth)
}


/* Business */
function* watchCreateBusiness() {
    yield takeEvery('admin/createBusiness', createBusiness)
}

function* watchAttemptDestroyBusiness() {
    yield takeEvery('admin/attemptDestroyBusiness', attemptDestroyBusiness)
}

function* watchDestroyBusiness() {
    yield takeEvery('admin/destroyBusiness', destroyBusiness)
}

function* watchDestroyBusinessSuccess() {
    yield takeEvery('admin/attemptDestroyBusinessSuccess', destroyBusinessSuccess)
}

function* watchUpdateBusiness() {
    yield takeEvery('admin/updateBusiness', updateBusinessDetail)
}


/* Product*/
function* watchCreateProduct() {
    yield takeEvery('admin/createProduct', createProduct)
}

function* watchAttemptDestroyProduct() {
    yield takeEvery('admin/attemptDestroyProduct', attemptDestroyProduct)
}

function* watchDestroyProduct() {
    yield takeEvery('admin/destroyProduct', destroyProduct)
}

function* watchDestroyProductSuccess() {
    yield takeEvery('admin/attemptDestroyProductSuccess', destroyProductSuccess)
}

function* watchUpdateProduct() {
    yield takeEvery('admin/updateProduct', updateProductDetail)
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


/**
 *
 *
 * SHOP WATCHERS
 *
 *
 */

function* watchGetShop() {
    yield takeEvery('shop/getShop', getShop)
}

function* watchGetProductDetail() {
    yield takeEvery('shop/getProduct', getProductDetail)
}

function* watchGetOrders() {
    yield takeEvery('shop/getOrders', getOrders)
}

function* watchGetStatusValues() {
    yield takeEvery('shop/getStatusValues', getStatusValues)
}

function* watchUpdateStatusValue() {
    yield takeEvery('shop/updateStatusValue', updateStatusValue)
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
        fork(watchAttemptDestroyBusiness),
        fork(watchDestroyBusiness),
        fork(watchDestroyBusinessSuccess),
        fork(watchUpdateBusiness),
        fork(watchGetBusinessDetail),
        fork(watchGetShop),
        fork(watchCreateProduct),
        fork(watchAttemptDestroyProduct),
        fork(watchDestroyProduct),
        fork(watchDestroyProductSuccess),
        fork(watchUpdateProduct),
        fork(watchGetProductDetail),
        fork(watchGetOrders),
        fork(watchGetStatusValues),
        fork(watchUpdateStatusValue),
    ])
}