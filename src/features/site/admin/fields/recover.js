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

import {EMAIL, PASSWORD, TEL} from 'config/variables'
import * as Yup               from 'yup'
import {phoneRegExp}   from '../../../../utils/helpers'

export const recoverFields = [
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

export const validateRecover = Yup.object().shape({
    email: Yup.string()
        .email('invalid email')
        .required('*'),
})
