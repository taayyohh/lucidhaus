import {
    watchAttemptDestroyPlace,
    watchCreatePlace,
    watchDestroyPlace,
    watchDestroyPlaceSuccess,
    watchUpdatePlace
}                                  from 'features/place/admin/sagas'
import {watchCreatePlaceFromBoone} from 'features/place/admin/sagas/boone'
import {
    watchGetPlaceDetail,
    watchGetPlaces
}                                  from 'features/place/sagas'
import {
    watchGetBooneAutoComplete,
    watchGetBoonePlace
}                                  from 'features/place/sagas/boone'
import {
    watchAttemptDestroyProduct,
    watchCreateProduct,
    watchDestroyProduct,
    watchDestroyProductSuccess,
    watchUpdateProduct,
    watchUpdateProductQuantity
}                                  from 'features/shop/admin/product/sagas'
import {
    watchCreateProductCategory,
    watchDestroyProductCategory,
    watchDestroyProductCategorySuccess,
    watchUpdateProductCategory
}                                  from 'features/shop/admin/product/sagas/category'
import {
    watchGetBraintreeToken,
    watchGetFilteredShop,
    watchGetPaymentNonce,
    watchGetShop
}                                  from 'features/shop/sagas'
import {
    watchAddToCart,
    watchRemoveFromCart
}                                  from 'features/shop/sagas/cart'
import {
    watchGetOrders,
    watchGetStatusValues,
    watchUpdateStatusValue
}                                  from 'features/shop/sagas/orders'
import {
    watchGetProductDetail,
    watchGetRelatedProducts
}                                  from 'features/shop/sagas/product'
import {
    watchGetProductCategories,
    watchGetProductCategory
}                                  from 'features/shop/sagas/product/category'
import {
    watchLoadConfig,
    watchNavigate
}                                                         from 'features/site/sagas'
import {watchCreateAdaptiveEquipment, watchUpdateProfile} from 'features/user/admin/sagas'
import {
    watchConfirmUser,
    watchGetUser,
    watchGetUsers,
    watchSignIn,
    watchSignOut,
    watchSignUp,
    watchUserHistory
}                                                         from 'features/user/sagas'
import {
    watchAuthenticate,
    watchIsAuthenticated
}                                  from 'features/user/sagas/auth'
import {
    all,
    fork
}                                  from 'redux-saga/effects'


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
        fork(watchConfirmUser),
        fork(watchGetUsers),
        fork(watchGetUser),
        //user -- taxonomy
        fork(watchCreateAdaptiveEquipment),


        // place
        fork(watchCreatePlace),
        fork(watchUpdatePlace),
        fork(watchAttemptDestroyPlace),
        fork(watchDestroyPlace),
        fork(watchDestroyPlaceSuccess),
        fork(watchGetPlaces),
        fork(watchGetPlaceDetail),
        fork(watchCreatePlaceFromBoone),

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

        // product categories
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
        fork(watchGetBooneAutoComplete),
        fork(watchGetBoonePlace)
    ])
}
