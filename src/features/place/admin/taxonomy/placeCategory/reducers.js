export const placeCategory = {
    listPlaceCategorySuccess: (state, action) => {
        state.taxonomy.placeCategory = action.payload
    },
    getPlaceCategorySuccess: (state, action) => {
        state.taxonomy.placeCategory = action.payload
    }
}
