import {Formik}           from 'formik'
import React              from 'react'
import {useDispatch}      from 'react-redux'
import {genericFormStyle} from '../../themes/signup'
import Div                from '../Basic/Div'
import H3                 from '../Basic/H3'
import SubmitButton       from '../Basic/SubmitButton'
import FieldSwitch        from './FieldSwitch'

const GenericFormik = ({buttonText, dispatchAction, fields, formHeading, initialValues, validationSchema}) => {
    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => dispatch({type: dispatchAction, payload: values})}
        >
            {formik => (
                <Div
                    as="form"
                    theme={genericFormStyle}
                    onSubmit={formik.handleSubmit}
                >
                    <H3 theme={genericFormStyle.heading}>{formHeading}</H3>
                    {fields.map((f, i) =>
                        <FieldSwitch
                            key={i}
                            formik={formik}
                            field={f}
                        />
                    )}
                    <SubmitButton>
                        {buttonText}
                    </SubmitButton>
                </Div>
            )}
        </Formik>
    )
}

export default GenericFormik