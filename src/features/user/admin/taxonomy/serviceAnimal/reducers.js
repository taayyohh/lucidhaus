export const serviceAnimal = {
    listServiceAnimalSuccess: (state, action) => {
        state.taxonomy.serviceAnimal = action.payload
    },
    getServiceAnimalSuccess: (state, action) => {
        state.taxonomy.serviceAnimal = action.payload
    }
}
