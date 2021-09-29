import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor      from '@ckeditor/ckeditor5-react'
import React         from 'react'
import Div           from 'shared/Basic/Div'
import H3            from 'shared/Basic/H3'
import Span          from 'shared/Basic/Span'
import {
    defaultFieldHeadingStyle,
    richTextErrorMessageStyle,
    richTextStyle
}                    from './styles'

const RichTextEditor = ({name, formik, className, errorMessage, label}) => {
    return (
        <Div theme={richTextStyle} className={className ? className : ''}>
            <H3 theme={defaultFieldHeadingStyle}>{label}</H3>
            <CKEditor
                id={name}
                editor={ClassicEditor}
                data={formik.values[name] || null}
                onChange={(event, editor) => {
                    formik.setFieldValue(name, editor.getData())
                }}
            />
            <Span theme={richTextErrorMessageStyle}>{errorMessage}</Span>
        </Div>
    )
}

export default RichTextEditor
