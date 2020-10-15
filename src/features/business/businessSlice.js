import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    marketplace: [],
    error: false
}

export const businessSlice = createSlice({
    name: 'business',
    initialState: initialState,
    reducers: {
        getMarketplaceSuccess: (state, action) => {
            console.log('ACTIO', action)
            state.marketplace = action.payload
        },
        getMarketplaceSFailure: (state, action) => {
            state.error = action.payload
        }
    },
})


export default businessSlice.reducer
