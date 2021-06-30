import {PASSWORD}       from 'config/variables'
import {passwordRegExp} from 'utils/helpers'
import * as Yup         from 'yup'
import "yup-phone"

export const resetFields = [
    {
        name: 'password',
        inputLabel: 'Password',
        type: PASSWORD
    },
    {
        name: 'passwordConfirm',
        inputLabel: 'Confirm Password',
        type: PASSWORD
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateReset = Yup.object().shape({
    password: Yup
        .string()
        .max(64)
        .required('*')
        .matches(
            passwordRegExp,
            'Must include at least 8 Characters'
        ),
    passwordConfirm: Yup
        .string()
        .oneOf([Yup.ref('password')], 'passwords do not match')
        .required('*')
})
