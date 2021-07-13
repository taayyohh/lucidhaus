import {multiSelectOptionWrapperStyle}                                            from 'features/user/admin/views/styles'
import React, {memo, useState}                                                    from 'react'
import Div                                                                        from 'shared/Basic/Div'
import Span                                                                       from 'shared/Basic/Span'
import {defaultFieldHeadingStyle, selectFieldErrorMessageStyle, selectFieldStyle} from 'shared/Fields/styles'
import SelectOption                                                               from './SelectOption'

const MultiSelect = memo(({className, errorMessage, field, formik, options, theme, value}) => {
    const optionsArray = options?.filter(options => options.name === field.name)[0]?.options
    const [selected, setSelected] = useState([])

    return (
        <Div theme={{...selectFieldStyle}} className={className ? className : ''}>
            <Div theme={{...defaultFieldHeadingStyle, ...theme.heading}}>{field.inputLabel}</Div>
            <Div theme={{...multiSelectOptionWrapperStyle, ...theme.multiSelect}}>
                {optionsArray?.length > 0 && optionsArray?.map(o => (
                    <SelectOption
                        field={field}
                        formik={formik}
                        key={o.name}
                        name={o.name}
                        optionId={o._id}
                        selected={selected}
                        setSelected={setSelected}
                        value={value}
                        theme={{...multiSelectOptionWrapperStyle.option, ...theme.option}}
                    />
                ))}
            </Div>
            <Span theme={selectFieldErrorMessageStyle}>{errorMessage}</Span>
        </Div>
    )
})


export default MultiSelect
