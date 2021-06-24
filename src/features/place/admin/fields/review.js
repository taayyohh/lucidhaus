import {IMAGE_UPLOAD, LIKERT, RICH_TEXT, TOGGLE, UPLOAD_PATHS} from 'config/variables'
import * as Yup                                                from 'yup'

export const reviewFields = [
    {
        name: 'review',
        inputLabel: 'Leave a Review',
        type: RICH_TEXT
    },
    {
        name: 'safe',
        inputLabel: 'Did you feel safe?',
        helperText: 'This is both your physical and emotional safety. ' +
            'Feeling safe includes feeling like you can be your full authentic ' +
            'self and can communicate openly without being discriminated against based on your identity.',
        type: LIKERT
    },
    {
        name: 'welcome',
        inputLabel: 'Did you feel welcomed?',
        helperText: 'Not only do you feel safe, but you also feel treated with dignity and respect. ' +
            'Are your needs being met at the same level as everyone else’s?',
        type: LIKERT
    },
    {
        name: 'celebrated',
        inputLabel: 'Did you feel celebrated?',
        helperText: 'Do you see yourself represented in the space, the advertising, the products? ' +
            'Did you leave feeling better than when you came in? ',
        type: LIKERT
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
        .string().max(280)
        .required('Required'),
})
