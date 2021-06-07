export const businessOwner = {
    listBusinessOwnerSuccess: (state, action) => {
        state.taxonomy.businessOwner = action.payload
    },
    getBusinessOwnerSuccess: (state, action) => {
        state.taxonomy.businessOwner = action.payload
    }
}
