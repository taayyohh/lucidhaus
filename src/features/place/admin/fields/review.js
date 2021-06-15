import {IMAGE_UPLOAD, RICH_TEXT, TOGGLE, UPLOAD_PATHS} from 'config/variables'
import * as Yup                                        from 'yup'

export const reviewFields = [
    {
        name: 'review',
        inputLabel: 'Description',
        type: RICH_TEXT
    },
    {
        name: 'safe',
        inputLabel: 'Did you feel safe?',
        type: TOGGLE
    },
    {
        name: 'celebrated',
        inputLabel: 'Did you feel celebrated?',
        type: TOGGLE
    },
    {
        name: 'welcome',
        inputLabel: 'Did you feel welcome?',
        type: TOGGLE
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
