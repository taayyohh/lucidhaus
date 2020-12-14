import React              from 'react'
import {RegionDropdown}   from 'react-country-region-selector'
import Div                from 'shared/Basic/Div'
import {regionFieldStyle} from './styles'

const RegionField = ({formik, name}) => {

    return (
        <Div theme={regionFieldStyle}>
            <RegionDropdown
                classes={'region-field'}
                country={formik.values['country']}
                value={formik.values[name]}
                onChange={(region) => formik.setFieldValue(name, region)}
            />
        </Div>

    )
}

export default RegionField
