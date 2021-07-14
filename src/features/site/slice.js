import {createSelector, createSlice} from '@reduxjs/toolkit'

const initialState = {
    confirmDelete: {
        shouldDelete: false,
        destroy: false,
        slug: '',
        type: ''
    },
    isInitialized: false,
    loading: false,
    slug: '',
    url: [],
    layout: '',
    notification: null,
    notificationTheme: '',
    notificationDelay: undefined,
    documentHead: {
        title: '',
        description: '',
        image: '',
        imageAlt: '',
        url: '',
        siteName: ''
    }
}

export const slice = createSlice({
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
        destructureUrl: (state, action) => {
            state.slug = action.payload.slug
            state.url = action.payload.url
        },
        clearNotification: state => {
            state.notification = null
        },
        setNotification: (state, action) => {
            state.notification = action.payload.notification
            state.notificationTheme = action.payload.theme
            state.notificationDelay = action.payload.delay
        },
        setDocumentHead: (state, action) => {
            state.documentHead = {...state.documentHead, ...action.payload}
        },



        /* ADMIN */
        //product
        confirmDestroyEntity: (state, action) => {
            state.confirmDelete.shouldDelete = true
            state.confirmDelete.slug = action.payload.slug
            state.confirmDelete.type = action.payload.type
        },
        denyDestroyEntity: state => {
            state.confirmDelete.shouldDelete = false
        },
        acceptDestroyEntity: state => {
            state.confirmDelete.destroy = true
        },
        destroyEntitySuccess: state => {
            state.confirmDelete.shouldDelete = false
            state.confirmDelete.destroy = false
            state.confirmDelete.slug = ''
            state.confirmDelete.type = ''
        }
    },
})

export const mobileFlag = createSelector(
    ({site}) => site.layout,
    layout => layout === 'mobile'
)

export default slice.reducer
