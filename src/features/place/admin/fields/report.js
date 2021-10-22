import {TEXTAREA} from 'config/variables'
import * as Yup   from 'yup'

export const reportFields = [
    {
        name: 'reason',
        inputLabel: 'Tell us why you find the review inappropriate.',
        type: TEXTAREA,
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateReport = Yup.object().shape({
    reason: Yup
        .string()
        .max(5000)
        .required('Required')
})
