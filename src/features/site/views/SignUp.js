import {confirmationCodeFields, signUpFields, validateSignup} from 'features/site/admin/fields/signUp'
import {signUpFormStyle}                                      from 'features/user/views/styles'
import React                                                  from 'react'
import {useSelector}                                          from 'react-redux'
import Form                                                   from 'shared/Fields/Form'
import ContentWrapper                                         from 'shared/Layout/ContentWrapper'

const SignUp = () => {
    const signUpInitialValues = {
        nameFirst: '',
        tel: '',
        email: '',
        password: '',
        passwordConfirm: '',
        acceptTerms: false
    }
    const {confirmationRequest} = useSelector(state => state.user)
    const confirmationCodeInitialValues = {verificationCode: '', ...confirmationRequest}

    return (
        <ContentWrapper>
            {(confirmationRequest && (
                    <Form
                        initialValues={confirmationCodeInitialValues}
                        fields={confirmationCodeFields}
                        dispatchAction={'user/confirmUser'}
                        formHeading={'Verify Phone'}
                        buttonText={'Confirm'}
                        theme={signUpFormStyle}
                    />
            )) || (
                <Form
                    initialValues={signUpInitialValues}
                    fields={signUpFields}
                    validationSchema={validateSignup}
                    dispatchAction={'user/signUp'}
                    formHeading={'Join Us <3'}
                    buttonText={'Sign Up'}
                    theme={signUpFormStyle}
                />
            )}
        </ContentWrapper>
    )
}


export default SignUp
