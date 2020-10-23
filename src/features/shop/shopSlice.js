import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    shop: [],
    product: [],
    relatedProducts: [],
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
        },
        updateCartSuccess: (state, action) => {
            state.cart = action.payload.cart
        },
        getRelatedProductsSuccess: (state, action) => {
            state.relatedProducts = action.payload
        },
        getRelatedProductsFailure: (state, action) => {
            state.error = action.payload
        }
    },
})


export default shopSlice.reducer
