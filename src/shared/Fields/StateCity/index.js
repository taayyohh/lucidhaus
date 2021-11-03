import {MAPBOX_PUBLIC}                    from 'config/variables'
import React, {memo, useEffect, useState} from 'react'
import Div                                from 'shared/Basic/Div'
import zipcodes                           from 'zipcodes'
import CitySelect                         from './CitySelect'
import StateSelect                        from './StateSelect'

const mapboxGeo = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mapboxGeo({accessToken: MAPBOX_PUBLIC});

const StateCity = memo(({className, name, errorMessage, field, formik, options, theme, value}) => {
    const [filterCityInput, setFilteredCityInput] = useState('')
    const [filteredCityArray, setFilteredCityArray] = useState([])
    const [selectedState, setSelectedState] = useState('')

    useEffect(() => {
        if (value.address1?.length > 0
            && value.city?.length > 0
            && value.state?.length > 0
            && formik.values.isPendingSubmission) {
            geocodingClient.forwardGeocode({
                query: `${value.address1} ${value.city} ${value.state}`,
                mode: 'mapbox.places-permanent',
                limit: 2
            })
                .send()
                .then(response => {
                    const match = response.body;
                    const long = match.features[0].center[0]
                    const lat = match.features[0].center[1]
                    formik.setFieldValue('longitude', long)
                    formik.setFieldValue('latitude', lat)
                })

            formik.setFieldValue('zip', zipcodes.lookupByName(value.city, value.state)?.[0]?.zip)
        }

    }, [value.address1, value.city, value.state])

    return (
        <Div>
            <StateSelect
                className={className}
                formik={formik}
                name={name}
                theme={theme}
                value={value[name[0]]}
                setSelectedState={setSelectedState}
                selectedState={selectedState}
                setFilteredCityArray={setFilteredCityArray}
            />
            {formik.values[name[0]].length > 0 && (
                <CitySelect
                    className={className}
                    formik={formik}
                    name={name}
                    theme={theme}
                    value={value[name[1]]}
                    filteredCityArray={filteredCityArray}
                    filterCityInput={filterCityInput}
                    selectedState={selectedState}
                    setFilteredCityInput={setFilteredCityInput}
                    setFilteredCityArray={setFilteredCityArray}
                />
            )}
        </Div>
    )
})

export default StateCity
