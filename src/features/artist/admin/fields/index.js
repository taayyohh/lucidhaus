import {IMAGE_UPLOAD, RICH_TEXT, TEXT, TOGGLE, UPLOAD_PATHS} from 'config/variables'
import * as Yup                                              from 'yup'

export const artistFields = [
    {
        name: 'photo',
        file: 'photoFile',
        cropWidth: 500,
        cropHeight: 500,
        s3Path: UPLOAD_PATHS.artist,
        type: IMAGE_UPLOAD,
    },
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'description',
        inputLabel: 'Post Description',
        type: RICH_TEXT
    },
    {
        name: 'isPublished',
        inputLabel: 'Published',
        type: TOGGLE
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateArtist = Yup.object().shape({
    photo: Yup
        .string()
        .required('Required'),
    name: Yup
        .string()
        .max(50)
        .required('Required'),
    description: Yup
        .string()
        .required('Required'),
})
