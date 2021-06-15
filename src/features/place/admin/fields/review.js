import {IMAGE_UPLOAD, RICH_TEXT, UPLOAD_PATHS} from 'config/variables'
import * as Yup                                from 'yup'

export const reviewFields = [
    {
        name: 'review',
        inputLabel: 'Description',
        type: RICH_TEXT
    },
    {
        name: 'photo',
        file: 'photoFile',
        cropWidth: 500,
        cropHeight: 500,
        s3Path: UPLOAD_PATHS.place,
        type: IMAGE_UPLOAD,
    },
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateReview = Yup.object().shape({
    photo: Yup
        .string(),
    review: Yup
        .string()
        .required('Required'),
})
