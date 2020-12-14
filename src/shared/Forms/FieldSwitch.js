import React, {memo}       from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import CountryField        from './CountryField'
import RegionField         from './RegionField'
import RichTextEditor      from './RichTextEditor'
import SelectField         from './SelectField'
import SmartFileInput      from './SmartFileInput'
import SmartInput          from './SmartInput'
import {genericFormStyle}  from './styles'
import ToggleField         from './ToggleField'

const FieldSwitch = memo(({field, formik, options}) => {
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
                disabled={field.disabled}
                theme={genericFormStyle.fieldset}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
            />
        case 'select':
            return <SelectField
                {...formik.getFieldProps(field.name)}
                field={field}
                options={options}
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
        case 'bool':
            return <ToggleField
                name={field.name}
                formik={formik}
            />
        case 'country':
            return <CountryField
                name={field.name}
                formik={formik}
            />
        case 'region':
            return <RegionField
                name={field.name}
                formik={formik}
            />
        case 'autoAddress':
            return <AutoCompleteAddress
                name={field.name}
                formik={formik}
            />

        default:
            return null
    }

})

export default FieldSwitch