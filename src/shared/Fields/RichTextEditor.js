import ClassicEditor                                                        from '@ckeditor/ckeditor5-build-classic'
import CKEditor                                                             from '@ckeditor/ckeditor5-react'
import React                                                                from 'react'
import Div                                                                  from 'shared/Basic/Div'
import H3                                                                   from 'shared/Basic/H3'
import Span                                                                 from 'shared/Basic/Span'
import Tooltip                                                              from '../Controls/ToolTip'
import {defaultFieldHeadingStyle, richTextErrorMessageStyle, richTextStyle} from './styles'

const RichTextEditor = ({name, formik, className, errorMessage, tooltip, label}) => {
    const config = {
        toolbar: ['bold', 'italic']
    }

    return (
        <Div theme={richTextStyle} className={className ? className : ''}>
            <H3 theme={defaultFieldHeadingStyle}>
                {label}
                {!!tooltip && (
                    <Tooltip message={'Write a Description.'}/>
                )}
            </H3>
            <CKEditor
                id={name}
                editor={ClassicEditor}
                config={config}
                data={formik.values[name] || ''}
                onChange={(event, editor) => {

                }}
                onBlur={(event, editor) => {
                    formik.setFieldValue(name, editor.getData())
                }}
            />
            <Span theme={richTextErrorMessageStyle}>{errorMessage}</Span>
        </Div>
    )
}

export default RichTextEditor
