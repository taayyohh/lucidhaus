import {createSlice}     from '@reduxjs/toolkit'
import {productCategory} from './admin/product/taxonomy/category/reducers'

const initialState = {
    cart: [],
    shop: [],
    product: [],
    productCategory: [],
    productCategories: [],
    relatedProducts: [],
    taxonomy: {},
    orders: [],
    statusValues: [],
    deliveryAddress: '',
    billingAddress: '',
    error: false,
    updatedOrder: false
}

export const slice = createSlice({
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
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item._id !== action.payload)
        },
        emptyCart: (state) => {
            state.cart = []
        },
        destroyProductSuccess: (state, action) => {
            state.shop = state.shop.filter(item => item.objectID !== action.payload.objectID)
        },
        getProductCategorySuccess: (state, action) => {
            state.productCategory = action.payload.productCategory
        },
        getProductCategoriesSuccess: (state, action) => {
            state.taxonomy.productCategories = action.payload
        },
        getBraintreeTokenSuccess: (state, action) => {
            state.braintreeClientToken = action.payload.clientToken
        },
        updateDeliveryAddress: (state, action) => {
            state.deliveryAddress = action.payload
        },
        updateBillingAddress: (state, action) => {
            state.billingAddress = action.payload
        },

        /*   ADMIN  */

        //taxonomy
        ...productCategory
    },
})


export default slice.reducer
