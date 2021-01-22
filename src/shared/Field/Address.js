import PropTypes                              from 'prop-types'
import React                                  from 'react'
import PlacesAutocomplete, {geocodeByAddress} from 'react-places-autocomplete'
import Div                                    from 'shared/Basic/Div'
import Fieldset                               from 'shared/Basic/Fieldset'
import Input                       from 'shared/Basic/Input'
import {AutoCompleteFieldSetStyle} from 'shared/Field/styles'
import {
    AutoCompleteInputStyle,
    AutoCompleteSuggestionStyle,
    AutoCompleteSuggestionWrapperStyle
}                                  from './styles'

const Address = ({formik, name}) =>
    <PlacesAutocomplete
        value={formik.values[name]}
        onChange={(address) => formik.setFieldValue(name, address)}
        onSelect={address => {
            geocodeByAddress(address)
                .then(results => populate(results))
                .catch(error => console.error(error))

            const populate = (results) => {
                let parts = results[0].address_components
                let streetNumber = parts.find(v => v.types.includes('street_number'))?.long_name
                let street = parts.find(v => v.types.includes('route'))?.long_name
                let city = parts.find(v => v.types.includes('locality'))?.long_name || parts.find(v => v.types.includes('sublocality_level_1'))?.long_name
                let state = parts.find(v => v.types.includes('administrative_area_level_1'))?.long_name
                let country = parts.find(v => v.types.includes('country'))?.long_name
                let postalCode = parts.find(v => v.types.includes('postal_code'))?.long_name
                let postalCodeSuffix = parts.find(v => v.types.includes('postal_code_suffix'))?.long_name

                const organized = [
                    {
                        field: name,
                        val: address
                    },
                    {
                        field: 'city',
                        val: city
                    },
                    {
                        field: 'state',
                        val: state
                    },
                    {
                        field: 'country',
                        val: country
                    },
                    {
                        field: 'zip',
                        val: !!postalCode && !!postalCodeSuffix
                            ? `${postalCode}-${postalCodeSuffix}`
                            : !!postalCode ? postalCode : ''
                    },
                    {
                        field: 'address',
                        val: !!streetNumber && !!street
                            ? `${streetNumber} ${street}`
                            : !!street ? street : ''
                    }
                ]


                const setFormAndDispatchAction = async () => {
                    await organized.map(v =>
                        !!v.val ? formik.setFieldValue(v.field, v.val) : null
                    )
                    await formik.submitForm()
                }

                setFormAndDispatchAction()
            }
        }}
        placeholder="Type your delivery Address"
    >
        {({getInputProps, suggestions, getSuggestionItemProps}) =>
            <Fieldset theme={AutoCompleteFieldSetStyle}>
                <Input
                    theme={AutoCompleteInputStyle}
                    value={formik.values[name]}
                    {...getInputProps({
                        placeholder: 'Search By Address or Business Name',
                    })}
                />
                <Div theme={AutoCompleteSuggestionWrapperStyle}>
                    {suggestions.map(suggestion =>
                        <Div
                            {...getSuggestionItemProps(suggestion)}
                            key={suggestion.placeId}
                            theme={AutoCompleteSuggestionStyle(suggestion.active)}
                        >
                            {suggestion.description}
                        </Div>
                    )}
                </Div>
            </Fieldset>
        }
    </PlacesAutocomplete>

Address.propTypes = {
    name: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired
}

export default Address