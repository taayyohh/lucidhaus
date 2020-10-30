import React, {
    useEffect,
    useRef,
    useState
}                 from 'react'
import {
    defaultFieldErrorStyle,
    defaultFocusedInputLabelStyle
}                 from '../../themes/forms'
import useMeasure from '../../utils/useMeasure'
import {globals}  from '../../variables/styles'
import Fieldset   from '../Basic/Fieldset'
import Input      from '../Basic/Input'
import InputLabel from '../Basic/InputLabel'
import Legend     from '../Basic/Legend'
import Span       from '../Basic/Span'

const SmartInput = ({inputLabel, type, theme, id, className, errorMessage, onChange, value}) => {
    const legendRef = useRef()
    const inputLabelRef = useRef()
    const inputLabelWidth = useMeasure(inputLabelRef).width * globals.style.inputLabelShrinkRatio
    const [isInputLabelFocused, setIsInputLabelFocused] = useState(false)
    const [hasValue, setHasValue] = useState(false)
    const [legendWidth, setLegendWidth] = useState(0)

    useEffect(() => {
        const valueExists = Number.isInteger(value) || value?.length > 0
        setHasValue(valueExists)
        setIsInputLabelFocused(valueExists)
        setLegendWidth(value?.length < 1 ? 0 : inputLabelWidth)

    }, [setHasValue, setIsInputLabelFocused, inputLabelWidth, value])

    const handleBlur = () => {
        if (!hasValue) {
            setIsInputLabelFocused(false)
            setLegendWidth(0)
        }
    }

    const handleFocus = () => {
        setIsInputLabelFocused(true)
        setLegendWidth(inputLabelWidth)
    }

    return (
        <Fieldset theme={theme} className={className}>
            <Legend
                theme={{
                    ...theme.legend,
                    width: legendWidth + ((isInputLabelFocused || hasValue) ? 10 : 0)
                }}
                ref={legendRef}
            />
            <InputLabel
                theme={
                    isInputLabelFocused
                        ? {...defaultFocusedInputLabelStyle, ...theme.inputLabel}
                        : {...theme.inputLabel}
                }
                ref={inputLabelRef}
                children={inputLabel}
            />
            <Input
                id={id}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type={type || 'text'}
                value={value || ''}
                theme={theme.field}
            />
            <Span theme={defaultFieldErrorStyle}>{errorMessage}</Span>
        </Fieldset>
    )
}

export default SmartInput