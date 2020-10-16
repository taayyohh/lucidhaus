import {createSlice, createSelector} from '@reduxjs/toolkit'

const initialState = {
    isInitialized: false,
    loading: false,
    path: '',
    slug: '',
    layout: ''
}

export const siteSlice = createSlice({
    name: 'site',
    initialState: initialState,
    reducers: {
        loadConfig: state => {
            state.loading = true
        },
        initializeSuccess: state => {
            state.isInitialized = true
            state.loading = false
        },
        setLayout: (state, action) => {
            state.layout = action.payload
        },
        setConfig: (state, action) => {
            state.path = action.payload.path
            state.slug = action.payload.slug
        }
    },
})

export const mobileFlag = createSelector(
    ({site}) => site.layout,
    layout => layout === 'mobile'
)

export default siteSlice.reducer
