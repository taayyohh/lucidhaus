export const bathroom = {
    listBathroomSuccess: (state, action) => {
        state.taxonomy.bathrooms = action.payload
    },
    getBathroomSuccess: (state, action) => {
        state.taxonomy.bathroom = action.payload
    }
}
