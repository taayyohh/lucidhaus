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
        createdBusiness: '',
        redirectToProfile: false,
        formData: '',
        confirmDelete: {
            shouldDelete: false,
            destroy: false,
            slug: ''
        }
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState: initialState,
    reducers: {
        createBusinessSuccess: (state, action) => {
            console.log('success', action)
        },
        createBusinessFailure: (state, action) => {
            console.log('failure', action)
        },
        confirmDestroyBusiness: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
        },
        denyDestroyBusiness: (state, action) => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyBusiness: (state, action) => {
            state.confirmDelete.destroy = true
        },
        destroyBusinessSuccess: (state) => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
        }
    },
})

export default adminSlice.reducer
