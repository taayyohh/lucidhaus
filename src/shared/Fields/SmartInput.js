import {TEL}     from 'config/variables'
import {globals} from 'config/styles'
import PropTypes                                               from 'prop-types'
import React, {useEffect, useRef, useState}                    from 'react'
import Fieldset                                                from 'shared/Basic/Fieldset'
import Input                                                   from 'shared/Basic/Input'
import InputLabel                                              from 'shared/Basic/InputLabel'
import Legend                                                  from 'shared/Basic/Legend'
import Span                                                    from 'shared/Basic/Span'
import {formatPhone}                                           from 'utils/helpers'
import useMeasure                                              from 'utils/useMeasure'
import {defaultFieldErrorStyle, defaultFocusedInputLabelStyle} from './styles'

const SmartInput = ({
                        autoSubmit = false,
                        className,
                        disabled,
                        errorMessage,
                        formik,
                        id,
                        inputLabel,
                        onChange,
                        theme,
                        type,
                        value
                    }) => {
    const legendRef = useRef()
    const inputLabelRef = useRef()
    const inputLabelWidth = useMeasure(inputLabelRef).width * globals.style.inputLabelShrinkRatio
    const [isInputLabelFocused, setIsInputLabelFocused] = useState(false)
    const [hasValue, setHasValue] = useState(false)
    const [legendWidth, setLegendWidth] = useState(0)
    const [tel, setTel] = useState(undefined)

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

        if (autoSubmit) {
            formik.submitForm()
        }
    }
    const handleFocus = () => {
        setIsInputLabelFocused(true)
        setLegendWidth(inputLabelWidth)
    }
    const handleKeyUp = () => {
        switch (type) {
            case TEL:
                return setTel(formatPhone(value))
            default:
                return null
        }
    }

    useEffect(() => {
        if(type === TEL) {
            setTel(formatPhone(value))
        }


    }, [value, type])

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
                        ? {...defaultFocusedInputLabelStyle, ...theme.inputLabelFocused}
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
                onKeyUp={handleKeyUp}
                type={type || 'text'}
                value={tel || value || ''}
                theme={theme.field}
                disabled={disabled}
            />
            <Span theme={defaultFieldErrorStyle}>{errorMessage}</Span>
        </Fieldset>
    )
}

SmartInput.propTypes = {
    theme: PropTypes.object,
}

SmartInput.defaultProps = {
    theme: {}
}

export default SmartInput
