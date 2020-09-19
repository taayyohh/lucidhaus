import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    _id: '',
    token: '',
    name: '',
    email: '',
    error: false,
    loading: false,
    redirectToReferrer: false,
    isAuthenticated: false,
    isAdmin: false,
    purchaseHistory: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signIn: state => {
            state.loading = true
            state.error = false
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
        authenticateSuccess: (state, action) => {
            state.redirectToReferrer = true
            state.isAuthenticated = true
            state.token = action.payload.payload.token
            state._id = action.payload.payload.user._id
        },
        isAuthenticatedSuccess: (state, action) => {
            state.token = action.payload.token
            state.isAuthenticated = true
        },
        isAuthenticatedFailure: state => {
            state.isAuthenticated = false
        },
        signOut: state => {
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
        signUpSuccess: (state, action) => {
            state.redirectToReferrer = true
        },
        getPurchaseSuccess: (state, action) => {
            state.purchaseHistory = action.payload
        },
        getPurchaseFailure: (state, action) => {
            state.error = action.payload.error
        }
    },
})

export const {} = userSlice.actions

export default userSlice.reducer
