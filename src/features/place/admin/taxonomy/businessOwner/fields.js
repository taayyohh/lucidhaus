import {IMAGE_UPLOAD, RICH_TEXT, TEL, TEXT, UPLOAD_PATHS} from 'config/variables'
import * as Yup                                           from 'yup'

export const businessOwnerField = [
    {
        name: 'avatar',
        inputLabel: 'Avatar',
        file: 'avatarFile',
        cropWidth: 500,
        cropHeight: 500,
        s3Path: UPLOAD_PATHS.businessOwner,
        type: IMAGE_UPLOAD,
    },
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'email',
        inputLabel: 'Email',
        type: TEXT
    },
    {
        name: 'description',
        inputLabel: 'Bio',
        type: RICH_TEXT
    },

    {
        name: 'tel',
        inputLabel: 'Telephone',
        type: TEL
    }
]

/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateBusinessOwner = Yup.object().shape({
    name: Yup
        .string()
        .max(50)
        .required('Required'),
})
