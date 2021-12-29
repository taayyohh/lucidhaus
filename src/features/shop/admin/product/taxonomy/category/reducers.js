export const productCategory= {
    listProductCategorySuccess: (state, action) => {
        state.taxonomy.productCategories = action.payload
    },
    getProductCategorySuccess: (state, action) => {
        state.taxonomy.productCategory = action.payload.productCategory
    }
}
