import React              from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import Div                from '../Basic/Div'
import {checkoutAddress}  from './styles'

const AutoCompleteAddress = ({address, handleAddress}) => {
    return (
        <PlacesAutocomplete
            value={address || ''}
            onChange={(handleAddress)}
            onSelect={handleAddress}
            placeholder="Type your delivery Address"
        >
            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                <>
                    <Div theme={checkoutAddress}>
                        <input
                            value={address}
                            {...getInputProps({
                                placeholder: 'Your Address ...',
                                className: 'location-search-input',
                            })}
                        />
                    </Div>
                    <Div>
                        {suggestions.map(suggestion =>
                            <Div
                                {...getSuggestionItemProps(suggestion)}
                                key={suggestion.placeId}
                                className={
                                    suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item'
                                }
                                theme={
                                    suggestion.active
                                        ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                        : {backgroundColor: '#ffffff', cursor: 'pointer'}
                                }
                                children={suggestion.description}
                            />
                        )}
                    </Div>
                </>
            )}
        </PlacesAutocomplete>
    )
}

export default AutoCompleteAddress