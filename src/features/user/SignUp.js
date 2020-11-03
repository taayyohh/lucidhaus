import {Formik}             from 'formik'
import React                from 'react'
import {useDispatch}        from 'react-redux'
import Button               from '../../shared/Basic/Button'
import Div                  from '../../shared/Basic/Div'
import H3                   from '../../shared/Basic/H3'
import FieldSwitch          from '../../shared/Forms/FieldSwitch'
import {genericButtonStyle} from '../../themes/elements'
import {postContentStyle}   from '../../themes/layout'
import {signUpFormStyle}    from '../../themes/signup'
import {signUpFieldTypes}   from '../../variables/fieldTypes'
import {validateSignup}     from '../../variables/fieldValidation'

const SignUp = () => {
    const dispatch = useDispatch()

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
                        <Button
                            theme={{...genericButtonStyle, ...signUpFormStyle.button}}
                            type={'Submit'}
                            children={'Submit'}
                        />
                    </Div>
                )}
            </Formik>
        </Div>
    )
}

export default SignUp