import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    place: [],
    places: [],
    error: {
        places: {},
        boonePlaces: {},
        place: {},
        boonePlace: {
            status: '',
            message: ''
        }
    },
    boonePlaces: {},
    boonePlace: {}
}

export const slice = createSlice({
    name: 'place',
    initialState: initialState,
    reducers: {
        clear: (state, action) => {
            state.error = {
                places: {},
                boonePlaces: {},
                place: {},
                boonePlace: {
                    status: '',
                    message: ''
                }
            }
        },
        getPlaceSuccess: (state, action) => {
            state.place = action.payload
        },
        getPlaceFailure: (state, action) => {
            state.error.place = action.payload
        },
        getPlacesSuccess: (state, action) => {
            state.places = action.payload
        },
        getPlacesFailure: (state, action) => {
            state.error.places = action.payload
        },
        getBooneAutoCompleteSuccess: (state, action) => {
            state.boonePlaces = action.payload
        },
        getBoonePlaceSuccess: (state, action) => {
            state.boonePlace = action.payload.data
            state.error.boonePlace = {}
        },
        getBoonePlaceFailure: (state, action) => {
            state.error.boonePlace = action.payload
        },
        updatePlaceFailure: (state, action) => {
            state.error.place = action.payload
        },
        updatePlaceSuccess: (state, action) => {
            state.place = action.payload
        },
        destroyPlaceSuccess: (state, action) => {
            state.places = state.places.filter(item => item.objectID !== action.payload.objectID)
        }
    },
})


export default slice.reducer
