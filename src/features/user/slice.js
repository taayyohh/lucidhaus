import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    _id: '',
    token: '',
    nameFirst: '',
    tel: '',
    slug: '',
    isAuthenticated: false,
    isAdmin: false,
    error: false,
    loading: false,
    redirectToReferrer: false,
    purchaseHistory: [],
    confirmationRequest: undefined,
    users: []
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
            state.nameFirst = action.payload.user.nameFirst
            state.tel = action.payload.user.tel
            state.isAdmin = action.payload.user.role === 0
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
            state.tel = action.payload.user.tel
            state.nameFirst = action.payload.user.nameFirst
            state._id = action.payload.user._id
            state.isAdmin = action.payload.user.role === 0
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
        updateSuccess: (state, action) => {
            state.nameFirst = action.payload.nameFirst
            state.tel = action.payload.tel
            state.slug = action.payload.slug
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



    },
})

export default slice.reducer
