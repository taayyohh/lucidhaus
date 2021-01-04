import {Field}                        from 'formik'
import React                          from 'react'
import Div                            from 'shared/Basic/Div'
import Span                           from 'shared/Basic/Span'
import {selectFieldErrorMessageStyle} from 'shared/Forms/styles'
import {
    defaultFieldHeadingStyle,
    selectFieldStyle
}                                     from './styles'

const Select = ({field, options, className, errorMessage, value}) =>
    <Div theme={selectFieldStyle} className={className ? className : ''}>
        <Div theme={defaultFieldHeadingStyle}>{field.inputLabel}</Div>
        <Field
            as="select"
            name={field.name}
            value={value || ''}
        >
            <option/>
            {options?.filter(options => options.name === field.name)[0]?.options?.map(p =>
                <option key={p.name} value={p._id}>
                    {p.name}
                </option>
            )}
        </Field>
        <Span theme={selectFieldErrorMessageStyle}>{errorMessage}</Span>
    </Div>

export default Select