import {signUpFieldTypes} from 'config/fieldTypes/signUp'
import React              from 'react'
import GenericFormik      from 'shared/Forms/GenericFormik'
import ContentWrapper     from 'shared/Layout/ContentWrapper'
import {validateSignup}   from 'config/fieldValidation'

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
            />
        </ContentWrapper>
    )
}


export default SignUp