import {Formik}           from 'formik'
import PropTypes          from 'prop-types'
import React, {useEffect} from 'react'
import {useDispatch}      from 'react-redux'
import Div                from 'shared/Basic/Div'
import H3                 from 'shared/Basic/H3'
import SubmitButton       from 'shared/Basic/SubmitButton'
import FieldSwitch        from 'shared/Fields'
import {defaultFormStyle} from './styles'

const Form = ({
                  autoSubmit = false,
                  hideButton = false,
                  buttonText,
                  children,
                  dispatchAction,
                  enableReinitialize,
                  fields,
                  formHeading,
                  initialValues,
                  options,
                  payload = {},
                  theme,
                  validationSchema
              }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('init', initialValues)

    }, [initialValues])

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => dispatch({
                type: dispatchAction,
                payload: {...values, ...payload}
            })}
            enableReinitialize={enableReinitialize}
        >
            {formik =>
                <Div
                    as="form"
                    theme={{...defaultFormStyle, ...theme}}
                    onSubmit={formik.handleSubmit}
                >
                    <H3
                        theme={{
                            ...defaultFormStyle.heading,
                            ...theme.heading
                        }}
                        children={formHeading}
                    />
                    {/*{console.log('form', formik.values)}*/}
                    <Div theme={{...defaultFormStyle.inner, ...theme.inner}}>
                        {fields.map((f, i) =>
                            <FieldSwitch
                                key={i}
                                formik={formik}
                                field={f}
                                options={options}
                                theme={theme}
                                autoSubmit={autoSubmit}
                            />
                        )}
                    </Div>
                    {!autoSubmit && !hideButton && (
                        <SubmitButton
                            theme={{...theme.button}}
                            children={buttonText}
                        />
                    )}
                    {children}
                </Div>
            }
        </Formik>
    )
}

Form.propTypes = {
    theme: PropTypes.object,
}

Form.defaultProps = {
    theme: {}
}

export default Form
