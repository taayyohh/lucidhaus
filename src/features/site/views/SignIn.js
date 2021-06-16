import {signInFields, validateSignin}                               from 'features/site/admin/fields/signIn'
import {signInFormStyle, signInFormWrapperStyle, signUpPromptStyle} from 'features/user/views/styles'
import React, {useEffect}                                           from 'react'
import {useSelector}                                                from 'react-redux'
import Div                                                          from 'shared/Basic/Div'
import LinkSwitch                                                   from "shared/Basic/LinkSwitch";
import Form                                                         from 'shared/Fields/Form'
import ContentWrapper                                               from 'shared/Layout/ContentWrapper'
import {history}                                                    from 'store'

const SignIn = () => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)
    const initialValues = {tel: '', password: ''}

    useEffect(() => {
        if (isAuthenticated)
            history.push(`/${isAdmin ? 'admin' : 'dashboard'}`)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <Div theme={signInFormWrapperStyle}>
                <Form
                    initialValues={initialValues}
                    fields={signInFields}
                    validationSchema={validateSignin}
                    dispatchAction={'user/signIn'}
                    formHeading={'Sign In'}
                    buttonText={'Sign in'}
                    theme={signInFormStyle}
                />
                {!isAuthenticated && (
                    <Div theme={signUpPromptStyle}>
                        {`Need to create an account? `}
                        <LinkSwitch url={'/signup'} children={'Sign Up'}/>
                    </Div>
                )}
            </Div>
        </ContentWrapper>
    )
}

export default SignIn
