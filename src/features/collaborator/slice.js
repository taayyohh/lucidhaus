import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    collaborator: [],
    albumCollaborators: [],
    error: false
}

export const slice = createSlice({
    name: 'collaborator',
    initialState: initialState,
    reducers: {
        getCollaboratorSuccess: (state, action) => {
            state.collaborator = action.payload
        },
        getCollaboratorsSuccess: (state, action) => {
            state.albumCollaborators = action.payload
        },
        getCollaboratorsFailure: (state, action) => {
            state.error = action.payload
        },
        updateCollaboratorFailure: (state, action) => {
            state.error = action.payload
        },
        updateCollaboratorSuccess: (state, action) => {
            state.collaborator = action.payload
        },
        destroyCollaboratorSuccess: (state, action) => {
            state.collaborators = state.collaborators.filter(item => item.objectID !== action.payload.objectID)
        },
    },
})


export default slice.reducer
