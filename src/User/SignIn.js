import React, {useState}    from 'react'
import {Redirect}           from 'react-router-dom'
import Div                  from '../Basic/Div'
import Fieldset             from '../Basic/Fieldset'
import H3                   from '../Basic/H3'
import {
    authenticate,
    isAuthenticated,
    signin
}                           from '../api/apiAuth'
import {genericButtonStyle} from '../themes/elements'
import {signInFormStyle}    from '../themes/signup'


const SignIn = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    })
    const {email, password, error, loading, redirectToReferrer} = values
    const {user} = isAuthenticated()

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }


    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error: false, loading: true})
        signin({email, password})
            .then(data => {
                if (data.error) {
                    setValues({...values, error: data.error, loading: false})
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectToReferrer: true
                        })
                    })
                }
            })
    }

    const signInForm = () => (
        <Div as="form" theme={signInFormStyle}>
            <H3 theme={signInFormStyle.heading}>Sign In</H3>
            <Fieldset theme={signInFormStyle.fieldset}>
                <legend />
                <label>Email</label>
                <input
                    onChange={handleChange('email')}
                    type="email"
                    value={email}
                />
            </Fieldset>

            <Fieldset theme={signInFormStyle.fieldset}>
                <legend />
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


    const showError = () => (
        <Div theme={{display: error ? '' : 'none'}}>
            {error}
        </Div>
    )

    const showLoading = () => (
        loading && (
            <Div>loading</Div>
        )
    )

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard"/>
            } else {
                return <Redirect to="/user/dashboard"/>
            }
        }

        if (isAuthenticated()) {
            return <Redirect to="/"/>
        }
    }

    return (
        <>
            {showLoading()}
            {showError()}
            {signInForm()}
            {redirectUser()}
        </>
    )
}


export default SignIn