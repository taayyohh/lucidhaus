import {
    all,
    fork
} from 'redux-saga/effects'
import {
    watchAttemptDestroyArtist,
    watchCreateArtist,
    watchDestroyArtist,
    watchDestroyArtistSuccess,
    watchUpdateArtist
} from 'redux/sagas/admin/artist'
import {
    watchAttemptDestroyPost,
    watchCreatePost,
    watchDestroyPost,
    watchDestroyPostSuccess,
    watchUpdatePost
} from 'redux/sagas/admin/post'
import {
    watchAttemptDestroyProduct,
    watchCreateProduct,
    watchDestroyProduct,
    watchDestroyProductSuccess,
    watchUpdateProduct,
    watchUpdateProductQuantity
} from 'redux/sagas/admin/product'
import {
    watchCreateProductCategory,
    watchDestroyProductCategory,
    watchDestroyProductCategorySuccess,
    watchUpdateProductCategory
} from 'redux/sagas/admin/productCategory'
import {
    watchAddSongToAlbum,
    watchAttemptDestroyAlbum,
    watchCreateAlbum,
    watchDestroyAlbum,
    watchDestroyAlbumSuccess,
    watchUpdateAlbum
} from 'redux/sagas/admin/album'
import {watchUpdateProfile} from 'redux/sagas/admin/user'
import {
    watchGetArtistDetail,
    watchGetArtists
}                           from './artist'
import {
    watchAuthenticate,
    watchIsAuthenticated
}                           from './auth'
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
    watchGetPostDetail,
    watchGetPosts
}                           from './post'
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
    watchGetFilteredShop,
    watchGetPaymentNonce,
    watchGetShop
}                           from './shop'
import {
    watchLoadConfig,
    watchNavigate
}                           from './site'
import {
    watchGetAlbumDetail,
    watchGetAlbums
}                           from './album'
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


        // artist
        fork(watchCreateArtist),
        fork(watchUpdateArtist),
        fork(watchAttemptDestroyArtist),
        fork(watchDestroyArtist),
        fork(watchDestroyArtistSuccess),
        fork(watchGetArtists),
        fork(watchGetArtistDetail),

        // album
        fork(watchCreateAlbum),
        fork(watchUpdateAlbum),
        fork(watchAddSongToAlbum),
        fork(watchAttemptDestroyAlbum),
        fork(watchDestroyAlbum),
        fork(watchDestroyAlbumSuccess),
        fork(watchGetAlbums),
        fork(watchGetAlbumDetail),


        // post
        fork(watchCreatePost),
        fork(watchUpdatePost),
        fork(watchAttemptDestroyPost),
        fork(watchDestroyPost),
        fork(watchDestroyPostSuccess),
        fork(watchGetPosts),
        fork(watchGetPostDetail),


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

        //Todo: optimize


    ])
}