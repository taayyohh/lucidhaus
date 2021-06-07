export const foodOptions = {
    listFoodOptionsSuccess: (state, action) => {
        state.taxonomy.foodOptions = action.payload
    },
    getFoodOptionsSuccess: (state, action) => {
        state.taxonomy.foodOptions = action.payload
    }
}
