import {Formik}             from 'formik'
import React                from 'react'
import {
    useDispatch,
    useSelector
}                   from 'react-redux'
import Div          from '../../shared/Basic/Div'
import H3           from '../../shared/Basic/H3'
import SubmitButton from '../../shared/Basic/SubmitButton'
import SmartInput   from '../../Forms/SmartInput'
import {genericButtonStyle} from '../../themes/elements'
import {
    signInFormStyle,
    signUpFormStyle
}                           from '../../themes/signup'
import {userFieldTypes}     from '../../variables/fieldTypes'


const Profile = () => {
    const dispatch = useDispatch()
    const {name, token, _id} = useSelector(state => state.user)

    return (
        //TODO: implement password reset & email verification and password reset
        <Formik
            initialValues={{name: name}}
            onSubmit={values =>
                dispatch({
                    type: 'user/updateProfile',
                    payload: {
                        _id, token, updatedUser: {values}
                    }
                })}
        >
            {formik => (
                <Div as="form" theme={signInFormStyle} onSubmit={formik.handleSubmit}>
                    <H3 theme={signInFormStyle.heading}>Update Profile</H3>
                    {userFieldTypes.map(f =>
                        <SmartInput
                            {...formik.getFieldProps(f.name)}
                            id={f.name}
                            key={f.inputLabel}
                            inputLabel={f.inputLabel}
                            type={f.type}
                            theme={signInFormStyle.fieldset}
                        />
                    )}
                    <SubmitButton
                        theme={{...genericButtonStyle, ...signUpFormStyle.button}}
                        children={'Submit'}
                    />
                </Div>
            )}
        </Formik>
    )
}

export default Profile