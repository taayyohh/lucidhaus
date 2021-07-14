import {FILTER} from 'config/variables'
import * as Yup from 'yup'

export const multiSelectSearchField = [
    {
        name: 'input',
        inputLabel: 'Filter',
        type: FILTER
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateMultiSelect = Yup.object().shape({
    search: Yup
        .string()
        .max(50)
        .required('Required')
})
