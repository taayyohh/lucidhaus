import {createSlice}       from '@reduxjs/toolkit'
import {bathroom}          from './admin/taxonomy/bathroom/reducers'
import {businessOwner}     from './admin/taxonomy/businessOwner/reducers'
import {communitiesServed} from './admin/taxonomy/communitiesServed/reducers'
import {foodOptions}       from './admin/taxonomy/foodOptions/reducers'
import {languageSpoken}    from './admin/taxonomy/languageSpoken/reducers'
import {placeCategory}     from './admin/taxonomy/placeCategory/reducers'

const initialState = {
    bathrooms: [],
    businessOwner: [],
    communitiesServed: [],
    foodOptions: [],
    languageSpoken: [],
    placeCategory: [],
    place: [],
    places: [],
    reviews: [],
    error: {
        places: {},
        boonePlaces: {},
        place: {},
        boonePlace: {
            status: '',
            message: ''
        }
    },
    boonePlaces: {},
    boonePlace: {},
    noResults: {
        boone: false,
        algolia: false
    },
    taxonomy: {
        bathroom: [],
        businessOwner: [],
        communitiesServed: [],
        foodOptions: [],
        languageSpoken: [],
        placeCategory: [],
    },
    algoliaPlaces: []
}

export const slice = createSlice({
    name: 'place',
    initialState: initialState,
    reducers: {
        clear: (state, action) => {
            state.error = {
                places: {},
                boonePlaces: {},
                place: {},
                boonePlace: {
                    status: '',
                    message: ''
                }
            }
        },
        getPlace: (state, action) => {
            state.place = []
            state.bathrooms = []
            state.businessOwner = []
            state.communitiesServed = []
            state.foodOptions = []
            state.languageSpoken = []
            state.placeCategory = []
        },
        getPlaceSuccess: (state, action) => {
            state.place = action.payload
            state.reviews = []
        },
        getPlaceFailure: (state, action) => {
            state.error.place = action.payload
        },
        getPlacesSuccess: (state, action) => {
            state.places = action.payload
        },
        getPlacesFailure: (state, action) => {
            state.error.places = action.payload
        },
        getBooneAutoCompleteSuccess: (state, action) => {
            state.boonePlaces = action.payload
            state.noResults.boone = false
        },
        getBooneAutoCompleteFailure: (state, action) => {
            state.noResults.boone = true
            state.boonePlaces = {}
        },
        getBoonePlaceSuccess: (state, action) => {
            state.boonePlace = action.payload.data
            state.error.boonePlace = {}
        },
        getBoonePlaceFailure: (state, action) => {
            state.error.boonePlace = action.payload
        },
        updatePlaceFailure: (state, action) => {
            state.error.place = action.payload
        },
        updatePlaceSuccess: (state, action) => {
            state.place = action.payload
        },
        destroyPlaceSuccess: (state, action) => {
            state.places = state.places.filter(item => item.objectID !== action.payload.objectID)
        },
        getAlgoliaPlacesSuccess: (state, action) => {
            state.algoliaPlaces = action.payload
            state.noResults.algolia = false
        },
        getAlgoliaPlacesFailure: (state, action) => {
            state.noResults.algolia = true
            state.algoliaPlaces = []
        },
        getReviewSuccess: (state, action) => {
            state.reviews = [...state.reviews, action.payload]
        },
        getBathroomEntitySuccess: (state, action) => {
            state.bathrooms = state.bathrooms.filter(item => item._id === action.payload.entity._id).length < 1
                ? [...state.bathrooms, action.payload.entity]
                : state.bathrooms
        },
        getBusinessOwnerEntitySuccess: (state, action) => {
            state.businessOwner = state.businessOwner.filter(item => item._id === action.payload.entity._id).length < 1
                ? [...state.businessOwner, action.payload.entity]
                : state.businessOwner
        },
        getPlaceCategoryEntitySuccess: (state, action) => {
            state.placeCategory = state.placeCategory.filter(item => item._id === action.payload.entity._id).length < 1
                ? [...state.placeCategory, action.payload.entity]
                : state.placeCategory        },
        getCommunitiesServedEntitySuccess: (state, action) => {
            state.communitiesServed = state.communitiesServed.filter(item => item._id === action.payload.entity._id).length < 1
                ? [...state.communitiesServed, action.payload.entity]
                : state.communitiesServed
        },
        getFoodOptionsEntitySuccess: (state, action) => {
            state.foodOptions = state.foodOptions.filter(item => item._id === action.payload.entity._id).length < 1
                ? [...state.foodOptions, action.payload.entity]
                : state.foodOptions
        },
        getLanguageSpokenEntitySuccess: (state, action) => {
            state.languageSpoken = state.languageSpoken.filter(item => item._id === action.payload.entity._id).length < 1
                ? [...state.languageSpoken, action.payload.entity]
                : state.languageSpoken
        },


        /*   ADMIN  */

        //taxonomy
        ...bathroom,
        ...businessOwner,
        ...communitiesServed,
        ...foodOptions,
        ...languageSpoken,
        ...placeCategory
    },
})


export default slice.reducer
