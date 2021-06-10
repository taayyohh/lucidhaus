import React, {memo}                                                              from 'react'
import Div                                                                        from 'shared/Basic/Div'
import Span                                                                       from 'shared/Basic/Span'
import {defaultFieldHeadingStyle, selectFieldErrorMessageStyle, selectFieldStyle} from 'shared/Fields/styles'
import SelectOption                                                               from './SelectOption'

const MultiSelect = memo(({field, options, className, errorMessage, formik, value}) => {
    const optionsArray = options?.filter(options => options.name === field.name)[0]?.options
    const selected = []

    return (
        <Div theme={selectFieldStyle} className={className ? className : ''}>
            <Div theme={defaultFieldHeadingStyle}>{field.inputLabel}</Div>
            {optionsArray?.length > 0 && optionsArray?.map(o => (
                <>
                    <SelectOption
                        key={o.name}
                        optionId={o._id}
                        name={o.name}
                        selected={selected}
                        field={field}
                        formik={formik}
                        value={value}
                    />
                </>

            ))}
            <Span theme={selectFieldErrorMessageStyle}>{errorMessage}</Span>
        </Div>
    )
})


export default MultiSelect
