import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    confirmDelete: {
        shouldDelete: false,
        destroy: false,
        slug: ''
    },
    description: '',
    error: '',
    formData: '',
    loading: false,
    name: '',
    redirectToProfile: false,
    photo: '',
    uploadedFile: undefined,
    uploadedFileName: '',
    slug: '',
    user: {}
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


        //user
        confirmDestroyUser: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyUser: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyUser: state => {
            state.confirmDelete.destroy = true
        },
        destroyUserSuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },
        getUserSuccess: (state, action) => {
            state.user = action.payload
        },

        //place
        confirmDestroyPlace: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyPlace: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyPlace: state => {
            state.confirmDelete.destroy = true
        },
        destroyPlaceSuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        },



    },
})

export default slice.reducer
