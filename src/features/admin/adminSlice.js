import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    businessForm: {
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
        formData: ''
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
        }
    },
})

export default adminSlice.reducer
