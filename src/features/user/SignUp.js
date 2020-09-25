import React, {useEffect, useState} from 'react'
import {history} from '../../redux/store'
import Div from '../../Basic/Div'
import H3 from '../../Basic/H3'
import {genericButtonStyle} from '../../themes/elements'
import {signUpFormStyle} from '../../themes/signup'
import {useDispatch, useSelector} from "react-redux";
import SmartInput from "../../Forms/SmartInput";
import SubmitButton from "../../Basic/SubmitButton";


const SignUp = () => {
    const dispatch = useDispatch()
    const {error, redirectToReferrer} = useSelector(state => state.user)
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })
    const {name, email, password} = values
    const fieldTypes = [
        {
            inputLabel: 'Name',
            onChange: 'name',
            value: name
        },
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
            type: 'user/signUp',
            payload: {
                name,
                email,
                password
            }
        })
    }

    useEffect(() => {
        if (redirectToReferrer)
            history.push('/signin')

    }, [redirectToReferrer])


    return (
        <Div as="form" theme={signUpFormStyle}>
            <H3 theme={signUpFormStyle.heading}>Sign Up</H3>
            {fieldTypes.map(f =>
                <SmartInput
                    key={f.inputLabel}
                    inputLabel={f.inputLabel}
                    onChange={handleChange(f.onChange)}
                    value={f.value}
                    theme={signUpFormStyle.fieldset}
                    type={f.type}
                />
            )}
            <SubmitButton
                onClick={clickSubmit}
                theme={{...genericButtonStyle, ...signUpFormStyle.button}}
                children={'Submit'}
            />
            {error && (
                <Div theme={signUpFormStyle.error}>
                    {error}
                </Div>
            )}
        </Div>
    )
}

export default SignUp