import {RICH_TEXT, TEXT} from 'config/variables'
import * as Yup          from 'yup'

export const methodOfCommunicationField = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'description',
        inputLabel: 'Description',
        type: RICH_TEXT
    }
]

/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateMethodOfCommunication = Yup.object().shape({
    name: Yup
        .string()
        .max(50)
        .required('Required'),
    description: Yup
        .string()
})
