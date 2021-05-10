import {EMAIL, TEXT} from 'config'
import * as Yup      from 'yup'

export const rsvpFields = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'email',
        inputLabel: 'Email',
        type: EMAIL
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateRsvp = Yup.object().shape({
    name: Yup
        .string()
        .required('Required'),
    email: Yup
        .string()
        .email('Invalid email')
        .required('Required'),
})
