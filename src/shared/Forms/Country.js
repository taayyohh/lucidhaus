import React               from 'react'
import {CountryDropdown}   from 'react-country-region-selector'
import Fieldset            from 'shared/Basic/Fieldset'
import {countryFieldStyle} from './styles'

const Country = ({formik, name}) =>
    <Fieldset theme={countryFieldStyle}>
        <CountryDropdown
            classes={'country-field'}
            value={formik.values[name]}
            onChange={(country) => formik.setFieldValue(name, country)}
            priorityOptions={['US']}
        />
    </Fieldset>

export default Country