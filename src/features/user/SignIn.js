import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {history} from '../../redux/store'
import Div from '../../Basic/Div'
import Fieldset from '../../Basic/Fieldset'
import H3 from '../../Basic/H3'
import {genericButtonStyle} from '../../themes/elements'
import {signInFormStyle} from '../../themes/signup'
import {Redirect} from "react-router-dom";

const SignIn = () => {
    const dispatch = useDispatch()
    const {error, redirectToReferrer, isAuthenticated, isAdmin} = useSelector(state => state.user)
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const {email, password} = values
    const handleChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value
        })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        dispatch({
            type: 'user/signIn',
            payload: {email, password}
        })
    }

    useEffect(() => {
        if(redirectToReferrer)
            if(isAdmin) {
                history.push('/admin/dashboard')
            } else {
                history.push('/user/dashboard')
            }

        if(isAuthenticated)
            history.push('/')

    }, [redirectToReferrer, isAuthenticated, isAdmin])

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (isAdmin) {
                return <Redirect to="/admin/dashboard"/>
            } else {
                return <Redirect to="/user/dashboard"/>
            }
        }

        if (isAuthenticated) {
            return <Redirect to="/"/>
        }
    }


    return (
        <Div as="form" theme={signInFormStyle}>
            {/*{redirectUser()}*/}
            <H3 theme={signInFormStyle.heading}>Sign In</H3>
            {error && (
                <Div>
                    {error}
                </Div>
            )}
            <Fieldset theme={signInFormStyle.fieldset}>
                <legend/>
                <label>Email</label>
                <input
                    onChange={handleChange('email')}
                    type="email"
                    value={email}
                />
            </Fieldset>
            <Fieldset theme={signInFormStyle.fieldset}>
                <legend/>
                <label>Password</label>
                <input
                    onChange={handleChange('password')}
                    type="password"
                    value={password}
                />
            </Fieldset>
            <Div
                as="button"
                onClick={clickSubmit}
                theme={{...genericButtonStyle, ...signInFormStyle.button}}>
                Submit
            </Div>
        </Div>
    )
}

export default SignIn