import {Formik}              from 'formik'
import React, {useState}     from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import {getSignedRequest}    from '../../api/apiAdmin'
import Div                   from '../../Basic/Div'
import Form                  from '../../Basic/Form'
import H2                    from '../../Basic/H2'
import RichTextEditor        from '../../Forms/RichTextEditor'
import SmartFileInput        from '../../Forms/SmartFileInput'
import SmartInput            from '../../Forms/SmartInput'
import {genericButtonStyle}  from '../../themes/elements'
import {defaultNewFormStyle} from '../../themes/forms'
import {signInFormStyle}     from '../../themes/signup'

import {businessFieldTypes} from '../../variables/fieldTypes'

const AddBusiness = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const s3UploadDirectory = 'business-profile'


    const clickSubmit = event => {
        event.preventDefault()

        // SUBMIT TO S3 AND GET URL
     //   getSignedRequest(_id, token, croppedImage, s3UploadDirectory)

        //  dispatch({type: 'admin/createBusiness', payload: {formData: formData, user: {_id, token}}})
        // createBusiness(_id, token, formData)
    }


    return (
        <Formik
            initialValues={{name: '', description: '', photo: ''}}
            onSubmit={values => dispatch({
                type: 'admin/createBusiness',
                payload: {_id: _id, token: token, values: values}
            })}
        >
            {formik => (
                <Form onSubmit={formik.handleSubmit} theme={defaultNewFormStyle}>
                    <H2 theme={defaultNewFormStyle.heading}>Create Business</H2>
                    <Div theme={defaultNewFormStyle.inner}>

                        {/* TODO: integrate all form types into switch based on fieldTypes type property */}
                        <SmartFileInput
                            formik={formik}
                            name={'photo'}
                            id={'photo'}
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
                            name={'description'}
                            formik={formik}
                            label={'Business Description'}
                        />

                        <Div
                            as="button"
                            theme={{...genericButtonStyle, ...defaultNewFormStyle.button}}
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