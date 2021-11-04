import {mapMarkerSolid} from 'config/icons'
import React            from 'react'
import Div              from 'shared/Basic/Div'
import Icon             from 'shared/Basic/Icon'
import LinkSwitch       from 'shared/Basic/LinkSwitch'
import InclusiveScore   from './InclusiveScore'
import {placeCardStyle} from './styles'

const PlaceCard = ({
                       address,
                       city,
                       name,
                       state,
                       safe,
                       celebrated,
                       welcome,
                       inclusiveScore,
                       url,
                       theme,
                   }) => {

    return (
        <Div theme={{...placeCardStyle, ...theme}}>
            <Div theme={{display: 'flex'}}>
                <LinkSwitch
                    url={url}
                    theme={{...placeCardStyle.name, ...theme.name}}
                >
                    {name}
                </LinkSwitch>
            </Div>

            <Div theme={{...placeCardStyle.address, ...theme.address}}>{address}</Div>

            {inclusiveScore > 0 && (
                <InclusiveScore
                    inclusiveScore={inclusiveScore}
                    safe={safe}
                    welcome={welcome}
                    celebrated={celebrated}
                    theme={theme}
                />
            )}
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
