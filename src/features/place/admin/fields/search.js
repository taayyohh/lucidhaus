import {TEXT}   from 'config/variables'
import * as Yup from 'yup'

export const placeSearchField = [
    {
        name: 'input',
        inputLabel: 'Where to?',
        type: TEXT
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validatePlace = Yup.object().shape({
    search: Yup
        .string()
        .max(50)
        .required('Required')
})
