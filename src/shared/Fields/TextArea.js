import {Field}                                           from 'formik'
import React                                             from 'react'
import Div                                               from 'shared/Basic/Div'
import Span                                              from 'shared/Basic/Span'
import {textAreaErrorMessageStyle, textAreaWrapperStyle} from 'shared/Fields/styles'
import {defaultFieldHeadingStyle}                        from './styles'

const TextArea = ({field, formik, theme, className, errorMessage, value}) =>
    <Div theme={{...textAreaWrapperStyle, ...theme}} className={className ? className : ''}>
        {field?.inputLabel && (
            <Div theme={{...defaultFieldHeadingStyle, ...theme.heading}}>
                {field.inputLabel}
            </Div>
        )}
        <Field
            as="textarea"
            name={field?.name || ''}
            value={value || ''}
        />
        <Span theme={{...textAreaErrorMessageStyle, ...theme.errorMessage}}>
            {errorMessage}
        </Span>
    </Div>

export default TextArea
