export const gender = {
    listGenderSuccess: (state, action) => {
        state.taxonomy.gender = action.payload
    },
    getGenderSuccess: (state, action) => {
        state.taxonomy.gender = action.payload
    }
}
