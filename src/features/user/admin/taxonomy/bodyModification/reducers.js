export const bodyModification = {
    listBodyModificationSuccess: (state, action) => {
        state.taxonomy.bodyModification = action.payload
    },
    getBodyModificationSuccess: (state, action) => {
        state.taxonomy.bodyModification = action.payload
    }
}
