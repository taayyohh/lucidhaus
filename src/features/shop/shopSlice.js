import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    shop: [],
    product: [],
    orders: [],
    statusValues: [],
    error: false
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        getShopSuccess: (state, action) => {
            state.shop = action.payload
        },
        getShopFailure: (state, action) => {
            state.error = action.payload
        },
        getOrdersSuccess: (state, action) => {
            state.orders = action.payload
        },
        getOrdersFailure: (state, action) => {
            state.error = action.payload
        },
        getStatusValuesSuccess: (state, action) => {
            state.statusValues = action.payload
        },
        getStatusValuesFailure: (state, action) => {
            state.error = action.payload
        },
        getProductSuccess: (state, action) => {
            state.product = action.payload
        },
    },
})


export default shopSlice.reducer
