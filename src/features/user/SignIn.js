import {signInFieldTypes} from 'config/fields/signIn'
import {validateSignin}   from 'config/fields/validation'
import React, {useEffect} from 'react'
import {useSelector}      from 'react-redux'
import {history}          from 'redux/store'
import GenericFormik      from 'shared/Forms/GenericFormik'
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
            <GenericFormik
                initialValues={initialValues}
                fields={signInFieldTypes}
                validationSchema={validateSignin}
                dispatchAction={'user/signIn'}
                formHeading={'Sign In'}
                buttonText={'Sign in'}
            />
        </ContentWrapper>
    )
}

export default SignIn