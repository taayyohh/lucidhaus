import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    marketPlace: [],
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
        getBusinessesSuccess: (state, action) => {
            state.marketPlace = action.payload
        },
        getBusinessesFailure: (state, action) => {
            state.error = action.payload
        }
    },
})

export const {} = adminSlice.actions

export default adminSlice.reducer
