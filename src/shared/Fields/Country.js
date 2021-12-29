import React               from 'react'
import {CountryDropdown}   from 'react-country-region-selector'
import {useDispatch}       from 'react-redux'
import Fieldset            from 'shared/Basic/Fieldset'
import {countryFieldStyle} from './styles'

const Country = ({formik, name, dispatchOnBlur}) => {
    const dispatch = useDispatch()

    return (
        <Fieldset theme={countryFieldStyle}>
            <CountryDropdown
                classes={'country-field'}
                value={formik.values[name]}
                onChange={(country) => {
                    formik.setFieldValue(name, country)

                    if(dispatchOnBlur) {
                        dispatch({type: 'shop/updateDeliveryAddress', payload: {country: country}})
                        formik.submitForm()

                    }

                }}
                priorityOptions={['US']}
            />
        </Fieldset>
    )
}


export default Country
