import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    shop: [],
    product: [],
    orders: [],
    statusValues: [],
    error: false,
    updatedOrder: false
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
        updateStatusValueSuccess: (state) => {
            state.updatedOrder = true
        },
        updateStatusValue: (state) => {
            state.updatedOrder = false
        }
    },
})


export default shopSlice.reducer
