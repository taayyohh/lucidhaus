import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    _id: '',
    token: '',
    name: '',
    email: '',
    slug: '',
    isAuthenticated: false,
    isAdmin: false,
    error: false,
    loading: false,
    redirectToReferrer: false,
    purchaseHistory: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signIn: state => {
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.loading = false
            state.error = false
            state.name = action.payload.user.name
            state.email = action.payload.user.email
            state.isAdmin = action.payload.user.role === 1
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
            state.token = action.payload.payload.token
            state._id = action.payload.payload.user._id
        },
        isAuthenticatedSuccess: (state, action) => {
            state.token = action.payload.token
            state.isAuthenticated = true
            state.email = action.payload.user.email
            state.name = action.payload.user.name
            state.token = action.payload.token
            state._id = action.payload.user._id
            state.isAdmin = action.payload.user.role === 1
        },
        isAuthenticatedFailure: state => {
            state.isAuthenticated = false
        },
        signOutSuccess: state => {
            state.name = ''
            state.email = ''
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
        signUpSuccess: (state, action) => {
            state.redirectToReferrer = true
        },
        signUpFailure: (state, action) => {
            state.error = action.payload.error
        },
        getPurchaseSuccess: (state, action) => {
            state.purchaseHistory = action.payload
        },
        getPurchaseFailure: (state, action) => {
            state.error = action.payload.error
        },
        reset: state => {
            state.error = false
            state.loading = false
            state.redirectToReferrer = false
        },
        updateSuccess: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.slug = action.payload.slug
        },
        updateFailure: (state, action) => {
            state.error = action.payload.error
        }
    },
})

export const {} = userSlice.actions

export default userSlice.reducer
