import {Formik}           from 'formik'
import PropTypes          from 'prop-types'
import React              from 'react'
import {useDispatch}      from 'react-redux'
import Div                from 'shared/Basic/Div'
import H3                 from 'shared/Basic/H3'
import SubmitButton       from 'shared/Basic/SubmitButton'
import FieldSwitch        from 'shared/Fields'
import {defaultFormStyle} from './styles'

const Form = ({
                  autoSubmit = false,
                  hideButton = false,
                  dispatchOnBlur = false,
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
                    <Div theme={{...defaultFormStyle.inner, ...theme.inner}}>
                        {fields?.map((f, i) =>
                            <FieldSwitch
                                key={i}
                                formik={formik}
                                field={f}
                                options={options}
<<<<<<< HEAD
                                theme={theme}
                                autoSubmit={autoSubmit}
                                dispatchOnBlur={dispatchOnBlur}
=======
                              //  autoSubmit
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb
                            />
                        )}
                    </Div>
                    {!autoSubmit && !hideButton && (
                        <SubmitButton
                            theme={{...theme.button}}
                            children={buttonText || ''}
                        />
                    )}
                    {(Array.isArray(children) && (
                        <>
                            {!!children && children?.map((c, i) => (
                                <Div key={i} theme={{width: '100%'}}>
                                    {c?.type(formik)}
                                    {console.log('CHIL', children)}
                                </Div>
                            ))}
                        </>
                    )) || (
                        <>
                            {!!children && (
                                <Div>
                                    {children.type(formik)}
                                </Div>
                            )}
                        </>
                    )}
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
