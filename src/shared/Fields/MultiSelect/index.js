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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterInput])

    useEffect(() => {
        setFilteredArray([...optionsArray].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))

    }, [optionsArray])

    useEffect(() => {
        console.log('fieldName', field?.name)
        console.log('selected', selected)

        formik.setFieldValue(field?.name, selected)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

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
                        <Div key={o.name} theme={{...multiSelectOptionWrapperStyle}}>
                            <SelectOption
                                field={field}
                                formik={formik}
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
