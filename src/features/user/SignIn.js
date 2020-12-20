import {signInFieldTypes}  from 'config/fields/signIn'
import {validateSignin}    from 'config/fields/validation'
import React, {useEffect}  from 'react'
import {useSelector}       from 'react-redux'
import {history}           from 'redux/store'
import Div                 from 'shared/Basic/Div'
import LinkSwitch          from 'shared/Basic/LinkSwitch'
import GenericFormik       from 'shared/Forms/GenericFormik'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import {signUpPromptStyle} from './styles'

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
            <Div theme={{maxWidth: 700, margin: '0 auto'}}>
                <GenericFormik
                    initialValues={initialValues}
                    fields={signInFieldTypes}
                    validationSchema={validateSignin}
                    dispatchAction={'user/signIn'}
                    formHeading={'Sign In'}
                    buttonText={'Sign in'}
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