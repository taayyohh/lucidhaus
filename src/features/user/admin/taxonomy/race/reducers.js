export const race = {
    listRaceSuccess: (state, action) => {
        state.taxonomy.race = action.payload
    },
    getRaceSuccess: (state, action) => {
        state.taxonomy.race = action.payload
    }
}
