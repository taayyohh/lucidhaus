import {Formik}             from 'formik'
import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import Div                  from '../../Basic/Div'
import H3                   from '../../Basic/H3'
import SubmitButton         from '../../Basic/SubmitButton'
import FieldSwitch          from '../../Forms/FieldSwitch'
import {history}            from '../../redux/store'
import {genericButtonStyle} from '../../themes/elements'
import {postContentStyle}   from '../../themes/layout'
import {signUpFormStyle}    from '../../themes/signup'
import {signUpFieldTypes}   from '../../variables/fieldTypes'
import {validateSignup}     from '../../variables/fieldValidation'

const SignUp = () => {
    const dispatch = useDispatch()
    const {redirectToReferrer} = useSelector(state => state.user)

    useEffect(() => {
        if (redirectToReferrer)
            history.push('/signin')

    }, [redirectToReferrer])

    return (
        <Div theme={postContentStyle()}>
            <Formik
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={values => dispatch({type: 'user/signUp', payload: values})}
                validationSchema={validateSignup}
            >
                {formik => (
                    <Div as="form" theme={signUpFormStyle} onSubmit={formik.handleSubmit}>
                        <H3 theme={signUpFormStyle.heading}>Sign Up</H3>
                        {signUpFieldTypes.map((f, i) =>
                            <FieldSwitch
                                key={i}
                                formik={formik}
                                field={f}
                            />
                        )}
                        <SubmitButton
                            theme={{...genericButtonStyle, ...signUpFormStyle.button}}
                            children={'Submit'}
                        />
                    </Div>
                )}
            </Formik>
        </Div>
    )
}

export default SignUp