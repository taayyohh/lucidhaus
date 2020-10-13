import {Formik}              from 'formik'
import React                 from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import {useDispatch}         from 'react-redux'
import Div                   from '../../Basic/Div'
import Form                  from '../../Basic/Form'
import H2                    from '../../Basic/H2'
import RichTextEditor        from '../../Forms/RichTextEditor'
import SmartFileInput        from '../../Forms/SmartFileInput'
import SmartInput            from '../../Forms/SmartInput'
import {genericButtonStyle}  from '../../themes/elements'
import {defaultNewFormStyle} from '../../themes/forms'
import {signInFormStyle}     from '../../themes/signup'
import {businessFieldTypes}  from '../../variables/fieldTypes'

const AddBusiness = () => {
    const dispatch = useDispatch()
    const s3Path = 'artist-profile'

    return (
        <Formik
            initialValues={{name: '', description: '', key: '', image: ''}}
            onSubmit={values => dispatch({
                type: 'admin/createBusiness',
                payload: {s3Path: s3Path, values: values}
            })}
        >
            {formik => (
                <Form onSubmit={formik.handleSubmit} theme={defaultNewFormStyle}>
                    <H2 theme={defaultNewFormStyle.heading}>Create Business</H2>
                    <Div theme={defaultNewFormStyle.inner}>

                        {/* TODO: integrate all form types into switch based on fieldTypes type property */}

                        <SmartFileInput
                            formik={formik}
                            id={'key'}
                            cropWidth={500}
                            cropHeight={500}
                        />

                        {businessFieldTypes.map(f =>
                            <SmartInput
                                {...formik.getFieldProps(f.name)}
                                id={f.name}
                                key={f.name}
                                inputLabel={f.inputLabel}
                                theme={signInFormStyle.fieldset}
                            />
                        )}


                        <RichTextEditor
                            formik={formik}
                            name={'description'}
                            label={'Business Description'}
                        />

                        <Div
                            as="button"
                            theme={{...genericButtonStyle}}
                        >
                            Create Business
                        </Div>
                    </Div>
                </Form>
            )}
        </Formik>
    )
}

export default AddBusiness