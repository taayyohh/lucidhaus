import {DATE, IMAGE_UPLOAD, TEXT, UPLOAD_PATHS} from 'config/variables'
import * as Yup                                 from 'yup'

export const userFields = [
    {
        name: 'avatar',
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
        name: 'dateOfBirth',
        inputLabel: 'Birthday',
        type: DATE
    },
    {
        name: 'zip',
        inputLabel: 'Zip Code',
        type: TEXT
    }
]

export const validateUser = Yup.object().shape({
    nameFirst: Yup.string()
        .required('*')
        .max(255),
    nameMiddle: Yup.string()
        .max(255),
    nameLast: Yup.string()
        .max(255),
    zip: Yup
        .string()
        .max(5)
})
