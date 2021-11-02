import {MULTI_SELECT, NUMBER, STATE_CITY, TEXT} from 'config/variables'
import * as Yup                                 from 'yup'

export const submitPlaceFields = [
    {
        name: 'name',
        inputLabel: 'Place Name',
        type: TEXT
    },
    {
        name: 'website',
        inputLabel: 'Website',
        type: TEXT
    },
    {
        name: 'address1',
        inputLabel: 'Address ',
        type: TEXT
    },
    {
        name: 'address2',
        inputLabel: 'Address 2 ',
        type: TEXT
    },
    {
        name: ['state', 'city'],
        inputLabel: 'City ',
        type: STATE_CITY
    },
    // {
    //     name: 'state',
    //     inputLabel: 'State ',
    //     type: STATE_CITY
    // },
    {
        name: 'zip',
        inputLabel: 'Zip ',
        type: TEXT
    },
    {
        name: 'longitude',
        inputLabel: 'Longitude ',
        type: NUMBER,
        disabled: true
    },
    {
        name: 'latitude',
        inputLabel: 'Latitude ',
        type: NUMBER,
        disabled: true
    },
    {
        name: 'categories',
        inputLabel: 'Categories',
        type: MULTI_SELECT
    },
    {
        name: 'communitiesServed',
        inputLabel: 'Communities Served',
        type: MULTI_SELECT
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateSubmitPlace = Yup.object().shape({
    name: Yup
        .string()
        .max(50)
        .required('Required'),
})
