import React, {
    useEffect,
    useState
} from 'react'
import {
    useDispatch,
    useSelector
}                        from 'react-redux'
import {
    authenticate,
    signin
}                        from '../../api/apiAuth'
import Div                  from '../../Basic/Div'
import Fieldset             from '../../Basic/Fieldset'
import H3                   from '../../Basic/H3'
import {genericButtonStyle} from '../../themes/elements'
import {signInFormStyle}    from '../../themes/signup'
import {userError}          from './userSlice'

const SignIn = () => {
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.user);
    const [values, setValues] = useState({
        email: '',
        password: '',
        loading: false,
        redirectToReferrer: false
    })
    const {email, password, loading, redirectToReferrer} = values
    const handleChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value
        })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({
            ...values,
            loading: true
        })
        dispatch({
            type: 'user/signIn',
            payload: {email, password}
        })
    }


    return (
        <Div as="form" theme={signInFormStyle}>
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