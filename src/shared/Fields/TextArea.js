import {Field}                                           from 'formik'
import React                                             from 'react'
import Div                                               from 'shared/Basic/Div'
import Span                                              from 'shared/Basic/Span'
import {textAreaErrorMessageStyle, textAreaWrapperStyle} from 'shared/Fields/styles'

const TextArea = ({field, formik, theme, className, errorMessage, value}) =>
    <Div theme={{...textAreaWrapperStyle, ...theme.textAreaWrapper}}>
        <Field
            as="textarea"
            name={field?.name || ''}
            value={value || ''}
            placeHolder={field.inputLabel}
            className={className ? className : ''}
        />
        <Span theme={{...textAreaErrorMessageStyle, ...theme.errorMessage}}>
            {errorMessage}
        </Span>
    </Div>

TextArea.defaultProps = {
    theme: {}
}

export default TextArea
