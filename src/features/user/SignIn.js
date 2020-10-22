import {Formik}             from 'formik'
import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                   from 'react-redux'
import Div          from '../../shared/Basic/Div'
import H3          from '../../shared/Basic/H3'
import Button      from '../../shared/Basic/Button'
import FieldSwitch from '../../Forms/FieldSwitch'
import {history}            from '../../redux/store'
import {genericButtonStyle} from '../../themes/elements'
import {postContentStyle}   from '../../themes/layout'
import {
    signInFormStyle,
    signUpFormStyle
}                           from '../../themes/signup'
import {signInFieldTypes}   from '../../variables/fieldTypes'
import {validateSignin}     from '../../variables/fieldValidation'


const SignIn = () => {
    const dispatch = useDispatch()
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)

    useEffect(() => {
        if (isAuthenticated)
            history.push(`/${isAdmin ? 'admin' : 'user'}/dashboard`)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Div theme={postContentStyle()}>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={validateSignin}
                onSubmit={values => dispatch({type: 'user/signIn', payload: values})}
            >
                {formik => (
                    <Div as="form" theme={signInFormStyle} onSubmit={formik.handleSubmit}>
                        <H3 theme={signInFormStyle.heading}>Sign In</H3>
                        {signInFieldTypes.map((f, i) =>
                            <FieldSwitch
                                key={i}
                                formik={formik}
                                field={f}
                            />
                        )}
                        <Button
                            theme={{...genericButtonStyle, ...signUpFormStyle.button}}
                            children={'Submit'}
                        />
                    </Div>
                )}
            </Formik>
        </Div>
    )
}

export default SignIn