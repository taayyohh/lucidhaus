import {Formik}             from 'formik'
import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import Div                  from '../../Basic/Div'
import H3                   from '../../Basic/H3'
import SubmitButton         from '../../Basic/SubmitButton'
import SmartInput           from '../../Forms/SmartInput'
import {history}            from '../../redux/store'
import {genericButtonStyle} from '../../themes/elements'
import {
    signInFormStyle,
    signUpFormStyle
}                           from '../../themes/signup'
import {signInFieldTypes}   from '../../variables/fieldTypes'

const SignIn = () => {
    const dispatch = useDispatch()
    const {error, isAuthenticated} = useSelector(state => state.user)

    useEffect(() => {
        if (isAuthenticated)
            history.push('/')

    }, [])

    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }

    return (
        /// TODO: use Formik to validate and error check, remove that logic from express
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => dispatch({type: 'user/signIn', payload: values})}
        >
            {formik => (
                <Div as="form" theme={signInFormStyle} onSubmit={formik.handleSubmit}>
                    <H3 theme={signInFormStyle.heading}>Sign In</H3>
                    {signInFieldTypes.map(f =>
                        <SmartInput
                            {...formik.getFieldProps(f.name)}
                            id={f.name}
                            key={f.name}
                            inputLabel={f.inputLabel}
                            type={f.type}
                            theme={signInFormStyle.fieldset}
                        />
                    )}
                    <SubmitButton
                        theme={{...genericButtonStyle, ...signUpFormStyle.button}}
                        children={'Submit'}
                    />
                    {error && (
                        <Div>
                            {error}
                        </Div>
                    )}
                </Div>
            )}
        </Formik>
    )
}

export default SignIn