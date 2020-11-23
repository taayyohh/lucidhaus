import React, {useEffect} from 'react'
import {useSelector}      from 'react-redux'
import {history}          from '../../redux/store'
import GenericFormik      from '../../shared/Forms/GenericFormik'
import ContentWrapper     from '../../shared/Layout/ContentWrapper'
import {signInFieldTypes} from '../../variables/fieldTypes'
import {validateSignin}   from '../../variables/fieldValidation'

const SignIn = () => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)

    useEffect(() => {
        if (isAuthenticated)
            history.push(`/${isAdmin ? 'admin' : 'user'}/dashboard`)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <GenericFormik
                buttonText={'Sign in'}
                dispatchAction={'user/signIn'}
                fields={signInFieldTypes}
                formHeading={'Sign In'}
                initialValues={{email: '', password: ''}}
                validationSchema={validateSignin}
            />
        </ContentWrapper>
    )
}

export default SignIn