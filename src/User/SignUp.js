import React, {useState}    from 'react'
import Div                  from '../Basic/Div'
import Fieldset             from '../Basic/Fieldset'
import H3                   from '../Basic/H3'
import StyledLink           from '../Basic/StyledLink'
import {genericButtonStyle} from '../themes/elements'
import {signUpFormStyle}    from '../themes/signup'
import {signup}             from '../api/apiAuth'
import {useDispatch, useSelector} from "react-redux";



const SignUp = () => {
    const dispatch = useDispatch()
    const {error, redirectToReferrer, isAuthenticated, isAdmin} = useSelector(state => state.user)
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        success: false
    })


    const {name, email, password, success,} = values

    const handleChange = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error: false})
        dispatch({
            type: 'user/signUp',
            payload: {
                name,
                email,
                password
            }
        })
        // signup({name, email, password})
        //     .then(data => {
        //         if (data.error) {
        //             setValues({...values, error: data.error, success: false})
        //         } else {
        //             setValues({
        //                 ...values,
        //                 name: '',
        //                 email: '',
        //                 password: '',
        //                 error: '',
        //                 success: true
        //             })
        //         }
        //     })
    }

    const signUpForm = () => (
        <Div as="form" theme={signUpFormStyle}>
            <H3 theme={signUpFormStyle.heading}>Sign Up</H3>
            <Fieldset theme={signUpFormStyle.fieldset}>
                <legend/>
                <label>Name</label>
                <input
                    onChange={handleChange('name')}
                    type="text"
                    value={name}
                />
            </Fieldset>

            <Fieldset theme={signUpFormStyle.fieldset}>
                <legend/>
                <label>Email</label>
                <input
                    onChange={handleChange('email')}
                    type="email"
                    value={email}
                />
            </Fieldset>

            <Fieldset theme={signUpFormStyle.fieldset}>
                <legend/>
                <label>Password</label>
                <input
                    onChange={handleChange('password')}
                    type="password"
                    value={password}
                />
            </Fieldset>
            <Div as="button"
                 onClick={clickSubmit}
                 theme={{...genericButtonStyle, ...signUpFormStyle.button}}>
                Submit
            </Div>
        </Div>
    )

    const showError = () => (
        <Div theme={error ? {...signUpFormStyle.error} : {}}>
            {error}
        </Div>
    )

    const showSuccess = () => (
        <Div theme={{display: success ? '' : 'none'}}>
            New account is created Please <StyledLink to="/signin">Sign In</StyledLink>
        </Div>
    )

    return (
        <>
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </>
    )
}


export default SignUp