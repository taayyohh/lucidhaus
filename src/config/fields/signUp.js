import {PASSWORD, TEL, TEXT}         from 'config'
import {passwordRegExp, phoneRegExp} from 'utils/helpers'
import * as Yup                      from 'yup'
import "yup-phone"

export const signUpFields = [
    {
        name: 'nameFirst',
        inputLabel: 'First Name',
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

export const confirmationCodeFields = [
    {
        name: 'verificationCode',
        inputLabel: 'Verification Code',
        type: TEXT
    },
]

/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateSignup = Yup.object().shape({
    nameFirst: Yup
        .string()
        .max(50)
        .required('Required'),
    tel: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    password: Yup
        .string()
        .required('Please Enter your password')
        .matches(
            passwordRegExp,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),
})
