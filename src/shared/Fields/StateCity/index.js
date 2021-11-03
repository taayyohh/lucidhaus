import React, {memo, useState} from 'react'
import Div                     from 'shared/Basic/Div'
import CitySelect              from './CitySelect'
import StateSelect             from './StateSelect'

const StateCity = memo(({className, name, errorMessage, field, formik, options, theme, value}) => {
    const [filterCityInput, setFilteredCityInput] = useState('')
    const [filteredCityArray, setFilteredCityArray] = useState([])
    const [selectedState, setSelectedState] = useState('')

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
