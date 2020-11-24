import {
    createSelector,
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    isInitialized: false,
    loading: false,
    slug: '',
    layout: '',
    notification: null,
    notificationTheme: ''
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
        setSlug: (state, action) => {
            state.slug = action.payload.slug
        },
        clearNotification: state => {
            state.notification = null
        },
        setNotification: (state, action) => {
            state.notification = action.payload.notification
            state.notificationTheme = action.payload.theme
        }
    },
})

export const mobileFlag = createSelector(
    ({site}) => site.layout,
    layout => layout === 'mobile'
)

export default siteSlice.reducer
