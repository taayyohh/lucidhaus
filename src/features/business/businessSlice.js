import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    business: [],
    marketplace: [],
    error: false
}

export const businessSlice = createSlice({
    name: 'business',
    initialState: initialState,
    reducers: {
        getBusinessSuccess: (state, action) => {
            state.business = action.payload
        },
        getMarketplaceSuccess: (state, action) => {
            state.marketplace = action.payload
        },
        getMarketplaceFailure: (state, action) => {
            state.error = action.payload
        },
        updateBusinessFailure: (state, action) => {
            state.error = action.payload
        },
        updateBusinessSuccess: (state, action) => {
            state.business = action.payload
        }
    },
})


export default businessSlice.reducer
