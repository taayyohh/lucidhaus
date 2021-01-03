/**
 *
 * Form Field Arrays
 *
 * structure of object in array:
 * name: str -- api model field name
 * inputLabel: str -- text that appears in input
 * type: str -- switch expression
 *
 * SPECIAL FIELDS
 *
 * upload
 * s3Path: path to bucket in s3
 * cropWidth, cropWidth: set the height and width of cropper tool
 **/

import {
    EMAIL,
    PASSWORD
}               from 'config'
import * as Yup from 'yup'

export const signInFields = [
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

export const validateSignin = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email')
        .required('Required'),
    password: Yup
        .string()
        .required('Required')
})