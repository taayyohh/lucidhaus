import {MULTI_SELECT, NUMBER, TEXT} from 'config/variables'
import * as Yup                     from 'yup'

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
        name: 'city',
        inputLabel: 'City ',
        type: TEXT
    },
    {
        name: 'zip',
        inputLabel: 'Zip ',
        type: TEXT
    },
    {
        name: 'country',
        inputLabel: 'Country',
        type: TEXT
    },
    {
        name: 'state',
        inputLabel: 'State ',
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
