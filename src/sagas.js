import {
    watchAddReview,
    watchAttemptDestroyPlace,
    watchCreatePlace,
    watchDestroyPlace,
    watchDestroyPlaceSuccess,
    watchFlaggedReviews,
    watchGetPendingPlaces,
    watchUpdatePlace,
    watchUpdateReview
}                                  from 'features/place/admin/sagas'
import {watchCreatePlaceFromBoone} from 'features/place/admin/sagas/boone'
import {
    watchAddToViewCount,
    watchGetPlaceCategoryByNameOrDescription,
    watchGetPlaceDetail,
    watchGetPlaces,
    watchGetReviews,
    watchGetUserReviewedPlaces,
    watchSearchAlgoliaPlaceIndex,
    watchSearchAllPlaces
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
    watchGetEntityById,
    watchLoadConfig,
    watchNavigate
}                                  from 'features/site/sagas'
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
}                                  from 'features/user/admin/sagas'
import {
    watchConfirmUser,
    watchCreateVerificationToken,
    watchFlagReview, watchGetRecentlyViewedPlace,
    watchGetSubmittedBy,
    watchGetUser,
    watchGetUsers,
    watchGetUserSuccess,
    watchSignIn,
    watchSignOut,
    watchSignUp,
    watchSignUpSignInSuccess, watchUpdateUserPhoneNumber,
    watchUserHistory,
    watchVerifyUser
} from 'features/user/sagas'
import {
    watchAuthenticate,
    watchAuthenticateSuccess,
    watchAuthenticateUserSuccess,
    watchIsAuthenticated
}                                  from 'features/user/sagas/auth'
import {
    all,
    fork
}                                  from 'redux-saga/effects'
import {
    watchCreateBathroom,
    watchGetBathroomDetail,
    watchGetBathroomList,
    watchUpdateBathroomDetail
}                                  from './features/place/admin/taxonomy/bathroom/sagas'
import {
    watchCreateBusinessOwner,
    watchGetBusinessOwnerDetail,
    watchGetBusinessOwnerList,
    watchUpdateBusinessOwnerDetail
}                                  from './features/place/admin/taxonomy/businessOwner/sagas'
import {
    watchCreateCommunitiesServed,
    watchGetCommunitiesServedDetail,
    watchGetCommunitiesServedList,
    watchUpdateCommunitiesServedDetail
}                                  from './features/place/admin/taxonomy/communitiesServed/sagas'
import {
    watchCreateFoodOptions,
    watchGetFoodOptionsDetail,
    watchGetFoodOptionsList,
    watchUpdateFoodOptionsDetail
}                                  from './features/place/admin/taxonomy/foodOptions/sagas'
import {
    watchCreateLanguageSpoken,
    watchGetLanguageSpokenDetail,
    watchGetLanguageSpokenList,
    watchUpdateLanguageSpokenDetail
}                                  from './features/place/admin/taxonomy/languageSpoken/sagas'
import {
    watchCreatePlaceCategory,
    watchGetPlaceCategoryDetail,
    watchGetPlaceCategoryList,
    watchUpdatePlaceCategoryDetail
}                                  from './features/place/admin/taxonomy/placeCategory/sagas'
import {
    watchAttemptDestroyEntity,
    watchDestroyEntity
}                                  from './features/site/admin/sagas'
import {
    watchSubmitPlace,
    watchSubmitPlaceSuccess
}                                  from './features/user/admin/sagas/submit'
import {
    watchCreateAdaptiveEquipment,
    watchGetAdaptiveEquipmentDetail,
    watchGetAdaptiveEquipmentList,
    watchUpdateAdaptiveEquipmentDetail
}                                  from './features/user/admin/taxonomy/adaptiveEquipment/sagas'
import {
    watchCreateBodyModification,
    watchGetBodyModificationDetail,
    watchGetBodyModificationList,
    watchUpdateBodyModificationDetail
}                                  from './features/user/admin/taxonomy/bodyModification/sagas'
import {
    watchCreateGender,
    watchGetGenderDetail,
    watchGetGenderList,
    watchUpdateGenderDetail
}                                  from './features/user/admin/taxonomy/gender/sagas'
import {
    watchCreateLanguage,
    watchGetLanguageDetail,
    watchGetLanguageList,
    watchUpdateLanguageDetail
}                                  from './features/user/admin/taxonomy/language/sagas'
import {
    watchCreateMethodOfCommunication,
    watchGetMethodOfCommunicationDetail,
    watchGetMethodOfCommunicationList,
    watchUpdateMethodOfCommunicationDetail
}                                  from './features/user/admin/taxonomy/methodOfCommunication/sagas'
import {
    watchCreatePhysicalAppearance,
    watchGetPhysicalAppearanceDetail,
    watchGetPhysicalAppearanceList,
    watchUpdatePhysicalAppearanceDetail
}                                  from './features/user/admin/taxonomy/physicalAppearance/sagas'
import {
    watchCreatePronoun,
    watchGetPronounDetail,
    watchGetPronounList,
    watchUpdatePronounDetail
}                                  from './features/user/admin/taxonomy/pronoun/sagas'
import {
    watchCreateRace,
    watchGetRaceDetail,
    watchGetRaceList,
    watchUpdateRaceDetail
}                                  from './features/user/admin/taxonomy/race/sagas'
import {
    watchCreateServiceAnimal,
    watchGetServiceAnimalDetail,
    watchGetServiceAnimalList,
    watchUpdateServiceAnimalDetail
}                                  from './features/user/admin/taxonomy/serviceAnimal/sagas'
import {
    watchCreateSexualOrientation,
    watchGetSexualOrientationDetail,
    watchGetSexualOrientationList,
    watchUpdateSexualOrientationDetail
}                                  from './features/user/admin/taxonomy/sexualOrientation/sagas'


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
        fork(watchFlagReview),
        fork(watchGetRecentlyViewedPlace),
        fork(watchUpdateUserPhoneNumber),

        //user -- taxonomy
        fork(watchCreateAdaptiveEquipment),
        fork(watchGetAdaptiveEquipmentList),
        fork(watchGetAdaptiveEquipmentDetail),
        fork(watchUpdateAdaptiveEquipmentDetail),

        fork(watchCreateBodyModification),
        fork(watchGetBodyModificationList),
        fork(watchGetBodyModificationDetail),
        fork(watchUpdateBodyModificationDetail),

        fork(watchCreateGender),
        fork(watchGetGenderList),
        fork(watchGetGenderDetail),
        fork(watchUpdateGenderDetail),

        fork(watchCreateLanguage),
        fork(watchGetLanguageList),
        fork(watchGetLanguageDetail),
        fork(watchUpdateLanguageDetail),

        fork(watchCreateMethodOfCommunication),
        fork(watchGetMethodOfCommunicationList),
        fork(watchGetMethodOfCommunicationDetail),
        fork(watchUpdateMethodOfCommunicationDetail),

        fork(watchCreatePhysicalAppearance),
        fork(watchGetPhysicalAppearanceList),
        fork(watchGetPhysicalAppearanceDetail),
        fork(watchUpdatePhysicalAppearanceDetail),

        fork(watchCreatePronoun),
        fork(watchGetPronounList),
        fork(watchGetPronounDetail),
        fork(watchUpdatePronounDetail),

        fork(watchCreateRace),
        fork(watchGetRaceList),
        fork(watchGetRaceDetail),
        fork(watchUpdateRaceDetail),

        fork(watchCreateServiceAnimal),
        fork(watchGetServiceAnimalList),
        fork(watchGetServiceAnimalDetail),
        fork(watchUpdateServiceAnimalDetail),

        fork(watchCreateSexualOrientation),
        fork(watchGetSexualOrientationList),
        fork(watchGetSexualOrientationDetail),
        fork(watchUpdateSexualOrientationDetail),


        // place
        fork(watchCreatePlace),
        fork(watchSubmitPlace),
        fork(watchSubmitPlaceSuccess),
        fork(watchUpdatePlace),
        fork(watchAttemptDestroyPlace),
        fork(watchDestroyPlace),
        fork(watchDestroyPlaceSuccess),
        fork(watchGetPlaces),
        fork(watchGetPlaceDetail),
        fork(watchCreatePlaceFromBoone),
        fork(watchSearchAllPlaces),
        fork(watchGetPlaceCategoryByNameOrDescription),
        fork(watchAddToViewCount),
        fork(watchSearchAlgoliaPlaceIndex),
        fork(watchAddReview),
        fork(watchUpdateReview),
        fork(watchGetReviews),
        fork(watchGetUserReviewedPlaces),
        fork(watchGetPendingPlaces),
        fork(watchFlaggedReviews),

        //place taxonomy
        fork(watchCreateBathroom),
        fork(watchGetBathroomList),
        fork(watchGetBathroomDetail),
        fork(watchUpdateBathroomDetail),

        fork(watchCreateBusinessOwner),
        fork(watchGetBusinessOwnerList),
        fork(watchGetBusinessOwnerDetail),
        fork(watchUpdateBusinessOwnerDetail),

        fork(watchCreateCommunitiesServed),
        fork(watchGetCommunitiesServedList),
        fork(watchGetCommunitiesServedDetail),
        fork(watchUpdateCommunitiesServedDetail),

        fork(watchCreateFoodOptions),
        fork(watchGetFoodOptionsList),
        fork(watchGetFoodOptionsDetail),
        fork(watchUpdateFoodOptionsDetail),

        fork(watchCreateLanguageSpoken),
        fork(watchGetLanguageSpokenList),
        fork(watchGetLanguageSpokenDetail),
        fork(watchUpdateLanguageSpokenDetail),

        fork(watchCreatePlaceCategory),
        fork(watchGetPlaceCategoryList),
        fork(watchGetPlaceCategoryDetail),
        fork(watchUpdatePlaceCategoryDetail),

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

        // product placeCategory
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
