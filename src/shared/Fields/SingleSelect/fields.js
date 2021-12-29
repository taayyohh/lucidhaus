import {FILTER} from 'config/variables'
import * as Yup from 'yup'

export const singleSelectSearchField = [
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

export const validateSingleSelect = Yup.object().shape({
    search: Yup
        .string()
        .max(50)
        .required('Required')
})
