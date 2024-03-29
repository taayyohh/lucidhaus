import {
    ADDRESS,
    AUDIO_UPLOAD,
    COUNT,
    COUNTRY,
    DATE,
    EMAIL,
    FILTER,
    IMAGE_UPLOAD,
    LIKERT,
    MULTI_SELECT,
    NUMBER,
    PASSWORD,
    REGION,
    RICH_TEXT,
    SELECT,
    SINGLE_SELECT,
    TEL,
    TEXT,
    TEXTAREA,
    TOGGLE,
    USER
}                     from 'config/variables'
import React, {memo}  from 'react'
import UploadAudio    from 'shared/Fields/UploadAudio'
import UploadImage    from 'shared/Fields/UploadImage'
import Tooltip        from '../Controls/ToolTip'
import Address        from './Address'
import Count          from './Count'
import Country        from './Country'
import Likert         from './Likert'
import MultiSelect    from './MultiSelect'
import Region         from './Region'
import RichTextEditor from './RichTextEditor'
import Select         from './Select'
import SingleSelect   from './SingleSelect'
import SmartInput     from './SmartInput'
import TextArea       from './TextArea'
import Toggle         from './Toggle'
import User           from './User'

const FieldSwitch = memo(({field, formik, options, theme, autoSubmit, dispatchOnBlur}) => {
    switch (field.type) {
        case ADDRESS:
            return <Address
                name={field.name}
                formik={formik}
            />
        case AUDIO_UPLOAD:
            return <UploadAudio
                formik={formik}
                id={field.name}
                file={field.file}
                cropWidth={field.cropWidth}
                cropHeight={field.cropHeight}
                s3Path={field.s3Path}
                inputLabel={field.inputLabel}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
            />
        case COUNT:
            return <Count
                name={field.name}
                formik={formik}
            />
        case COUNTRY:
            return <Country
                name={field.name}
                formik={formik}
                dispatchOnBlur={dispatchOnBlur}
            />
        case DATE:
        case EMAIL:
        case FILTER:
        case NUMBER:
        case PASSWORD:
        case TEL:
        case TEXT:
            return <SmartInput
                {...formik.getFieldProps(field.name)}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                disabled={field.disabled}
                hidden={field.hidden}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
                formik={formik}
                id={field.name}
                inputLabel={field.inputLabel}
                type={field.type}
                theme={theme}
                autoSubmit={autoSubmit}
                autoFocus={field.autoFocus}
            />
        case IMAGE_UPLOAD:
            return <UploadImage
                formik={formik}
                id={field.name}
                file={field.file}
                cropWidth={field.cropWidth}
                cropHeight={field.cropHeight}
                aspect={field.aspect}
                s3Path={field.s3Path}
                inputLabel={field.inputLabel}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
            />
        case LIKERT:
            return <Likert
                {...formik.getFieldProps(field.name)}
                formik={formik}
                field={field}
                options={options}
                helperText={field.helperText}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
                theme={theme}
            />
        case MULTI_SELECT:
            return <MultiSelect
                {...formik.getFieldProps(field.name)}
                name={field.name}
                formik={formik}
                field={field}
                options={options}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
                theme={theme}
            />
        case REGION:
            return <Region
                name={field.name}
                formik={formik}
            />
        case RICH_TEXT:
            return <RichTextEditor
                formik={formik}
                name={field.name}
                label={field.inputLabel}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
                tooltip={!!field.tooltip ? <Tooltip message={field.tooltip}/> : null}
            />
        case SINGLE_SELECT:
            return <SingleSelect
                {...formik.getFieldProps(field.name)}
                name={field.name}
                formik={formik}
                field={field}
                options={options}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
                theme={theme}
            />
        case SELECT:
            return <Select
                {...formik.getFieldProps(field.name)}
                field={field}
                options={options}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
            />
        case TEXTAREA:
            return <TextArea
                {...formik.getFieldProps(field.name)}
                formik={formik}
                field={field}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
                theme={theme}
            />
        case TOGGLE:
            return <Toggle
                name={field.name}
                formik={formik}
                inputLabel={field.inputLabel}
                inputLabelHelper={field.inputLabelHelper}
                errorMessage={formik.errors[field.name] ? formik.errors[field.name] : null}
            />
        case USER:
            return <User
                {...formik.getFieldProps(field.name)}
                name={field.name}
                formik={formik}
                inputLabel={field.inputLabel}
            />
        default:
            return null
    }
})

export default FieldSwitch
