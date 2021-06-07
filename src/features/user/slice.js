import {createSlice}           from '@reduxjs/toolkit'
import {adaptiveEquipment} from './admin/taxonomy/adaptiveEquipment/reducers'
import {bodyModification}  from './admin/taxonomy/bodyModification/reducers'
import {gender}            from './admin/taxonomy/gender/reducers'
import {language}         from './admin/taxonomy/language/reducers'
import {methodOfCommunication} from './admin/taxonomy/methodOfCommunication/reducers'
import {physicalAppearance}    from './admin/taxonomy/physicalAppearance/reducers'
import {pronoun}               from './admin/taxonomy/pronoun/reducers'
import {race}                  from './admin/taxonomy/race/reducers'
import {serviceAnimal}         from './admin/taxonomy/serviceAnimal/reducers'
import {sexualOrientation}     from './admin/taxonomy/sexualOrientation/reducers'

const initialState = {
    _id: '',
    token: '',
    nameFirst: '',
    tel: '',
    slug: '',
    isAuthenticated: false,
    isAdmin: false,
    error: false,
    loading: false,
    redirectToReferrer: false,
    purchaseHistory: [],
    confirmationRequest: undefined,
    users: [],
    user: {
      avatar: '',
      description: '',
      email: '',
      ethnicHispanicOrigin: '',
      nameFirst: '',
      nameMiddle: '',
      nameLast: '',
      tel: '',
      role: '',
      type: ''
    },
    taxonomy: {
        adaptiveEquipment: [],
        bodyModification: [],
        gender: [],
        language: [],
        methodOfCommunication: [],
        physicalAppearance: [],
        pronoun: [],
        race: [],
        serviceAnimal: [],
        sexualOrientation: []
    }
}

export const slice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signIn: state => {
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.loading = false
            state.error = false
            state.nameFirst = action.payload.user.nameFirst
            state.tel = action.payload.user.tel
            state.isAdmin = action.payload.user.role === 0
        },
        signInFailure: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
        authenticate: state => {
            state.redirectToReferrer = true
        },
        authenticateSuccess: (state, action) => {
            state.redirectToReferrer = false
            state.isAuthenticated = true
            state.token = action.payload.token
            state._id = action.payload.user._id
        },
        isAuthenticatedSuccess: (state, action) => {
            state.token = action.payload.token
            state.isAuthenticated = true
            state.tel = action.payload.user.tel
            state.nameFirst = action.payload.user.nameFirst
            state._id = action.payload.user._id
            state.isAdmin = action.payload.user.role === 0
        },
        isAuthenticatedFailure: state => {
            state.isAuthenticated = false
        },
        signOutSuccess: state => {
            state.nameFirst = ''
            state.tel = ''
            state.error = false
            state.loading = false
            state.redirectToReferrer = false
            state.isAuthenticated = false
            state.isAdmin = false
            state.token = ''
            state._id = ''
        },
        signOutFailure: (state, action) => {
            state.error = action.payload.message
        },
        signUpFailure: (state, action) => {
            state.error = action.payload.error
        },
        signUpSuccess: (state) => {
            state.confirmationRequest = undefined
        },
        getPurchaseHistorySuccess: (state, action) => {
            state.purchaseHistory = action.payload
        },
        getPurchaseHistoryFailure: (state, action) => {
            state.error = action.payload.error
        },
        reset: state => {
            state.error = false
            state.loading = false
            state.redirectToReferrer = false
        },
        updateSuccess: (state, action) => {
            state.nameFirst = action.payload.nameFirst
            state.tel = action.payload.tel
            state.slug = action.payload.slug
        },
        updateFailure: (state, action) => {
            state.error = action.payload.error
        },
        requestTwilioCodeConfirmation: (state, action) => {
            state.confirmationRequest = action.payload
        },
        getUsersSuccess: (state, action) => {
            state.users = action.payload
        },
        getUserSuccess: (state, action) => {
            state.user = action.payload
        },


        /*   ADMIN  */

        //taxonomy
        ...adaptiveEquipment,
        ...bodyModification,
        ...gender,
        ...language,
        ...methodOfCommunication,
        ...physicalAppearance,
        ...pronoun,
        ...race,
        ...serviceAnimal,
        ...sexualOrientation
    },
})

export default slice.reducer
