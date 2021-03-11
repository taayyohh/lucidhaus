import {all, fork}                 from 'redux-saga/effects'
import {
    watchAttemptDestroyPlace,
    watchCreatePlace,
    watchDestroyPlace,
    watchDestroyPlaceSuccess,
    watchUpdatePlace
}                                  from 'redux/sagas/admin/place'
import {
    watchAttemptDestroyProduct,
    watchCreateProduct,
    watchDestroyProduct,
    watchDestroyProductSuccess,
    watchUpdateProduct,
    watchUpdateProductQuantity
}                                  from 'redux/sagas/admin/product'
import {
    watchCreateProductCategory,
    watchDestroyProductCategory,
    watchDestroyProductCategorySuccess,
    watchUpdateProductCategory
}                                  from 'redux/sagas/admin/productCategory'
import {watchUpdateProfile}        from 'redux/sagas/admin/user'
import {
    watchAuthenticate,
    watchIsAuthenticated
}                                  from './auth'
import {watchGetBooneAutoComplete} from './boone'
import {
    watchAddToCart,
    watchRemoveFromCart
}                                  from './cart'
import {
    watchGetOrders,
    watchGetStatusValues,
    watchUpdateStatusValue
}                                  from './orders'
import {
    watchGetPlaceDetail,
    watchGetPlaces
}                                  from './place'
import {
    watchGetProductDetail,
    watchGetRelatedProducts
}                                  from './product'
import {
    watchGetProductCategories,
    watchGetProductCategory
}                                  from './productCategory'
import {
    watchGetBraintreeToken,
    watchGetFilteredShop,
    watchGetPaymentNonce,
    watchGetShop
}                                  from './shop'
import {
    watchLoadConfig,
    watchNavigate
}                                  from './site'
import {
    watchSignIn,
    watchSignOut,
    watchSignUp,
    watchUserHistory
}                                  from './user'


//TODO: determine best method of combining rootSaga
export default function* rootSaga() {
    yield all([
        fork(watchNavigate),
        fork(watchLoadConfig),

        //auth
        fork(watchAuthenticate),
        fork(watchIsAuthenticated),

        //sign in
        fork(watchSignIn),
        fork(watchSignOut),
        fork(watchSignUp),

        //user
        fork(watchUserHistory),
        fork(watchUpdateProfile),


        // place
        fork(watchCreatePlace),
        fork(watchUpdatePlace),
        fork(watchAttemptDestroyPlace),
        fork(watchDestroyPlace),
        fork(watchDestroyPlaceSuccess),
        fork(watchGetPlaces),
        fork(watchGetPlaceDetail),

        // shop
        fork(watchCreateProduct),
        fork(watchUpdateProduct),
        fork(watchAttemptDestroyProduct),
        fork(watchDestroyProduct),
        fork(watchDestroyProductSuccess),
        fork(watchGetProductDetail),
        fork(watchGetShop),
        fork(watchGetFilteredShop),
        fork(watchUpdateProductQuantity),

        // product category
        fork(watchCreateProductCategory),
        fork(watchUpdateProductCategory),
        fork(watchDestroyProductCategory),
        fork(watchDestroyProductCategorySuccess),
        fork(watchGetProductCategories),
        fork(watchGetProductCategory),
        fork(watchGetRelatedProducts),

        //orders
        fork(watchGetOrders),
        fork(watchGetStatusValues),
        fork(watchUpdateStatusValue),

        //checkout
        fork(watchAddToCart),
        fork(watchRemoveFromCart),
        fork(watchGetBraintreeToken),
        fork(watchGetPaymentNonce),


        //boone
        fork(watchGetBooneAutoComplete)

        //Todo: optimize


    ])
}