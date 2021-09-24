import {colorPalette} from 'config/styles'
import React, {memo}  from 'react'
import Div            from 'shared/Basic/Div'
import Span           from 'shared/Basic/Span'
import {
    defaultFieldHeadingStyle,
    defaultHelperTextStyle,
    selectFieldErrorMessageStyle,
    selectFieldStyle
}                     from 'shared/Fields/styles'
import {
    likertOptionStyle,
    likertOptionsWrapperStyle
}                     from './styles'

const Likert = memo(({field, helperText, className, errorMessage, formik, value}) => {
    const optionsArray = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']

    return (
        <Div theme={selectFieldStyle} className={className ? className : ''}>
            <Div theme={defaultFieldHeadingStyle}>{field.inputLabel}</Div>
            <Div theme={defaultHelperTextStyle}>{helperText}</Div>
            <Div theme={likertOptionsWrapperStyle}>
                {optionsArray?.length > 0 && optionsArray?.slice(0)?.reverse().map(o => (
                    <Div
                        key={o}
                        onClick={() => formik.setFieldValue(field?.name, o)}
                        theme={{
                            ...likertOptionStyle(value === o)
                        }}
                    >
                        {o}
                    </Div>
                ))}
            </Div>
            <Span theme={selectFieldErrorMessageStyle}>{errorMessage}</Span>
        </Div>
    )
})


export default Likert
