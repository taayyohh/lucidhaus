import {colorPalette}                     from 'config/styles'
import React, {memo, useEffect, useState} from 'react'
import Div                                from 'shared/Basic/Div'
import Span                               from 'shared/Basic/Span'
import {optionStyle}                      from 'shared/Fields/MultiSelect/styles'
import {
    defaultFieldHeadingStyle,
    defaultHelperTextStyle,
    selectFieldErrorMessageStyle,
    selectFieldStyle
}                                         from 'shared/Fields/styles'
import {
    likertOptionStyle,
    likertOptionsWrapperStyle
}                                         from './styles'

const Likert = memo(({field, helperText, className, errorMessage, formik, value}) => {
    const optionsArray = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
    const [selected, setSelected] = useState('')

    useEffect(() => {
        formik.setFieldValue(field?.name, selected)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    useEffect(() => {
        if (!!value)
            setSelected(value)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={selectFieldStyle} className={className ? className : ''}>
            <Div theme={defaultFieldHeadingStyle}>{field.inputLabel}</Div>
            <Div theme={defaultHelperTextStyle}>{helperText}</Div>
            <Div theme={likertOptionsWrapperStyle}>
                {optionsArray?.length > 0 && optionsArray?.map(o => (
                    <Div
                        key={o}
                        onClick={() => setSelected(o)}
                        theme={{
                            ...optionStyle,
                            ...likertOptionStyle,
                            color: selected === o ? colorPalette.honeyYellow : colorPalette.black
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
