import {signUpFields, validateSignup} from 'config/fields/signUp'
import {signUpFormStyle}              from 'features/user/styles'
import React                          from 'react'
import Form                           from 'shared/Fields/Form'
import ContentWrapper                 from 'shared/Layout/ContentWrapper'

const SignUp = () => {
    const initialValues = {name: '', tel: '', password: ''}
    return (
        <ContentWrapper>
            <Form
                initialValues={initialValues}
                fields={signUpFields}
                validationSchema={validateSignup}
                dispatchAction={'user/signUp'}
                formHeading={'Sign Up'}
                buttonText={'Sign Up'}
                theme={signUpFormStyle}
            />
        </ContentWrapper>
    )
}


export default SignUp
