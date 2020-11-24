import {
    all,
    fork
}                           from 'redux-saga/effects'
import {
    watchAttemptDestroyBusiness,
    watchCreateBusiness,
    watchDestroyBusiness,
    watchDestroyBusinessSuccess,
    watchUpdateBusiness
}                           from './adminBusiness'
import {
    watchAttemptDestroyProduct,
    watchCreateProduct,
    watchDestroyProduct,
    watchDestroyProductSuccess,
    watchUpdateProduct
}                           from './adminProduct'
import {
    watchCreateProductCategory,
    watchDestroyProductCategory,
    watchDestroyProductCategorySuccess,
    watchUpdateProductCategory
}                           from './adminProductCategory'
import {watchUpdateProfile} from './adminUser'
import {
    watchAuthenticate,
    watchIsAuthenticated
}                           from './auth'
import {
    watchGetBusinessDetail,
    watchGetMarketplace
}                           from './business'
import {
    watchAddToCart,
    watchRemoveFromCart
}                           from './cart'
import {
    watchGetOrders,
    watchGetStatusValues,
    watchUpdateStatusValue
}                           from './orders'
import {
    watchGetProductDetail,
    watchGetRelatedProducts,
    watchUpdateProductQuantity
}                           from './product'
import {
    watchGetProductCategories,
    watchGetProductCategory
}                           from './productCategory'
import {
    watchGetBraintreeToken,
    watchGetPaymentNonce,
    watchGetShop
}                           from './shop'
import {
    watchLoadConfig,
    watchNavigate
}                           from './site'
import {
    watchSignIn,
    watchSignOut,
    watchSignUp,
    watchUserHistory
}                           from './user'


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