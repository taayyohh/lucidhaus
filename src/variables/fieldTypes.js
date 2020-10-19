import {businessUploadPath} from './s3'

/**
 *
 * Array used in FieldSwitch
 *
 *
 */
const s3Path = businessUploadPath

export const signInFieldTypes = [
    {
        name: 'email',
        inputLabel: 'Email',
        type: 'email'
    },
    {
        name: 'password',
        inputLabel: 'Password',
        type: 'password'
    }
]

export const signUpFieldTypes = [
    {
        inputLabel: 'Name',
        name: 'name',
        type: 'text'
    },
    {
        inputLabel: 'Email',
        name: 'email',
        type: 'email'
    },
    {
        inputLabel: 'Password',
        name: 'password',
        type: 'password'
    }
]

export const userFieldTypes = [
    {
        inputLabel: 'Name',
        name: 'name'
    }
]

export const businessFieldTypes = [
    {
        name: 'key',
        type: 'singleImageUpload',
        cropWidth: 500,
        cropHeight: 500,
        s3Path: businessUploadPath
    },
    {
        inputLabel: 'Name',
        name: 'name',
        type: 'text'
    },
    {
        inputLabel: 'Business Description',
        name: 'description',
        type: 'richText'
    },
]