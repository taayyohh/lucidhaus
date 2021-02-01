import {
    signInFields,
    validateSignin
}                         from 'config/fields/signIn'
import {
    signInFormStyle,
    signInFormWrapperStyle
}                         from 'features/user/styles'
import React, {useEffect} from 'react'
import {useSelector}      from 'react-redux'
import {history}          from 'redux/store'
import Div                from 'shared/Basic/Div'
import Form               from 'shared/Fields/Form'
import ContentWrapper     from 'shared/Layout/ContentWrapper'

const SignIn = () => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)
    const initialValues = {email: '', password: ''}

    useEffect(() => {
        if (isAuthenticated)
            history.push(`/${isAdmin ? 'admin' : 'user'}/dashboard`)

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
                {/*{!isAuthenticated && (*/}
                {/*    <Div theme={signUpPromptStyle}>*/}
                {/*        {`Need to create an account? `}*/}
                {/*        <LinkSwitch url={'/signup'} children={'Sign Up'}/>*/}
                {/*    </Div>*/}
                {/*)}*/}
            </Div>
        </ContentWrapper>
    )
}

export default SignIn