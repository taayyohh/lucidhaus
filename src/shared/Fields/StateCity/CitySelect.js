import {globals}                                                                           from 'config/styles'
import {City}                                                                              from 'country-state-city'
import React, {useEffect, useRef, useState}                                                from 'react'
import Div                                                                                 from 'shared/Basic/Div'
import Fieldset                                                                            from 'shared/Basic/Fieldset'
import Input                                                                               from 'shared/Basic/Input'
import InputLabel
                                                                                           from 'shared/Basic/InputLabel'
import Legend                                                                              from 'shared/Basic/Legend'
import useMeasure                                                                          from 'utils/useMeasure'
import {defaultFocusedInputLabelStyle}                                                     from '../styles'
import {stateCityFieldsetWrapperStyle, stateCityOptionStyle, stateCityOptionsWrapperStyle} from './styles'

const CitySelect = ({
                        filteredCityArray,
                        setFilteredCityInput,
                        setFilteredCityArray,
                        filterCityInput,
                        selectedState,
                        className,
                        name,
                        value,
                        theme,
                        formik
                    }) => {
    const inputRef = useRef()
    const legendRef = useRef()
    const inputLabelRef = useRef()
    const inputLabelWidth = useMeasure(inputLabelRef).width * globals.style.inputLabelShrinkRatio
    const [isInputLabelFocused, setIsInputLabelFocused] = useState(false)
    const [hasValue, setHasValue] = useState(false)
    const [legendWidth, setLegendWidth] = useState(0)


    useEffect(() => {
        if (!!filteredCityArray)
            setFilteredCityArray(City.getCitiesOfState('US', selectedState)?.reduce(function (accumulator = [], currentValue) {
                if (currentValue.name.toLowerCase().includes(filterCityInput.toLowerCase()))
                    accumulator.push(currentValue)

                return accumulator
            }, []))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterCityInput, selectedState])


    const handleCitySelect = (city) => {
        formik.setFieldValue(name[1], city)
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
        const valueExists = value?.length > 0

        setHasValue(valueExists)
        setIsInputLabelFocused(valueExists)
        setLegendWidth(value?.length < 1 ? 0 : inputLabelWidth)

    }, [setHasValue, setIsInputLabelFocused, inputLabelWidth, value])


    return (
        <Div>
            <Div theme={{display: 'flex'}}>
                <Div theme={{
                    width: '50%',
                    minWidth: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Div>
                        {value}
                    </Div>
                </Div>
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
                        children={'City - type to search. click to select.'}
                    />
                    <Input
                        // id={id}
                        onChange={(event) => setFilteredCityInput(event.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        type={'text'}
                        // value={value || ''}
                        theme={theme.field}
                        ref={inputRef}
                    />
                </Fieldset>
            </Div>
            <Div theme={stateCityOptionsWrapperStyle}>
                {filteredCityArray.map((city, i) => (
                    <Div
                        key={city.name}
                        onClick={() => handleCitySelect(city.name)}
                        theme={stateCityOptionStyle}
                    >
                        {city.name}
                    </Div>
                ))}
            </Div>
        </Div>
    )
}

export default CitySelect
