export const physicalAppearance = {
    listPhysicalAppearanceSuccess: (state, action) => {
        state.taxonomy.physicalAppearance = action.payload
    },
    getPhysicalAppearanceSuccess: (state, action) => {
        state.taxonomy.physicalAppearance = action.payload
    }
}
