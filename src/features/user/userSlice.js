import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    error: '',
    loading: false,
    redirectToReferrer: false,
    isAuthenticated: false,
    isAdmin: false
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

        },
        signInFailure: (state, action) => {
            state.error = action.payload.error
           // console.log('ACTION', action.payload.error)
        }
    },
});

export const { } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const userError = state => state?.error


export default userSlice.reducer;
