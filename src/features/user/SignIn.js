import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {history} from '../../redux/store'
import Div from '../../Basic/Div'
import Fieldset from '../../Basic/Fieldset'
import H3 from '../../Basic/H3'
import {genericButtonStyle} from '../../themes/elements'
import {signInFormStyle, signUpFormStyle} from '../../themes/signup'
import {Redirect} from "react-router-dom";
import SmartInput from "../../Forms/SmartInput";
import SubmitButton from "../../Basic/SubmitButton";

const SignIn = () => {
    const dispatch = useDispatch()
    const {error, redirectToReferrer, isAuthenticated, isAdmin} = useSelector(state => state.user)
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const {email, password} = values
    const fieldTypes = [
        {
            inputLabel: 'Email',
            onChange: 'email',
            value: email
        },
        {
            inputLabel: 'Password',
            onChange: 'password',
            value: password,
            type: 'password'
        }
    ]

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


    return (
        <Div as="form" theme={signInFormStyle}>
            <H3 theme={signInFormStyle.heading}>Sign In</H3>
            {fieldTypes.map(f =>
                <SmartInput
                    key={f.inputLabel}
                    inputLabel={f.inputLabel}
                    onChange={handleChange(f.onChange)}
                    value={f.value}
                    theme={signInFormStyle.fieldset}
                    type={f.type}
                />
            )}
            <SubmitButton
                onClick={clickSubmit}
                theme={{...genericButtonStyle, ...signUpFormStyle.button}}
                children={'Submit'}
            />
            {error && (
                <Div>
                    {error}
                </Div>
            )}
        </Div>
    )
}

export default SignIn