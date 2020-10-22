import React             from 'react'
import SmartInput        from './SmartInput'
import {signInFormStyle} from '../../themes/signup'
import RichTextEditor    from './RichTextEditor'
import SmartFileInput    from './SmartFileInput'

const FieldSwitch = ({field, formik}) => {
    const getField = () => {
        switch (field.type) {
            case 'text':
            case 'password':
            case 'email':
            case 'number':
            case 'tel':
                return <SmartInput
                    {...formik.getFieldProps(field.name)}
                    id={field.name}
                    inputLabel={field.inputLabel}
                    type={field.type}
                    theme={signInFormStyle.fieldset}
                    className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                    errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
                />
            case 'richText':
                return <RichTextEditor
                    formik={formik}
                    name={field.name}
                    label={field.inputLabel}
                />
            case 'singleImageUpload':
                return <SmartFileInput
                    formik={formik}
                    id={field.name}
                    cropWidth={field.cropWidth}
                    cropHeight={field.cropHeight}
                    s3Path={field.s3Path}
                />
            default:
                return null
        }
    }

    return (
        <>{getField()}</>

    )
}

export default FieldSwitch