import React             from 'react'
import SmartInput        from '../Forms/SmartInput'
import {signInFormStyle} from '../themes/signup'

const FieldSwitch = ({fieldType, formik}) => {

    const getField = () => {
        switch (fieldType.type) {
            case 'text':
            case 'password':
            case 'email':
                return <SmartInput
                    {...formik.getFieldProps(fieldType.name)}
                    id={fieldType.name}
                    key={fieldType.name}
                    inputLabel={fieldType.inputLabel}
                    type={fieldType.type}
                    theme={signInFormStyle.fieldset}
                    className={formik.touched[fieldType.name] && formik.errors[fieldType.name] ? 'error' : ''}
                    errorMessage={formik.touched[fieldType.name] && formik.errors[fieldType.name] ? formik.errors[fieldType.name] : null}
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