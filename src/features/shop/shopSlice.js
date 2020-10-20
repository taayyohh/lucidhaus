import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    shop: [],
    error: false
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        getShopSuccess: (state, action) => {
            state.shop = action.payload
        },
        getShopSFailure: (state, action) => {
            state.error = action.payload
        },
    },
})


export default shopSlice.reducer
