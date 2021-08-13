import {
    multiSelectHelperTextStyle,
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

const MultiSelect = memo(({className, name, errorMessage, field, formik, options, theme, value}) => {
    const optionsArray = options?.filter(options => options.name === field.name)[0]?.options
    const [filterInput, setFilteredInput] = useState('')
    const [filteredArray, setFilteredArray] = useState(optionsArray)

    useEffect(() => {
        setFilteredArray(optionsArray.reduce(function (accumulator = [], currentValue) {
            if (currentValue.name.toLowerCase().includes(filterInput.toLowerCase()))
                accumulator.push(currentValue)

            return accumulator
        }, []))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterInput])

    useEffect(() => {
        setFilteredArray([...optionsArray].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))

    }, [optionsArray])


    return (
        <Div theme={{...multiSelectWrapperStyle}} className={className ? className : ''}>
            <Div theme={{...defaultFieldHeadingStyle, ...theme.heading}}>{field.inputLabel}
                <Span theme={{...multiSelectHelperTextStyle}}>- Select all that apply</Span>
            </Div>
            <Div theme={{...multiSelectInnerWrapperStyle}}>
                <Div
                    as='input'
                    onChange={(event) => setFilteredInput(event.target.value)}
                    theme={{...multiSelectSearchFieldStyle}}
                />
                <Div theme={{...multiSelectOptionListWrapperStyle, ...theme.multiSelect}}>
                    {filteredArray?.length > 0 && filteredArray?.map(o => (
                        <Div key={o.name} theme={{...multiSelectOptionWrapperStyle}}>
                            <SelectOption
                                field={field}
                                formik={formik}
                                name={o.name}
                                optionId={o._id}
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
