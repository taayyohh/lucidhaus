import {globals}                            from 'config/styles'
import {City, State}                        from 'country-state-city'
import React, {useEffect, useRef, useState} from 'react'
import Div                                  from 'shared/Basic/Div'
import Fieldset                             from 'shared/Basic/Fieldset'
import Input                                from 'shared/Basic/Input'
import InputLabel                           from 'shared/Basic/InputLabel'
import Legend                               from 'shared/Basic/Legend'
import useMeasure                           from 'utils/useMeasure'
import {timesCircleSolid}                   from '../../../config/icons'
import Icon                                 from '../../Basic/Icon'
import {defaultFocusedInputLabelStyle}      from '../styles'
import {
    stateCityFieldsetWrapperStyle,
    stateCityOptionStyle,
    stateCityOptionsWrapperStyle,
    stateCitySelectedOptionStyle,
    stateCitySelectStyle,
    stateSelectionLabelStyle,
    stateSelectSelectionInnerWrapperStyle,
    stateSelectSelectionWrapperStyle
}                                           from './styles'

const StateSelect = ({
                         formik,
                         setSelectedState,
                         selectedState,
                         setFilteredCityArray,
                         className,
                         name,
                         value,
                         theme
                     }) => {
    const inputRef = useRef()
    const legendRef = useRef()
    const inputLabelRef = useRef()
    const inputLabelWidth = useMeasure(inputLabelRef).width * globals.style.inputLabelShrinkRatio
    const [isInputLabelFocused, setIsInputLabelFocused] = useState(false)
    const [hasValue, setHasValue] = useState(false)
    const [legendWidth, setLegendWidth] = useState(0)
    const [filterStateInput, setFilteredStateInput] = useState('')
    const [filteredStateArray, setFilteredStateArray] = useState(State.getStatesOfCountry('US'))

    const handleStateSelect = (iso, state) => {
        setFilteredCityArray(City.getCitiesOfState('US', iso))
        setSelectedState({iso, state})
        formik.setFieldValue(name[0], iso)
        formik.setFieldValue(name[1], '')
    }
    const handleFocus = () => {
        setIsInputLabelFocused(true)
        setLegendWidth(inputLabelWidth)
    }
    const handleBlur = () => {
        if (!hasValue) {
            setIsInputLabelFocused(false)
            setLegendWidth(0)
        }
    }

    useEffect(() => {
        if (!!State.getStatesOfCountry('US'))
            setFilteredStateArray(State.getStatesOfCountry('US')?.reduce(function (accumulator = [], currentValue) {
                if (currentValue.name.toLowerCase().includes(filterStateInput.toLowerCase()))
                    accumulator.push(currentValue)

                return accumulator
            }, []))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterStateInput])

    useEffect(() => {
        const valueExists = value?.length > 0

        setHasValue(valueExists)
        setIsInputLabelFocused(valueExists)
        setLegendWidth(value?.length < 1 ? 0 : inputLabelWidth)

    }, [setHasValue, setIsInputLabelFocused, inputLabelWidth, value])

    useEffect(() => {
        if (inputRef.current === document.activeElement) {
            setIsInputLabelFocused(true)
            setLegendWidth(inputLabelWidth)
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setSelectedState(formik.values.state)

    }, [formik.values.state, setSelectedState])

    return (
        <Div theme={stateCitySelectStyle}>
            <Div theme={stateSelectSelectionWrapperStyle}>
                <Fieldset theme={stateCityFieldsetWrapperStyle} className={className}>
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
                        children={'State - Type to Search. Click to Select.'}
                    />
                    <Input
                        onChange={(event) => setFilteredStateInput(event.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type={'text'}
                        theme={theme.field}
                        ref={inputRef}
                    />
                    {        console.log('value', formik.values)}
                </Fieldset>
                <Div theme={stateSelectSelectionInnerWrapperStyle}>
                    <Div theme={stateSelectionLabelStyle}>Selected</Div>
                    {selectedState?.state && (
                        <Div
                            theme={stateCitySelectedOptionStyle}
                            onClick={() => {
                                formik.setFieldValue(name[0], '')
                                setSelectedState('')
                            }}
                        >
                            {selectedState?.state}
                            <Icon
                                icon={timesCircleSolid}
                                theme={stateCitySelectedOptionStyle.icon}
                            />
                        </Div>
                    )}
                </Div>
            </Div>
            <Div theme={stateCityOptionsWrapperStyle}>
                {filteredStateArray && filteredStateArray.map((state, i) => (
                    <Div
                        key={state.isoCode}
                        onClick={() => handleStateSelect(state.isoCode, state.name)}
                        theme={stateCityOptionStyle}
                    >
                        {state.name}
                    </Div>
                ))}
            </Div>
        </Div>
    )
}

export default StateSelect
