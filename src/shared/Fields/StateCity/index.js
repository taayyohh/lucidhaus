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
                formik={formik}
                setSelectedState={setSelectedState}
                setFilteredCityArray={setFilteredCityArray}
                className={className}
                name={name}
                value={value[name[0]]}
                theme={theme}
            />
            {filteredCityArray.length > 0 && (
                <CitySelect
                    formik={formik}
                    setFilteredCityInput={setFilteredCityInput}
                    setFilteredCityArray={setFilteredCityArray}
                    filteredCityArray={filteredCityArray}
                    selectedState={selectedState}
                    filterCityInput={filterCityInput}
                    name={name}
                    value={value[name[1]]}
                    theme={theme}
                    className={className}
                />
            )}
        </Div>
    )
})

export default StateCity
