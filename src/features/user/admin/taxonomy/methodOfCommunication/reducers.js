export const methodOfCommunication = {
    listMethodOfCommunicationSuccess: (state, action) => {
        state.taxonomy.methodOfCommunication = action.payload
    },
    getMethodOfCommunicationSuccess: (state, action) => {
        state.taxonomy.methodOfCommunication = action.payload
    }
}
