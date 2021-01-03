import {
    EMAIL,
    PASSWORD,
    TEXT
}               from 'config'
import * as Yup from 'yup'

export const signUpFields = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'email',
        inputLabel: 'Email',
        type: EMAIL
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
    email: Yup
        .string()
        .email('Invalid email')
        .required('Required'),
    password: Yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),
})