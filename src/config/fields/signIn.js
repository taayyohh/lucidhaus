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
    PASSWORD, TEXT
}                    from 'config'
import * as Yup      from 'yup'
import {phoneRegExp} from '../../utils/helpers'

export const signInFields = [
    {
        name: 'tel',
        inputLabel: 'Telephone',
        type: TEXT
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
    tel: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    password: Yup
        .string()
        .required('Required')
})
