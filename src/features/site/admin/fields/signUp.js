import {EMAIL, PASSWORD, TEL, TEXT}  from 'config/variables'
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
        name: 'email',
        inputLabel: 'Email',
        type: EMAIL
    },
    {
        name: 'password',
        inputLabel: 'Password',
        type: PASSWORD
    },
    {
        name: 'passwordConfirm',
        inputLabel: 'Confirm Password',
        type: PASSWORD
    },
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
        .required('*'),
    tel: Yup.string()
        .matches(phoneRegExp, 'invalid phone')
        .required('*'),
    email: Yup.string()
        .email('invalid email')
        .required('*'),
    password: Yup
        .string()
        .max(64)
        .required('*')
        .matches(
            passwordRegExp,
            'Must include at least 8 Characters'
        ),
    // acceptTerms: Yup.boolean()
    //     .oneOf([true], 'Must Accept Terms and Conditions'),

    passwordConfirm: Yup
        .string()
        .oneOf([Yup.ref('password')], 'passwords do not match')
        .required('*')
})
