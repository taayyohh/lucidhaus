import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    error: false,
    loading: false,
    redirectToReferrer: false,
    isAuthenticated: false,
    isAdmin: false,
    token: '',
    _id: ''
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
        authenticate: (state, action) => {
            // state.redirectToReferrer = true
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
        isAuthenticatedFailure: (state, action) => {
            state.isAuthenticated = false
        },
        signOut: (state, action) => {
            state.name = ''
            state.email = ''
            state.error = false
            state.loading = false
            state.redirectToReferrer = false
            state.isAuthenticated = false
            state.isAdmin = false
            state.token = ''
            state._id = ''
        }
    },
})

export const {} = userSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`


export default userSlice.reducer
