import {createSlice}           from '@reduxjs/toolkit'
import {adaptiveEquipment}     from './admin/taxonomy/adaptiveEquipment/reducers'
import {bodyModification}      from './admin/taxonomy/bodyModification/reducers'
import {gender}                from './admin/taxonomy/gender/reducers'
import {language}              from './admin/taxonomy/language/reducers'
import {methodOfCommunication} from './admin/taxonomy/methodOfCommunication/reducers'
import {physicalAppearance}    from './admin/taxonomy/physicalAppearance/reducers'
import {pronoun}               from './admin/taxonomy/pronoun/reducers'
import {race}                  from './admin/taxonomy/race/reducers'
import {serviceAnimal}         from './admin/taxonomy/serviceAnimal/reducers'
import {sexualOrientation}     from './admin/taxonomy/sexualOrientation/reducers'

const initialState = {
    _id: '',
    bookmarks: [],
    flaggedReviews: [],
    reviews: [],
    token: '',
    nameFirst: '',
    nameMiddle: '',
    nameLast: '',
    tel: '',
    slug: '',
    isAuthenticated: false,
    isVerified: false,
    isAdmin: false,
    error: false,
    loading: false,
    redirectToReferrer: false,
    recentlyViewedPlaces: [],
    pendingPlaces: [],
    placeSubmissionSuccess: null,
    purchaseHistory: [],
    confirmationRequest: undefined,
    users: [],
    user: {
        avatar: '',
        description: '',
        email: '',
        ethnicHispanicOrigin: '',
        nameFirst: '',
        nameMiddle: '',
        nameLast: '',
        tel: '',
        role: '',
        type: ''
    },
    taxonomy: {
        adaptiveEquipment: [],
        bodyModification: [],
        gender: [],
        language: [],
        methodOfCommunication: [],
        physicalAppearance: [],
        pronoun: [],
        race: [],
        serviceAnimal: [],
        sexualOrientation: []
    }
}

export const slice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signIn: state => {
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.loading = false
            state.error = false
            state.isAdmin = action.payload.user.role === 0
            state.avatar = action.payload.user.avatar
            state.description = action.payload.user.description
            state.email = action.payload.user.email
            state.ethnicHispanicOrigin = action.payload.user.ethnicHispanicOrigin
            state.handle = action.payload.user.handle
            state.nameMiddle = action.payload.user.nameMiddle
            state.nameFirst = action.payload.user.nameFirst
            state.nameLast = action.payload.user.nameLast
            state.role = action.payload.user.role
            state.slug = action.payload.user.slug
            state.tel = action.payload.user.tel
            state.type = action.payload.user.type
        },
        signInFailure: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
        authenticate: state => {
            state.redirectToReferrer = true
        },
        authenticateSuccess: (state, action) => {
            state.redirectToReferrer = false
            state.isAuthenticated = true
            state.token = action.payload.token
            state._id = action.payload.user._id
        },
        isAuthenticatedSuccess: (state, action) => {
            state.token = action.payload.token
            state.isAuthenticated = true
            state._id = action.payload.user._id
            state.isAdmin = action.payload.user.role === 0
            state.avatar = action.payload.user.avatar
            state.description = action.payload.user.description
            state.email = action.payload.user.email
            state.ethnicHispanicOrigin = action.payload.user.ethnicHispanicOrigin
            state.handle = action.payload.user.handle
            state.nameMiddle = action.payload.user.nameMiddle
            state.nameFirst = action.payload.user.nameFirst
            state.nameLast = action.payload.user.nameLast
            state.role = action.payload.user.role
            state.slug = action.payload.user.slug
            state.tel = action.payload.user.tel
            state.type = action.payload.user.type
            // state.flaggedReviews = [...action.payload.user.flaggedReviews]
        },
        isAuthenticatedFailure: state => {
            state.isAuthenticated = false
        },
        signOutSuccess: state => {
            state.nameFirst = ''
            state.tel = ''
            state.error = false
            state.loading = false
            state.redirectToReferrer = false
            state.isAuthenticated = false
            state.isAdmin = false
            state.token = ''
            state._id = ''
        },
        signOutFailure: (state, action) => {
            state.error = action.payload.message
        },
        signUpFailure: (state, action) => {
            state.error = action.payload.error
        },
        signUpSuccess: (state) => {
            state.confirmationRequest = undefined
        },
        getPurchaseHistorySuccess: (state, action) => {
            state.purchaseHistory = action.payload
        },
        getPurchaseHistoryFailure: (state, action) => {
            state.error = action.payload.error
        },
        reset: state => {
            state.error = false
            state.loading = false
            state.redirectToReferrer = false
        },
        updateUserProfileSuccess: (state, action) => {
            state.isAdmin = action.payload.role === 0
            state.avatar = action.payload.avatar
            state.description = action.payload.description
            state.email = action.payload.email
            state.ethnicHispanicOrigin = action.payload.ethnicHispanicOrigin
            state.handle = action.payload.handle
            state.nameMiddle = action.payload.nameMiddle
            state.nameFirst = action.payload.nameFirst
            state.nameLast = action.payload.nameLast
            state.role = action.payload.role
            state.slug = action.payload.slug
            state.tel = action.payload.tel
            state.type = action.payload.type
        },
        updateFailure: (state, action) => {
            state.error = action.payload.error
        },
        requestTwilioCodeConfirmation: (state, action) => {
            state.confirmationRequest = action.payload
        },
        getUsersSuccess: (state, action) => {
            state.users = action.payload
        },
        getUserSuccess: (state, action) => {
            state.user = action.payload
            state.isVerified = action.payload.emailVerified
        },
        destroyUserSuccess: (state, action) => {
            state.users = state.users.filter(item => item.objectID !== action.payload.objectID)
        },
        emailVerificationSuccess: (state, action) => {
            state.isVerified = true
        },
        getBookmark: (state, action) => {
            state.bookmarks = []
        },
        getBookmarkSuccess: (state, action) => {
            state.bookmarks = state.bookmarks.filter(item => item._id === action.payload.place._id).length < 1
                ? [...state.bookmarks, action.payload.place]
                : state.bookmarks
        },
        getUserReviewsSuccess: (state, action) => {
            state.reviews = action.payload.reviews
        },
        // getUserReviewsSuccess: (state, action) => {
        //     state.reviews = state.reviews.filter(item => item._id === action.payload.reviews._id).length < 1
        //         ? [...state.reviews, action.payload.reviews]
        //         : state.reviews
        // },
        getUserReviewedPlaceSuccess: (state, action) => {

        },
        getPendingPlaceEntitySuccess: (state, action) => {
            state.pendingPlaces = state.pendingPlaces.filter(item => item._id === action.payload.entity._id).length < 1
                ? [...state.pendingPlaces, action.payload.entity]
                : state.pendingPlaces
        },
        flagReviewSuccess: (state, action) => {

        },
        submitPlaceSuccess: (state, action) => {
            state.placeSubmissionSuccess = true
        },
        closeSubmissionPanel: (state) => {
            state.placeSubmissionSuccess = null
        },
        getRecentlyViewedPlaceSuccess: (state, action) => {
            state.recentlyViewedPlaces = state.recentlyViewedPlaces.filter(item => item._id === action.payload._id).length < 1
                ? [...state.recentlyViewedPlaces, {...action.payload}]
                : state.recentlyViewedPlaces
        },


        /*   ADMIN  */

        //taxonomy
        ...adaptiveEquipment,
        ...bodyModification,
        ...gender,
        ...language,
        ...methodOfCommunication,
        ...physicalAppearance,
        ...pronoun,
        ...race,
        ...serviceAnimal,
        ...sexualOrientation
    },
})

export default slice.reducer
