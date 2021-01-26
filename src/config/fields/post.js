import {
    RICH_TEXT,
    TEXT,
    TOGGLE,
    IMAGE_UPLOAD,
    UPLOAD_PATHS
}               from 'config'
import * as Yup from 'yup'

export const postFields = [
    {
        name: 'photo',
        file: 'photoFile',
        cropWidth: 1920,
        cropHeight: 1080,
        aspect: 16/9,
        s3Path: UPLOAD_PATHS.post,
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

export const validatePost = Yup.object().shape({
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