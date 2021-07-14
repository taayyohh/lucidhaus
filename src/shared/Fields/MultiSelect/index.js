import {
    multiSelectInnerWrapperStyle,
    multiSelectOptionListWrapperStyle,
    multiSelectOptionStyle,
    multiSelectOptionWrapperStyle,
    multiSelectSearchFieldStyle,
    multiSelectWrapperStyle
}                                                               from 'features/user/admin/views/styles'
import React, {memo, useEffect, useState}                       from 'react'
import Div                                                      from 'shared/Basic/Div'
import Span                                                     from 'shared/Basic/Span'
import {defaultFieldHeadingStyle, selectFieldErrorMessageStyle} from 'shared/Fields/styles'
import SelectOption                                             from './SelectOption'

const MultiSelect = memo(({className, errorMessage, field, formik, options, theme, value}) => {
    const optionsArray = options?.filter(options => options.name === field.name)[0]?.options
    const [selected, setSelected] = useState([])
    const [filterInput, setFilteredInput] = useState('')
    const [filteredArray, setFilteredArray] = useState(optionsArray)

    useEffect(() => {
        setFilteredArray(optionsArray.reduce(function (accumulator = [], currentValue) {
            if (currentValue.name.toLowerCase().includes(filterInput.toLowerCase()))
                accumulator.push(currentValue)

            return accumulator
        }, []))

    }, [filterInput])

    useEffect(() => {
        setFilteredArray(optionsArray)

    }, [optionsArray])

    return (
        <Div theme={{...multiSelectWrapperStyle}} className={className ? className : ''}>
            <Div theme={{...defaultFieldHeadingStyle, ...theme.heading}}>{field.inputLabel}</Div>
            <Div theme={{...multiSelectInnerWrapperStyle}}>
                <Div
                    as='input'
                    onChange={(event) => setFilteredInput(event.target.value)}
                    theme={{...multiSelectSearchFieldStyle}}
                />
                <Div theme={{...multiSelectOptionListWrapperStyle, ...theme.multiSelect}}>
                    {filteredArray?.length > 0 && filteredArray?.map(o => (
                        <Div theme={{...multiSelectOptionWrapperStyle}}>
                            <SelectOption
                                field={field}
                                formik={formik}
                                key={o.name}
                                name={o.name}
                                optionId={o._id}
                                selected={selected}
                                setSelected={setSelected}
                                value={value}
                                theme={{...multiSelectOptionStyle, ...theme.option}}
                            />
                        </Div>
                    ))}
                </Div>
                <Span theme={selectFieldErrorMessageStyle}>{errorMessage}</Span>
            </Div>

        </Div>
    )
})


export default MultiSelect
