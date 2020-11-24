import {Formik}           from 'formik'
import PropTypes          from 'prop-types'
import React              from 'react'
import {useDispatch}      from 'react-redux'
import Div                from '../Basic/Div'
import H3                 from '../Basic/H3'
import SubmitButton       from '../Basic/SubmitButton'
import FieldSwitch        from './FieldSwitch'
import {genericFormStyle} from './styles'

const GenericFormik = ({initialValues, fields, options, validationSchema, dispatchAction, formHeading, buttonText, enableReinitialize, theme}) => {
    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => dispatch({type: dispatchAction, payload: values})}
            enableReinitialize={enableReinitialize}
        >
            {formik => (
                <Div
                    as="form"
                    theme={{...genericFormStyle, ...theme}}
                    onSubmit={formik.handleSubmit}
                >
                    <H3 theme={{...genericFormStyle.heading, ...theme.heading}}>{formHeading}</H3>
                    {fields.map((f, i) =>
                        <FieldSwitch
                            key={i}
                            formik={formik}
                            field={f}
                            options={options}
                        />
                    )}
                    <SubmitButton theme={{...theme.button}}>
                        {buttonText}
                    </SubmitButton>
                </Div>
            )}
        </Formik>
    )
}

GenericFormik.propTypes = {
    theme: PropTypes.object,
}

GenericFormik.defaultProps = {
    theme: {}
}

export default GenericFormik