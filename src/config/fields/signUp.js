import {
    EMAIL,
    PASSWORD, TEL,
    TEXT
} from 'config'
import * as Yup from 'yup'

export const signUpFields = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'tel',
        inputLabel: 'Telephone',
        type: TEL
    },
    {
        name: 'password',
        inputLabel: 'Password',
        type: PASSWORD
    }
]

/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateSignup = Yup.object().shape({
    name: Yup
        .string()
        .max(50)
        .required('Required'),
    tel: Yup
        .string()
        .required('Required'),
    password: Yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),
})
