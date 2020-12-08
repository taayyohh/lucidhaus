import React               from 'react'
import {CountryDropdown}   from 'react-country-region-selector'
import Div                 from '../Basic/Div'
import {countryFieldStyle} from './styles'

const CountryField = ({formik, name}) => {
    return (
        <Div theme={countryFieldStyle}>
            <CountryDropdown
                classes={'country-field'}
                value={formik.values[name]}
                onChange={(country) => formik.setFieldValue(name, country)}
                priorityOptions={['US']}
            />
        </Div>

    )
}

export default CountryField