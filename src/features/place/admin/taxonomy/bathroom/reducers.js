export const bathroom = {
    listBathroomSuccess: (state, action) => {
        state.taxonomy.bathroom = action.payload
    },
    getBathroomSuccess: (state, action) => {
        state.taxonomy.bathroom = action.payload
    }
}
