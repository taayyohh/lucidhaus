import {mapMarkerSolid} from 'config/icons'
import React            from 'react'
import Div              from 'shared/Basic/Div'
import Icon             from 'shared/Basic/Icon'
import {
    placeCardInclusiveScore,
    placeCardInclusiveScoreWrapperStyle,
    placeCardRatingScaleInnerStyle,
    placeCardRatingScaleStyle,
    placeCardRatingsIconWrapperStyle,
    placeCardRatingsItemStyle,
    placeCardRatingsWrapperStyle,
    placeCardStyle
}                       from './styles'

const PlaceCard = ({
                       address,
                       city,
                       name,
                       state,
                       safe,
                       celebrated,
                       welcome,
                       inclusiveScore,
                       theme
                   }) => {
    return (
        <Div theme={{...placeCardStyle, ...theme}}>

            <Div theme={{display: 'flex'}}>
                <Div theme={{...placeCardStyle.name, ...theme.name}}>{name}</Div>
            </Div>


            <Div theme={{...placeCardStyle.address, ...theme.address}}>{address}</Div>


            {inclusiveScore > 0 && (
                <Div theme={{marginTop: 20}}>
                    <Div theme={{...placeCardInclusiveScoreWrapperStyle}}>
                        <Div>Inclusive Score</Div>
                        <Div theme={{...placeCardInclusiveScore, ...theme.inclusiveScore}}>
                            {inclusiveScore}
                        </Div>
                    </Div>
                    <Div theme={placeCardRatingsWrapperStyle}>
                        <Div theme={placeCardRatingsItemStyle}>
                            <Div theme={placeCardRatingScaleStyle}>
                                <Div theme={placeCardRatingScaleInnerStyle(safe)}/>
                            </Div>
                            <Div theme={placeCardRatingsIconWrapperStyle}>
                                Safe
                            </Div>
                        </Div>
                        <Div theme={placeCardRatingsItemStyle}>
                            <Div theme={placeCardRatingScaleStyle}>
                                <Div theme={placeCardRatingScaleInnerStyle(welcome)}/>
                            </Div>
                            <Div theme={placeCardRatingsIconWrapperStyle}>
                                Welcome
                            </Div>
                        </Div>
                        <Div theme={placeCardRatingsItemStyle}>
                            <Div theme={placeCardRatingScaleStyle}>
                                <Div theme={placeCardRatingScaleInnerStyle(celebrated)}/>
                            </Div>
                            <Div theme={placeCardRatingsIconWrapperStyle}>
                                Celebrated
                            </Div>
                        </Div>
                    </Div>
                </Div>
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
