import {TEXT}   from 'config/variables'
import * as Yup from 'yup'

export const updateEmailFields = [
    {
        name: 'email',
        inputLabel: 'Enter Your New Email Address',
        type: TEXT,
    }
]


export const validateUpdateEmail = Yup.object().shape({
    email: Yup.string()
        .email('invalid email')
        .required('*'),
})

