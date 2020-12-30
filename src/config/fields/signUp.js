import * as Yup from 'yup'

export const signUpFieldTypes = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: 'text'
    },
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