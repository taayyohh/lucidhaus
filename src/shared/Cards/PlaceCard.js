import {mapMarkerSolid} from 'config/icons'
import React            from 'react'
import Div              from 'shared/Basic/Div'
import Icon             from 'shared/Basic/Icon'
import {placeCardStyle} from './styles'

const PlaceCard = ({name, address, city, state, theme}) => {
    return (
        <Div theme={{...placeCardStyle, ...theme}}>
            <Div theme={{...placeCardStyle.name, ...theme.name}}>{name}</Div>
            <Div theme={{...placeCardStyle.address, ...theme.address}}>{address}</Div>
            <Div theme={{...placeCardStyle.locationWrapper}}>
                <Icon
                    theme={{...placeCardStyle.locationIcon}}
                    icon={mapMarkerSolid}
                />
                <Div theme={{...placeCardStyle.locationTextWrapper}}>
                    <Div theme={{...placeCardStyle.city}}>{city}{!!state ? ', ' : ''}</Div>
                    <Div theme={{...placeCardStyle.state}}>{state}</Div>
                </Div>
            </Div>

        </Div>
    )
}

PlaceCard.defaultProps = {
    theme: {}
}

export default PlaceCard
