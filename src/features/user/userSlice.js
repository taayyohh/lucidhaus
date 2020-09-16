import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    error: '',
    loading: false,
    redirectToReferrer: false,
    isAuthenticated: false,
    isAdmin: false,
    token: ''
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
            state.redirectToReferrer = true
        },
        authenticateSuccess: (state, action) => {
            state.redirectToReferrer = false
            state.isAuthenticated = true
            state.token = action.payload.payload.token
        },
        isAuthenticatedSuccess: (state, action) => {
            console.log('TION', action)
            state.token = action.payload.token
            state.isAuthenticated = true
        },
        isAuthenticatedFailure: (state, action) => {
            state.isAuthenticated = false
        }
    },
});

export const { } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const userError = state => state?.error


export default userSlice.reducer;
