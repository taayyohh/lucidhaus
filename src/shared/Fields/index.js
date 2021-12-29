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
    STATE_CITY,
    TEL,
    TEXT,
    TEXTAREA,
    TOGGLE,
<<<<<<< HEAD
    USER
}                     from 'config/variables'
import React, {memo}  from 'react'
import UploadAudio    from 'shared/Fields/UploadAudio'
import UploadImage    from 'shared/Fields/UploadImage'
import Tooltip        from '../Controls/ToolTip'
import Address        from './Address'
=======
    IMAGE_UPLOAD,
    AUDIO_UPLOAD,
    SONGS, DATE
} from 'config'
import React, {memo} from 'react'
import CreateSong  from 'features/admin/album/song/CreateSong'
import UploadAudio from 'shared/Fields/UploadAudio'
import Address     from './Address'
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb
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
<<<<<<< HEAD
        case ADDRESS:
            return <Address
                name={field.name}
                formik={formik}
            />
        case AUDIO_UPLOAD:
            return <UploadAudio
                formik={formik}
=======
        case TEXT:
        case PASSWORD:
        case EMAIL:
        case NUMBER:
        case TEL:
        case DATE:
            return <SmartInput
                {...formik.getFieldProps(field.name)}
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb
                id={field.name}
                file={field.file}
                cropWidth={field.cropWidth}
                cropHeight={field.cropHeight}
                s3Path={field.s3Path}
                inputLabel={field.inputLabel}
                className={formik.touched[field.name] && formik.errors[field.name] ? 'error' : ''}
                errorMessage={formik.touched[field.name] && formik.errors[field.name] ? formik.errors[field.name] : null}
<<<<<<< HEAD
=======
                autoSubmit={false}
                formik={formik}
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb
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
