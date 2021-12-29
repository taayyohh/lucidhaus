import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: '',
    slug: '',
    description: '',
    photo: '',
    uploadedFile: undefined,
    uploadedFileName: '',
    loading: false,
    error: '',
    createdPost: '',
    songsToAdd: [],
    rsvpsToAdd: [],
    redirectToProfile: false,
    formData: '',
    confirmDelete: {
        shouldDelete: false,
        destroy: false,
        slug: ''
    }
}

export const slice = createSlice({
    name: 'admin',
    initialState: initialState,
    reducers: {
        denyDestroyItem: (state, action) => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyItem: (state, action) => {
            state.confirmDelete.destroy = true
        },

        //post
        confirmDestroyPost: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyPost: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyPost: state => {
            state.confirmDelete.destroy = true
        },
        destroyPostSuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },

        //product
        confirmDestroyProduct: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyProduct: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyProduct: state => {
            state.confirmDelete.destroy = true
        },
        destroyProductSuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },

        //product category
        confirmDestroyProductCategory: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload._id
        },
        denyDestroyProductCategory: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyProductCategory: state => {
            state.confirmDelete.destroy = true
        },
        destroyProductCategorySuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },

        //album
        confirmDestroyAlbum: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyAlbum: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyAlbum: state => {
            state.confirmDelete.destroy = true
        },
        destroyAlbumSuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },

        //event
        confirmDestroyEvent: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyEvent: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyEvent: state => {
            state.confirmDelete.destroy = true
        },
        destroyEventSuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },


        //songs
        addSongToAlbum: (state, action) => {
            const { title, audio, trackNumber } = action.payload
            state.songsToAdd.push({ title, audio, trackNumber })
        },
        confirmDestroySong: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroySong: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroySong: state => {
            state.confirmDelete.destroy = true
        },
        destroySongSuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },

        //rsvps
        addRsvpToEvent: (state, action) => {
            const { name, email } = action.payload
            state.rsvpsToAdd.push({ name, email })
        },
        confirmDestroyRsvp: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyRsvp: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyRsvp: state => {
            state.confirmDelete.destroy = true
        },
        destroyRsvpSuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },

        //artist
        confirmDestroyArtist: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyArtist: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyArtist: state => {
            state.confirmDelete.destroy = true
        },
        destroyArtistSuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },
    },
})

export default slice.reducer
