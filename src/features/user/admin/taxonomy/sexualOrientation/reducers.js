export const sexualOrientation = {
    listSexualOrientationSuccess: (state, action) => {
        state.taxonomy.sexualOrientation = action.payload
    },
    getSexualOrientationSuccess: (state, action) => {
        state.taxonomy.sexualOrientation = action.payload
    }
}
