import {
    RICH_TEXT,
    TEXT,
    TOGGLE,
    UPLOAD,
    UPLOAD_PATHS
}               from 'config'
import * as Yup from 'yup'

export const postFields = [
    {
        name: 'photo',
        cropWidth: 500,
        cropHeight: 500,
        s3Path: UPLOAD_PATHS.post,
        type: UPLOAD,
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