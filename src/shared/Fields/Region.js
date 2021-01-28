import React              from 'react'
import {RegionDropdown}   from 'react-country-region-selector'
import Fieldset           from 'shared/Basic/Fieldset'
import {regionFieldStyle} from './styles'

const Region = ({formik, name}) =>
    <Fieldset theme={regionFieldStyle}>
        <RegionDropdown
            classes={'region-field'}
            country={formik.values['country']}
            value={formik.values[name]}
            onChange={(region) => formik.setFieldValue(name, region)}
        />
    </Fieldset>


export default Region
