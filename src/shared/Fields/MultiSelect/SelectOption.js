import React         from 'react'
import Div           from 'shared/Basic/Div'
import {optionStyle} from './styles'

const SelectOption = ({optionId, name, field, formik, theme}) =>
    <Div
        onClick={() => {
            (formik.values[field.name]?.indexOf(optionId) !== -1)
                ? formik.setFieldValue(field?.name, formik.values[field.name].filter(item => item !== optionId))
                : formik.setFieldValue(field?.name, ([...formik?.values[field.name], optionId]))
        }}
        theme={{
            ...theme,
            ...optionStyle(formik.values[field.name]?.indexOf(optionId) !== -1 && !!formik.values[field.name])
        }}
        children={name}
    />

export default SelectOption
