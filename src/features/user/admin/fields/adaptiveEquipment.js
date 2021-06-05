import {RICH_TEXT, TEXT} from 'config/variables'
import * as Yup          from 'yup'

export const adaptiveEquipmentField = [
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

export const validateAdaptiveEquipment = Yup.object().shape({
    name: Yup
        .string()
        .max(50)
        .required('Required'),
    description: Yup
        .string()
})
