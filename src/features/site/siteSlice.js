import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isInitialized: false,
    loading: false,
}

export const siteSlice = createSlice({
    name: 'site',
    initialState: initialState,
    reducers: {
        loadConfig: state => {
            state.loading = true
        },
        initializeSuccess: state => {
            state.isInitialized = true
            state.loading = false
        }
    },
})

export const {} = siteSlice.actions

export default siteSlice.reducer
