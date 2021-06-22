import {PASSWORD, TEL, TEXT, TOGGLE} from 'config/variables'
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
    },
    {
        name: 'passwordConfirm',
        inputLabel: 'Confirm Password',
        type: PASSWORD
    },
    {
        name: 'acceptTerms',
        inputLabel: 'Accept Terms of Service',
        inputLabelHelper: 'https://inclusive-guide.s3.us-east-2.amazonaws.com/assets/Inclusive+Journeys+Website+Terms+of+Service+-+4817-1972-0421+4.pdf',
        type: TOGGLE
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
            'Must include at least 8 Characters, One Uppercase, One Number'
        ),
    acceptTerms: Yup.boolean()
        .oneOf([true], 'Must Accept Terms and Conditions'),

    passwordConfirm: Yup
        .string()
        .oneOf([Yup.ref('password')], 'passwords do not match')
        .required('Password confirm is required')
})
