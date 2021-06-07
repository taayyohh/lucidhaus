export const adaptiveEquipment = {
    listAdaptiveEquipmentSuccess: (state, action) => {
        state.taxonomy.adaptiveEquipment = action.payload
    },
    getAdaptiveEquipmentSuccess: (state, action) => {
        state.taxonomy.adaptiveEquipment = action.payload
    }
}
