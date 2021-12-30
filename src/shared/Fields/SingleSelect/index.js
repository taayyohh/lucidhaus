import {timesCircleSolid}           from 'config/icons'
import {
    multiSelectHelperTextStyle,
    multiSelectInnerWrapperStyle,
    multiSelectOptionListWrapperStyle,
    multiSelectOptionSelectedWrapperStyle,
    multiSelectOptionStyle,
    multiSelectOptionWrapperStyle,
    multiSelectSearchFieldStyle
}                                   from 'features/user/admin/views/styles'
import React, {useEffect, useState} from 'react'
import Div                          from 'shared/Basic/Div'
import Icon                         from 'shared/Basic/Icon'
import Span                         from 'shared/Basic/Span'
import SelectOption                 from 'shared/Fields/SingleSelect/SelectOption'
import {defaultFieldHeadingStyle}   from '../styles'

const SingleSelect = ({className, name, errorMessage, field, formik, options, theme, value}) => {
    const optionsArray = options?.filter(options => options.name === field.name)[0]?.options
    const [filterInput, setFilteredInput] = useState('')
    const [filteredArray, setFilteredArray] = useState(optionsArray)

    useEffect(() => {
        if (!!optionsArray)
            setFilteredArray(optionsArray?.reduce(function (accumulator = [], currentValue) {
                if (currentValue.name.toLowerCase().includes(filterInput.toLowerCase()))
                    accumulator.push(currentValue)

                return accumulator
            }, []))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterInput])

    useEffect(() => {
        if (!!optionsArray)
            setFilteredArray([...optionsArray].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))

    }, [optionsArray])


    return (
        <Div>
            <Div theme={{...defaultFieldHeadingStyle, ...theme.heading}}>
                {field.inputLabel}
                <Span theme={{...multiSelectHelperTextStyle}}>- Select one</Span>
            </Div>
            <Div theme={{...multiSelectInnerWrapperStyle}}>
                <Div
                    as='input'
                    onChange={(event) => setFilteredInput(event.target.value)}
                    theme={{...multiSelectSearchFieldStyle}}
                />
                <Div theme={{...multiSelectOptionSelectedWrapperStyle}}>
                    <Div theme={{...multiSelectOptionSelectedWrapperStyle.heading}}>Selected</Div>
                    <Div theme={{display: 'flex', flexWrap: 'wrap'}}>
                        {!!value && Array.isArray(value) ? value : [value]?.map((v) => {
                                const thisOptions = options.filter(item => item.name === field.name)?.[0].options
                                return (
                                    <Div
                                        key={v}
                                        theme={{...multiSelectOptionSelectedWrapperStyle.option}}
                                        onClick={() => {
                                            formik.setFieldValue(name, formik?.values[name]?.filter(item => item !== v))
                                        }}
                                    >
                                        {thisOptions?.filter(item => item._id === v)?.[0]?.name}
                                        <Icon
                                            icon={timesCircleSolid}
                                            theme={{...multiSelectOptionSelectedWrapperStyle.optionIcon}}
                                        />
                                    </Div>
                                )
                            }
                        )}
                    </Div>
                </Div>
                <Div theme={{...multiSelectOptionListWrapperStyle, ...theme.multiSelect}}>
                    {filteredArray?.length > 0 && filteredArray?.map(o => (
                        <Div key={o._id} theme={{...multiSelectOptionWrapperStyle}}>
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
            </Div>

        </Div>
    )
}

export default SingleSelect
