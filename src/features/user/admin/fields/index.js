import {DATE, IMAGE_UPLOAD, TEL, TEXT, UPLOAD_PATHS} from 'config/variables'

export const userFields = [
    {
        name: 'avatar',
        inputLabel: 'Avatar',
        file: 'avatarFile',
        cropWidth: 500,
        cropHeight: 500,
        s3Path: UPLOAD_PATHS.user,
        type: IMAGE_UPLOAD,
    },
    {
        name: 'nameFirst',
        inputLabel: 'First Name',
        type: TEXT
    },
    {
        name: 'nameMiddle',
        inputLabel: 'Middle Name',
        type: TEXT
    },
    {
        name: 'nameLast',
        inputLabel: 'Last Name',
        type: TEXT
    },
    {
        name: 'tel',
        inputLabel: 'Phone Number',
        type: TEL
    },
    {
        name: 'email',
        inputLabel: 'Email',
        type: TEXT,
        disabled: true
    },
    {
        name: 'dateOfBirth',
        inputLabel: 'Birthday',
        type: DATE
    },
    // {
    //     name: 'handle',
    //     inputLabel: 'Handle',
    //     type: TEXT
    // },
    // {
    //     name: 'role',
    //     inputLabel: 'Account Type',
    //     type: NUMBER,
    //     disabled: true
    // }
]
