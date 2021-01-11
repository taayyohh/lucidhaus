import {
    all,
    fork
}                             from 'redux-saga/effects'
import {watchGetFilteredShop} from 'redux/sagas/shop'
import {
    watchAttemptDestroyPost,
    watchCreatePost,
    watchDestroyPost,
    watchDestroyPostSuccess,
    watchUpdatePost
}                             from './adminPost'
import {
    watchAttemptDestroyProduct,
    watchCreateProduct,
    watchDestroyProduct,
    watchDestroyProductSuccess,
    watchUpdateProduct,
    watchUpdateProductQuantity
}                             from './adminProduct'
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
    watchGetPostDetail,
    watchGetMarketplace
}                           from './post'
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
    watchGetRelatedProducts
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
        fork(watchCreatePost),

        //Todo: optimize
        fork(watchAttemptDestroyPost),
        fork(watchDestroyPost),
        fork(watchDestroyPostSuccess),

        fork(watchUpdatePost),
        fork(watchGetPostDetail),
        fork(watchGetShop),
        fork(watchGetFilteredShop),
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