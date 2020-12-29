import React, {memo}       from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import Count               from 'shared/Forms/Count'
import Country             from 'shared/Forms/Country'
import Region     from 'shared/Forms/Region'
import RichTextEditor from './RichTextEditor'
import Select         from 'shared/Forms/Select'
import Upload         from 'shared/Forms/Upload'
import SmartInput  from './SmartInput'
import {genericFormStyle} from './styles'
import Toggle             from 'shared/Forms/Toggle'

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
            return <Select
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
            return <Upload
                formik={formik}
                id={field.name}
                cropWidth={field.cropWidth}
                cropHeight={field.cropHeight}
                s3Path={field.s3Path}
            />
        case 'bool':
            return <Toggle
                name={field.name}
                formik={formik}
            />
        case 'country':
            return <Country
                name={field.name}
                formik={formik}
            />
        case 'region':
            return <Region
                name={field.name}
                formik={formik}
            />
        case 'autoAddress':
            return <AutoCompleteAddress
                name={field.name}
                formik={formik}
            />
        case 'count':
            return <Count
                name={field.name}
                formik={formik}
            />

        default:
            return null
    }

})

export default FieldSwitch