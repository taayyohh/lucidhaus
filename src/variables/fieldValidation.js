import * as Yup from 'yup'

/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateSignin = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email')
        .required('*'),
    password: Yup
        .string()
        .required('*')
})

export const validateSignup = Yup.object().shape({
    name: Yup
        .string()
        .max(50)
        .required('*'),
    email: Yup
        .string()
        .email('Invalid email')
        .required('*'),
    password: Yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),
})