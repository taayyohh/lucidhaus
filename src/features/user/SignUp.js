import React              from 'react'
import GenericFormik      from '../../shared/Forms/GenericFormik'
import ContentWrapper     from '../../shared/Layout/ContentWrapper'
import {signUpFieldTypes} from '../../variables/fieldTypes'
import {validateSignup}   from '../../variables/fieldValidation'

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