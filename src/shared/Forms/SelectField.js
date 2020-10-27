import {Field} from 'formik'
import React   from 'react'
import Div     from '../Basic/Div'

const SelectField = ({field, options, value}) =>
    <Div>
        <Div>{field.inputLabel}</Div>
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
    </Div>


export default SelectField