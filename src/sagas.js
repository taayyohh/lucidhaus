import {watchCreateProduct, watchUpdateProduct, watchUpdateProductQuantity} from 'features/shop/admin/product/sagas'
import {
    watchCreateProductCategory,
    watchGetProductCategoryDetail,
    watchGetProductCategoryList,
    watchUpdateProductCategory
}                                                                           from 'features/shop/admin/product/taxonomy/category/sagas'
import {
    watchGetBraintreeToken,
    watchGetFilteredShop,
    watchGetPaymentNonce,
    watchGetShop
}                                                                           from 'features/shop/sagas'
import {
    watchAddToCart,
    watchRemoveFromCart
}                                                                           from 'features/shop/sagas/cart'
import {
    watchGetOrders,
    watchGetStatusValues,
    watchUpdateStatusValue
}                                                                           from 'features/shop/sagas/orders'
import {
    watchGetProductDetail,
    watchGetRelatedProducts
}                                                                           from 'features/shop/sagas/product'
import {
    watchGetProductCategories,
    watchGetProductCategory
}                                                                           from 'features/shop/sagas/product/category'
import {
    watchGetEntityById,
    watchLoadConfig,
    watchNavigate
}                                                                           from 'features/site/sagas'
import {
    watchConfirmResetToken,
    watchGetBookmark,
    watchGetUserReviews,
    watchManageBookmark,
    watchRecoverPassword,
    watchResendVerificationLink,
    watchResetPassword,
    watchUpdateProfile,
    watchUpdateUser,
    watchUpdateUserIdentity
}                                                                           from 'features/user/admin/sagas'
import {
    watchConfirmUpdateEmail,
    watchConfirmUpdatePhoneNumber,
    watchConfirmUser,
    watchCreateVerificationToken,
    watchGetSubmittedBy,
    watchGetUser,
    watchGetUsers,
    watchGetUserSuccess,
    watchSignIn,
    watchSignOut,
    watchSignUp,
    watchSignUpSignInSuccess,
    watchUpdateUserEmail,
    watchUpdateUserPhoneNumber,
    watchUserHistory,
    watchVerifyUser
}                                                                           from 'features/user/sagas'
import {
    watchAuthenticate,
    watchAuthenticateSuccess,
    watchAuthenticateUserSuccess,
    watchIsAuthenticated
}                                                                           from 'features/user/sagas/auth'
import {
    all,
    fork
}                                                                           from 'redux-saga/effects'
import {
    watchAddSongToAlbum,
    watchCreateAlbum,
    watchUpdateAlbum
}                                                                           from './features/album/admin/sagas'
import {
    watchGetAlbumDetail,
    watchGetAlbums
}                                                                           from './features/album/sagas'
import {
    watchGetAudiusProviderList,
    watchSearchAudiusUser
}                                                                           from './features/album/sagas/audius'
import {
    watchCreateArtist,
    watchUpdateArtist
}                                                                           from './features/artist/admin/sagas'
import {
    watchGetArtistDetail,
    watchGetArtists
}                                                                           from './features/artist/sagas'
import {
    watchCreateCollaborator,
    watchUpdateCollaborator
}                                                                           from './features/collaborator/admin/sagas'
import {
    watchGetCollaboratorDetail,
    watchGetCollaborators
}                                                                           from './features/collaborator/sagas'
import {
    watchAddRsvpToEvent,
    watchCreateEvent,
    watchUpdateEvent
}                                                                           from './features/event/admin/sagas'
import {
    watchGetEventDetail,
    watchGetEvents
}                                                                           from './features/event/sagas'
import {
    watchAttemptDestroyEntity,
    watchDestroyEntity
}                                                                           from './features/site/admin/sagas'


//TODO: determine best method of combining rootSaga
export default function* rootSaga() {
    yield all([
        //site
        fork(watchNavigate),
        fork(watchLoadConfig),
        fork(watchGetEntityById),
        fork(watchAttemptDestroyEntity),
        fork(watchDestroyEntity),

        //auth
        fork(watchAuthenticate),
        fork(watchIsAuthenticated),
        fork(watchAuthenticateSuccess),
        fork(watchAuthenticateUserSuccess),

        //sign in
        fork(watchSignIn),
        fork(watchSignOut),
        fork(watchSignUp),
        fork(watchSignUpSignInSuccess),

        //user
        fork(watchUserHistory),
        fork(watchUpdateProfile),
        fork(watchUpdateUser),
        fork(watchUpdateUserIdentity),
        fork(watchConfirmUser),
        fork(watchGetUsers),
        fork(watchGetUserSuccess),
        fork(watchGetUser),
        fork(watchGetSubmittedBy),
        fork(watchCreateVerificationToken),
        fork(watchVerifyUser),
        fork(watchManageBookmark),
        fork(watchGetBookmark),
        fork(watchGetUserReviews),
        fork(watchResendVerificationLink),
        fork(watchRecoverPassword),
        fork(watchConfirmResetToken),
        fork(watchResetPassword),
        fork(watchUpdateUserPhoneNumber),
        fork(watchConfirmUpdatePhoneNumber),
        fork(watchUpdateUserEmail),
        fork(watchConfirmUpdateEmail),


        // shop
        fork(watchCreateProduct),
        fork(watchUpdateProduct),
        fork(watchGetProductDetail),
        fork(watchGetShop),
        fork(watchGetFilteredShop),
        fork(watchUpdateProductQuantity),

        // product placeCategory
        fork(watchCreateProductCategory),
        fork(watchUpdateProductCategory),
        fork(watchGetProductCategoryList),
        fork(watchGetProductCategoryDetail),
        fork(watchGetProductCategories),
        fork(watchGetProductCategory),
        fork(watchGetRelatedProducts),


        //artists
        fork(watchGetArtistDetail),
        fork(watchGetArtists),
        fork(watchCreateArtist),
        fork(watchUpdateArtist),

        //albums
        fork(watchCreateAlbum),
        fork(watchUpdateAlbum),
        fork(watchAddSongToAlbum),
        fork(watchGetAlbums),
        fork(watchGetAlbumDetail),

        //audius
        fork(watchGetAudiusProviderList),
        fork(watchSearchAudiusUser),

        fork(watchCreateEvent),
        fork(watchUpdateEvent),
        fork(watchAddRsvpToEvent),
        fork(watchGetEvents),
        fork(watchGetEventDetail),


        fork(watchCreateCollaborator),
        fork(watchUpdateCollaborator),
        fork(watchGetCollaborators),
        fork(watchGetCollaboratorDetail),

        //orders
        fork(watchGetOrders),
        fork(watchGetStatusValues),
        fork(watchUpdateStatusValue),

        //checkout
        fork(watchAddToCart),
        fork(watchRemoveFromCart),
        fork(watchGetBraintreeToken),
        fork(watchGetPaymentNonce),
    ])
}
