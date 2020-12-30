import {
    signUpFieldTypes,
    validateSignup
}                       from 'config/fields/signUp'
import {signUpFormStyle}  from 'features/user/styles'
import React              from 'react'
import GenericFormik      from 'shared/Forms/GenericFormik'
import ContentWrapper     from 'shared/Layout/ContentWrapper'

const SignUp = () => {
    const initialValues = {name: '', email: '', password: ''}
    return (
        <ContentWrapper>
            <GenericFormik
                initialValues={initialValues}
                fields={signUpFieldTypes}
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