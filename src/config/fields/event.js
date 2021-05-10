import {IMAGE_UPLOAD, RICH_TEXT, TEXT, TOGGLE, UPLOAD_PATHS} from 'config'
import * as Yup                                              from 'yup'

export const eventFields = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'flyer',
        file: 'flyerFile',
        cropWidth: 1294,
        cropHeight: 2000,
        s3Path: UPLOAD_PATHS.event,
        type: IMAGE_UPLOAD,
        aspect: null
    },
    {
        name: 'description',
        inputLabel: 'Description',
        type: RICH_TEXT
    },
    {
        name: 'isPublished',
        inputLabel: 'Published',
        type: TOGGLE
    },
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateEvent = Yup.object().shape({
    flyer: Yup
        .string()
        .required('Required'),
    name: Yup
        .string()
        .max(50)
        .required('Required')
})
