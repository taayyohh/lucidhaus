export const languageSpoken = {
    listLanguageSpokenSuccess: (state, action) => {
        state.taxonomy.languageSpoken = action.payload
    },
    getLanguageSpokenSuccess: (state, action) => {
        state.taxonomy.languageSpoken = action.payload
    }
}
