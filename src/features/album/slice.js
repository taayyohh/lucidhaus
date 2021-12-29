import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    album: [],
    albums: [],
    audiusProvider: '',
    error: false
}

export const slice = createSlice({
    name: 'album',
    initialState: initialState,
    reducers: {
        getAlbumSuccess: (state, action) => {
            state.album = action.payload
        },
        getAlbumsSuccess: (state, action) => {
            state.albums = action.payload
        },
        getAlbumsFailure: (state, action) => {
            state.error = action.payload
        },
        updateAlbumFailure: (state, action) => {
            state.error = action.payload
        },
        updateAlbumSuccess: (state, action) => {
            state.album = action.payload
        },
        destroyAlbumSuccess: (state, action) => {
            state.albums = state.albums.filter(item => item.objectID !== action.payload.objectID)
        },
        getAudiusProvidersSuccess: (state, action) => {
            state.audiusProvider = action?.payload?.data?.[0]
        }
    },
})

export default slice.reducer
