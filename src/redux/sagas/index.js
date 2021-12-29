import {all, fork}          from 'redux-saga/effects'
import {
    watchAddSongToAlbum,
    watchAttemptDestroyAlbum,
    watchAttemptDestroySong,
    watchCreateAlbum,
    watchDestroyAlbum,
    watchDestroyAlbumSuccess,
    watchDestroySong,
    watchDestroySongSuccess,
    watchUpdateAlbum
}                           from './admin/album'
import {
    watchAttemptDestroyArtist,
    watchCreateArtist,
    watchDestroyArtist,
    watchDestroyArtistSuccess,
    watchUpdateArtist
}                           from './admin/artist'
import {
    watchAttemptDestroyCollaborator,
    watchCreateCollaborator,
    watchDestroyCollaborator,
    watchDestroyCollaboratorSuccess,
    watchUpdateCollaborator
}                           from './admin/collaborator'
import {
    watchAddRsvpToEvent,
    watchAttemptDestroyRsvp,
    watchAttemptDestroyEvent,
    watchCreateEvent,
    watchDestroyEvent,
    watchDestroyEventSuccess,
    watchDestroyRsvp,
    watchDestroyRsvpSuccess,
    watchUpdateEvent
}                           from './admin/event'
import {
    watchAttemptDestroyPost,
    watchCreatePost,
    watchDestroyPost,
    watchDestroyPostSuccess,
    watchUpdatePost
}                           from './admin/post'
import {
    watchAttemptDestroyProduct,
    watchCreateProduct,
    watchDestroyProduct,
    watchDestroyProductSuccess,
    watchUpdateProduct,
    watchUpdateProductQuantity
}                           from './admin/product'
import {
    watchCreateProductCategory,
    watchDestroyProductCategory,
    watchDestroyProductCategorySuccess,
    watchUpdateProductCategory
}                           from './admin/productCategory'
import {watchUpdateProfile} from './admin/user'
import {
    watchGetAlbumDetail,
    watchGetAlbums
}                           from './album'
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
    watchGetCollaboratorDetail,
    watchGetCollaborators
}                           from './collaborator'
import {
    watchGetEventDetail,
    watchGetEvents
}                           from './event'
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

        // collaborator
        fork(watchCreateCollaborator),
        fork(watchUpdateCollaborator),
        fork(watchAttemptDestroyCollaborator),
        fork(watchDestroyCollaborator),
        fork(watchDestroyCollaboratorSuccess),
        fork(watchGetCollaborators),
        fork(watchGetCollaboratorDetail),

        // event
        fork(watchCreateEvent),
        fork(watchUpdateEvent),
        fork(watchAttemptDestroyEvent),
        fork(watchDestroyEvent),
        fork(watchDestroyEventSuccess),
        fork(watchGetEvents),
        fork(watchGetEventDetail),
        fork(watchAddRsvpToEvent),
        fork(watchAttemptDestroyRsvp),
        fork(watchDestroySong),
        fork(watchDestroySongSuccess),


        // album
        fork(watchCreateAlbum),
        fork(watchUpdateAlbum),
        fork(watchAttemptDestroyAlbum),
        fork(watchDestroyAlbum),
        fork(watchDestroyAlbumSuccess),
        fork(watchGetAlbums),
        fork(watchGetAlbumDetail),
        fork(watchAddSongToAlbum),
        fork(watchAttemptDestroySong),
        fork(watchDestroySong),
        fork(watchDestroySongSuccess),


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
