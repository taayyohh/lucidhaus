import {takeLatest} from '@redux-saga/core/effects'
import {push}       from 'connected-react-router'
import {
    all,
    call,
    fork,
    put,
    takeEvery
}                   from 'redux-saga/effects'
import {
    addBusiness,
    deleteBusiness,
    getBusiness,
    getBusinesses,
    updateBusiness
}                   from '../services/apiAdmin'
import {
    getBraintreeClientToken,
    getPaymentMethod
}                   from '../services/apiBraintree'
import {
    listOrders,
    listStatusValues,
    updateOrderStatus
}                   from '../services/apiOrders'
import {
    addProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct
}                   from '../services/apiProduct'
import {
    addProductCategory,
    allProductCategories,
    deleteProductCategory,
    getProductCategory,
    updateProductCategory
}                   from '../services/apiProductCategory'
import {
    getSignedRequest,
    uploadFile
}                   from '../services/apiS3'
import {
    createOrder,
    listRelated,
    processPayment
}                   from '../services/apiShop'
import {
    authenticate,
    getPurchaseHistory,
    isAuthenticated,
    signin,
    signout,
    signup,
    update,
    updateUser
}                   from '../services/apiUser'
import {
    addItem,
    emptyCart,
    getCart,
    removeItem,
    updateItem
} from '../utils/cartHelpers'


/**
 *
 *
 * @param ADMIN
 *
 *
 */

/* Auth */

function* authenticateUser({payload}) {
    yield call(authenticate, payload)
    yield put({type: 'user/authenticateSuccess', payload})
}

function* isAuth() {
    const authUser = yield call(isAuthenticated)
    if (authUser.token) {
        yield put({type: 'user/isAuthenticatedSuccess', payload: authUser})
        yield put({type: 'site/initializeSuccess'})
    } else {
        yield put({type: 'user/isAuthenticatedFailure', payload: authUser})
        yield put({type: 'site/initializeSuccess'})
    }
}

function* navigate({payload}) {
    const {location} = payload
    const slug = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    yield put({type: 'site/setSlug', payload: {slug: slug}})
}


/* Business */

function* createBusiness({payload}) {
    const {_id, token, name, description, photo, image} = payload

    //add to formdata so api can read
    const business = new FormData()
    business.set('name', name)
    business.set('description', description)
    business.set('photo', photo)

    const s3Payload = yield call(getSignedRequest, {croppedImage: image})
    if (!!s3Payload.signedRequest) {
        const uploadImage = yield call(uploadFile, {file: image, signedRequest: s3Payload.signedRequest})
        console.log('upload', uploadImage)

        const createdBusiness = yield call(addBusiness, {userId: _id, token: token, business: business})
        console.log('createdBusiness', createdBusiness)
        if (!createdBusiness.error) {
            yield put({type: 'admin/createBusinessesSuccess', createdBusiness})
            yield put(push('/admin/marketplace/update/' + createdBusiness.slug))

        } else {
            yield put({type: 'admin/createBusinessesFailure', payload})

        }

    }
}

function* updateBusinessDetail({payload}) {
    const {slug, _id, token, name, description, photo, image} = payload

    //add to formData so api can read
    const updatedBusiness = new FormData()
    updatedBusiness.set('name', name)
    updatedBusiness.set('description', description)
    updatedBusiness.set('photo', photo)

    if (!!image) {
        const s3Payload = yield call(getSignedRequest, {croppedImage: image})
        if (!!s3Payload.signedRequest) {
            const uploadImage = yield call(uploadFile, {file: image, signedRequest: s3Payload.signedRequest})
            console.log('upload', uploadImage)
        }
    }

    try {
        const updated = yield call(updateBusiness, {slug: slug, _id: _id, token: token, business: updatedBusiness})
        if (!updated.error) {
            yield put({type: 'business/updateBusinessSuccess', payload: updated})
        } else {
            yield put({type: 'business/updateBusinessFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'business/updateBusinessFailure'})
    }
}

function* attemptDestroyBusiness({payload}) {
    yield put({type: 'admin/confirmDestroyBusiness', payload: payload})
}

function* destroyBusiness({payload}) {
    const destroyed = yield call(deleteBusiness, payload)
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
function* createProduct({payload}) {
    const {_id, token, values, name, description, photo, image, quantity, price, category} = payload

    //add to formdata so api can read
    const product = new FormData()
    product.set('name', name)
    product.set('description', description)
    product.set('photo', photo)
    product.set('quantity', quantity)
    product.set('price', price)
    product.set('category', category)

    const s3Payload = yield call(getSignedRequest, {croppedImage: image})
    if (!!s3Payload.signedRequest) {
        //TODO: implement error catch
        yield call(uploadFile, {file: image, signedRequest: s3Payload.signedRequest})
        const createdProduct = yield call(addProduct, {_id: _id, token: token, product: product})

        if (!createdProduct.error) {
            yield put({type: 'admin/createProductSuccess', createdProduct})
            yield put(push('/admin/product/update/' + createdProduct.slug))

        } else {
            yield put({type: 'admin/createProductFailure', payload})

        }

    } else {
        yield console.log('pay', s3Payload)
    }
}

function* createProductCategory({payload}) {
    const {_id, token, name} = payload
    const category = new FormData()
    category.set('name', name)

    //set up error catching
    yield call(addProductCategory, {_id, token, category})
}

function* updateProductQuantity({payload}) {
    const cart = yield call(updateItem, payload)
    yield put({type: 'shop/updateCartSuccess', payload: {cart: cart}})
}

function* updateProductDetail({payload}) {
    const {slug, _id, token, values} = payload
    const {name, description, photo, image, quantity, price, category} = values

    //add to formData so api can read
    const updatedProduct = new FormData()
    updatedProduct.set('name', name)
    updatedProduct.set('description', description)
    updatedProduct.set('photo', photo)
    updatedProduct.set('quantity', quantity)
    updatedProduct.set('price', price)
    updatedProduct.set('category', category)

    if (!!image) {
        const s3Payload = yield call(getSignedRequest, {croppedImage: image})
        if (!!s3Payload.signedRequest) {
            const uploadImage = yield call(uploadFile, {file: image, signedRequest: s3Payload.signedRequest})
            console.log('upload image', uploadImage)
        }
    }

    try {
        const updated = yield call(updateProduct, {slug: slug, _id: _id, token: token, product: updatedProduct})
        if (!updated.error) {
            yield put({type: 'product/updateProductSuccess', payload: updated})
        } else {
            yield put({type: 'product/updateProductFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'product/updateProductFailure'})
    }
}

function* attemptDestroyProduct({payload}) {
    yield put({type: 'admin/confirmDestroyProduct', payload: payload})
}

function* destroyProduct({payload}) {
    const destroyed = yield call(deleteProduct, payload)
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

function* destroyProductCategory({payload}) {
    const destroyed = yield call(deleteProductCategory, payload)
    if (!destroyed.error) {
        yield put({type: 'admin/destroyProductCategorySuccess'})
        yield put(push('/admin/shop'))
    } else {
        yield put({type: 'admin/destroyProductCategoryFailure'})
    }
}

function* destroyProductCategorySuccess() {
    yield put(push('/admin/taxonomy'))
}


/**
 *
 *
 * @param USER
 *
 *
 */

function* signIn({payload}) {
    try {
        const user = yield call(signin, payload)
        if (!user.error) {
            yield put({type: 'user/signInSuccess', payload: user})
            yield put({type: 'user/authenticate', payload: user})
            yield put(push(user?.user?.role === 1 ? '/admin/dashboard' : '/user/dashboard'))
        } else {
            yield put({type: 'user/signInFailure', payload: user})
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

function* signUp({payload}) {
    //TODO: if no users exists in database make first user a superAdmin
    const newPayload = {...payload, role: 1}

    const user = yield call(signup, newPayload)
    try {
        if (!user.error) {
            yield put({type: 'user/signUpSuccess', payload: user})
            yield put(push('/signin/'))
        } else {
            yield put({type: 'user/signUpFailure', payload: user})
        }
    } catch (error) {
        yield put({type: 'user/signUpFailure', payload: error})
    }

}

function* updateProfile({payload}) {
    try {
        const {_id, token, name} = payload
        const profile = yield call(update, {_id, token, user: {name: name}})

        if (!profile.error) {
            yield call(updateUser, {
                user: {
                    name: profile.name,
                    email: profile.email,
                    _id: profile._id,
                    role: profile.role
                }
            })
            yield put({type: 'user/updateSuccess', payload: profile})
            yield put(push(profile?.role === 1 ? '/admin/dashboard' : '/user/dashboard'))
        } else {
            yield put({type: 'user/updateFailure', profile})
        }

    } catch (error) {
        yield put({type: 'user/updateFailure', error})
    }
}

function* purchaseHistory({payload}) {
    try {
        const user = yield call(getPurchaseHistory, payload)
        if (!user.error) {
            yield put({type: 'user/getPurchaseSuccess', payload: user})
        } else {
            yield put({type: 'user/getPurchaseFailure', payload: user})
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
    if (cart.length > 0) {
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

function* getBusinessDetail({payload}) {
    try {
        const business = yield call(getBusiness, payload)
        if (!business.error) {
            yield put({type: 'business/getBusinessSuccess', payload: business})
        } else {
            yield put({type: 'business/getBusinessFailure', payload: business})
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

function* getProductDetail({payload}) {
    try {
        const product = yield call(getProduct, payload)
        if (!product.error) {
            yield put({type: 'shop/getProductSuccess', payload: product})
        } else {
            yield put({type: 'shop/getProductFailure', payload: product})
        }
    } catch (error) {
        yield put({type: 'shop/getProductFailure'})
    }
}

function* getRelatedProducts({payload}) {
    try {
        const relatedProducts = yield call(listRelated, payload)
        if (!payload.error) {
            yield put({type: 'shop/getRelatedProductsSuccess', payload: relatedProducts})
        } else {
            yield put({type: 'shop/getRelatedProductsFailure', payload: relatedProducts})
        }
    } catch (error) {
        yield put({type: 'shop/getRelatedProductsFailure'})
    }
}

function* getOrders({payload}) {
    try {
        const orders = yield call(listOrders, payload)
        if (!orders.error) {
            yield put({type: 'shop/getOrdersSuccess', payload: orders})
        } else {
            yield put({type: 'shop/getOrdersFailure', payload: orders})
        }
    } catch (error) {
        yield put({type: 'admin/getOrdersFailure', error})
    }
}

function* getStatusValues({payload}) {
    try {
        const statusValues = yield call(listStatusValues, payload)
        if (!statusValues.error) {
            yield put({type: 'shop/getStatusValuesSuccess', payload: statusValues})
        } else {
            yield put({type: 'shop/getStatusValuesFailure', payload: statusValues})
        }
    } catch (error) {
        yield put({type: 'admin/getStatusValuesFailure', error})
    }
}

function* updateStatusValue({payload}) {
    const {_id, token, orderId, status} = payload

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

function* addToCart({payload}) {
    const cart = yield call(addItem, payload)
    yield put({type: 'shop/updateCartSuccess', payload: {cart: cart}})
}

function* removeFromCart({payload}) {
    yield removeItem(payload)
}

function* getProductCategories() {
    const productCategories = yield call(allProductCategories)
    yield put({type: 'shop/getProductCategoriesSuccess', payload: {productCategories: productCategories}})
}

function* getProductCategoryDetail({payload}) {
    try {
        const productCategory = yield call(getProductCategory, payload)
        if (!productCategory.error) {
            yield put({type: 'shop/getProductCategorySuccess', payload: {productCategory: productCategory}})
        } else {
            yield put({type: 'shop/getProductCategoryFailure', payload: {productCategory: productCategory}})
        }
    } catch (error) {
        yield put({type: 'admin/getProductCategoryFailure', payload: error})
    }
}

function* updateProductCategoryDetail({payload}) {
    const {categoryId, name, token, _id} = payload
    console.log('pay', payload)

    const productCategory = new FormData()
    productCategory.set('name', name)


    try {
        const category = yield call(updateProductCategory, {categoryId, productCategory, token, _id})
        if (!category.error) {
            yield put({type: 'shop/updateProductCategorySuccess', category})
            yield push(yield put(push('/admin/taxonomy')))
        } else {
            yield put({type: 'shop/updateProductCategoryFailure', category})
        }
    } catch (error) {
        yield put({type: 'admin/updateProductCategoryFailure', error})
    }
}

function* getBraintreeToken({payload}) {
    const braintreeClientToken = yield call(getBraintreeClientToken, payload)
    if (!braintreeClientToken.error) {
        yield put({type: 'shop/getBraintreeTokenSuccess', payload: braintreeClientToken})
    } else {
        yield put({type: 'shop/getBraintreeTokenFailure', payload: braintreeClientToken})
    }
}

function* getPaymentNonce({payload}) {
    const {dropInInstance, _id, token, amount, products, deliveryAddress, user} = payload
    const nonce = yield call(getPaymentMethod, dropInInstance)
    const paymentData = {paymentMethodNonce: nonce, amount: amount}
    const paymentProcessed = yield call(processPayment, {_id, token, paymentData})
    if (paymentProcessed.success === true) {
        const createOrderData = {
            products,
            transactionId_id: paymentProcessed.transaction.id,
            amount: paymentProcessed.transaction.amount,
            address: deliveryAddress,
            user: user
        }
        const createdOrder = yield call(createOrder, {_id, token, createOrderData})

        yield call(emptyCart)
        //TODO: success
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

function* watchNavigate() {
    yield takeLatest('@@router/LOCATION_CHANGE', navigate)
}


/* Business */
function* watchCreateBusiness() {
    yield takeLatest('admin/createBusiness', createBusiness)
}

function* watchAttemptDestroyBusiness() {
    yield takeLatest('admin/attemptDestroyBusiness', attemptDestroyBusiness)
}

function* watchDestroyBusiness() {
    yield takeLatest('admin/destroyBusiness', destroyBusiness)
}

function* watchDestroyBusinessSuccess() {
    yield takeLatest('admin/attemptDestroyBusinessSuccess', destroyBusinessSuccess)
}

function* watchUpdateBusiness() {
    yield takeLatest('admin/updateBusiness', updateBusinessDetail)
}


/* Product*/
function* watchCreateProduct() {
    yield takeLatest('admin/createProduct', createProduct)
}

function* watchAttemptDestroyProduct() {
    yield takeLatest('admin/attemptDestroyProduct', attemptDestroyProduct)
}

function* watchDestroyProduct() {
    yield takeLatest('admin/destroyProduct', destroyProduct)
}

function* watchDestroyProductSuccess() {
    yield takeLatest('admin/attemptDestroyProductSuccess', destroyProductSuccess)
}

function* watchDestroyProductCategory() {
    yield takeLatest('admin/destroyProductCategory', destroyProductCategory)
}

function* watchDestroyProductCategorySuccess() {
    yield takeLatest('admin/attemptDestroyProductCategorySuccess', destroyProductCategorySuccess)
}

function* watchUpdateProduct() {
    yield takeLatest('admin/updateProduct', updateProductDetail)
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
    yield takeLatest('shop/getShop', getShop)
}

function* watchGetProductDetail() {
    yield takeLatest('shop/getProduct', getProductDetail)
}

function* watchGetRelatedProducts() {
    yield takeLatest('shop/getRelatedProducts', getRelatedProducts)
}

function* watchGetOrders() {
    yield takeLatest('shop/getOrders', getOrders)
}

function* watchGetStatusValues() {
    yield takeLatest('shop/getStatusValues', getStatusValues)
}

function* watchUpdateStatusValue() {
    yield takeEvery('shop/updateStatusValue', updateStatusValue)
}

function* watchAddToCart() {
    yield takeLatest('shop/addToCart', addToCart)
}

function* watchRemoveFromCart() {
    yield takeLatest('shop/removeFromCart', removeFromCart)
}

function* watchGetProductCategories() {
    yield takeLatest('shop/getProductCategories', getProductCategories)
}

function* watchGetProductCategory() {
    yield takeLatest('shop/getProductCategory', getProductCategoryDetail)
}

function* watchCreateProductCategory() {
    yield takeLatest('shop/createProductCategory', createProductCategory)
}

function* watchUpdateProductCategory() {
    yield takeLatest('shop/updateProductCategory', updateProductCategoryDetail)
}

function* watchUpdateProductQuantity() {
    yield takeLatest('shop/updateProductQuantity', updateProductQuantity)
}

function* watchGetBraintreeToken() {
    yield takeLatest('shop/getBraintreeToken', getBraintreeToken)
}

function* watchGetPaymentNonce() {
    yield takeLatest('shop/getPaymentNonce', getPaymentNonce)
}


//TODO: determine best method of combining rootSaga
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
        fork(watchGetMarketplace),
        fork(watchCreateBusiness),

        //Todo: optimize
        fork(watchAttemptDestroyBusiness),
        fork(watchDestroyBusiness),
        fork(watchDestroyBusinessSuccess),

        fork(watchUpdateBusiness),
        fork(watchGetBusinessDetail),
        fork(watchGetShop),
        fork(watchCreateProduct),

        //Todo: optimize
        fork(watchAttemptDestroyProduct),
        fork(watchDestroyProduct),
        fork(watchDestroyProductSuccess),

        fork(watchUpdateProduct),
        fork(watchGetProductDetail),
        fork(watchGetRelatedProducts),
        fork(watchGetOrders),
        fork(watchGetStatusValues),
        fork(watchUpdateStatusValue),
        fork(watchAddToCart),
        fork(watchRemoveFromCart),
        fork(watchGetProductCategories),
        fork(watchGetProductCategory),
        fork(watchCreateProductCategory),
        fork(watchUpdateProductCategory),

        fork(watchGetBraintreeToken),
        fork(watchGetPaymentNonce),

        //Todo: optimize
        fork(watchDestroyProductCategory),
        fork(watchDestroyProductCategorySuccess),
        fork(watchUpdateProductQuantity)
    ])
}