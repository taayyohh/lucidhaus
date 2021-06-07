export const pronoun = {
    listPronounSuccess: (state, action) => {
        state.taxonomy.pronoun = action.payload
    },
    getPronounSuccess: (state, action) => {
        state.taxonomy.pronoun = action.payload
    }
}
