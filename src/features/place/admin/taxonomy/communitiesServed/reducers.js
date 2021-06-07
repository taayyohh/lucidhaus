export const communitiesServed = {
    listCommunitiesServedSuccess: (state, action) => {
        state.taxonomy.communitiesServed = action.payload
    },
    getCommunitiesServedSuccess: (state, action) => {
        state.taxonomy.communitiesServed = action.payload
    }
}
