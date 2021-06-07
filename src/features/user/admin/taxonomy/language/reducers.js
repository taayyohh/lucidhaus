export const language = {
    listLanguageSuccess: (state, action) => {
        state.taxonomy.language = action.payload
    },
    getLanguageSuccess: (state, action) => {
        state.taxonomy.language = action.payload
    }
}
