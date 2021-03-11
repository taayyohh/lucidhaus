import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    place: [],
    places: [],
    error: false
}

export const slice = createSlice({
    name: 'place',
    initialState: initialState,
    reducers: {
        getPlaceSuccess: (state, action) => {
            state.place = action.payload
        },
        getPlacesSuccess: (state, action) => {
            state.places = action.payload
        },
        getPlacesFailure: (state, action) => {
            state.error = action.payload
        },
        updatePlaceFailure: (state, action) => {
            state.error = action.payload
        },
        updatePlaceSuccess: (state, action) => {
            state.place = action.payload
        },
        destroyPlaceSuccess: (state, action) => {
            state.places = state.places.filter(item => item.objectID !== action.payload.objectID)
        },
        getBooneAutoCompleteSuccess: (state, action) => {
            state.boonePlaces = action.payload
        }
    },
})


export default slice.reducer
