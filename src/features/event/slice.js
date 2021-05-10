import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    event: [],
    events: [],
    error: false
}

export const slice = createSlice({
    name: 'event',
    initialState: initialState,
    reducers: {
        getEventSuccess: (state, action) => {
            state.event = action.payload
        },
        getEventsSuccess: (state, action) => {
            state.events = action.payload
        },
        getEventsFailure: (state, action) => {
            state.error = action.payload
        },
        updateEventFailure: (state, action) => {
            state.error = action.payload
        },
        updateEventSuccess: (state, action) => {
            state.event = action.payload
        },
        destroyEventSuccess: (state, action) => {
            state.events = state.events.filter(item => item.objectID !== action.payload.objectID)
        },
    },
})


export default slice.reducer
