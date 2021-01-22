import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    artist: [],
    artists: [],
    error: false
}

export const slice = createSlice({
    name: 'artist',
    initialState: initialState,
    reducers: {
        getArtistSuccess: (state, action) => {
            state.artist = action.payload
        },
        getArtistsSuccess: (state, action) => {
            state.artists = action.payload
        },
        getArtistsFailure: (state, action) => {
            state.error = action.payload
        },
        updateArtistFailure: (state, action) => {
            state.error = action.payload
        },
        updateArtistSuccess: (state, action) => {
            state.artist = action.payload
        },
        destroyArtistSuccess: (state, action) => {
            state.artists = state.artists.filter(item => item.objectID !== action.payload.objectID)
        },
    },
})


export default slice.reducer
