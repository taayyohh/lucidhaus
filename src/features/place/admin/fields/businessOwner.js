import {IMAGE, TEL, TEXT} from 'config/variables'
import * as Yup           from 'yup'

export const businessOwnerFields = [
    {
        name: 'avatar',
        inputLabel: 'Avatar',
        type: IMAGE
    },
    {
        name: 'bio',
        inputLabel: 'Bio',
        type: TEXT
    },
    {
        name: 'email',
        inputLabel: 'Email',
        type: TEXT
    },
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'tel',
        inputLabel: 'Telephone',
        type: TEL
    }
]

/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateBusinessOwner = Yup.object().shape({
    name: Yup
        .string()
        .max(50)
        .required('Required'),
})
