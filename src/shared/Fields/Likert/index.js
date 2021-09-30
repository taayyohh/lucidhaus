import React, {memo} from 'react'
import Div           from 'shared/Basic/Div'
import Span          from 'shared/Basic/Span'
import {
    defaultFieldHeadingStyle,
    defaultHelperTextStyle,
    selectFieldErrorMessageStyle,
    selectFieldStyle
}                    from 'shared/Fields/styles'
import {arrayEquals} from 'utils/helpers'
import {
    likertOptionStyle,
    likertOptionsWrapperStyle, likertStyle
} from './styles'

const Likert = memo(({field, helperText, className, errorMessage, formik, value}) => {
    //important structure -- backend dependent on array represented as ['text', Number]
    const optionsArray = [['Strongly Disagree', 1], ['Disagree', 2], ['Neutral', 3], ['Agree', 4], ['Strongly Agree', 5]]

    return (
        <Div theme={likertStyle} className={className ? className : ''}>
            <Div theme={defaultFieldHeadingStyle}>{field.inputLabel}</Div>
            <Div theme={defaultHelperTextStyle}>{helperText}</Div>
            <Div theme={likertOptionsWrapperStyle}>
                {optionsArray?.length > 0 && optionsArray?.slice(0)?.reverse().map(o => (
                    <Div
                        key={o}
                        onClick={() => formik.setFieldValue(field?.name, o)}
                        theme={{
                            ...likertOptionStyle(value?.length > 1 ? arrayEquals(value, o) : o?.[0] === value?.[0])
                        }}
                    >
                        {o[0]}
                    </Div>
                ))}
            </Div>
            <Span theme={selectFieldErrorMessageStyle}>{errorMessage}</Span>
        </Div>
    )
})


export default Likert
