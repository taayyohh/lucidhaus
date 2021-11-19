import {mapMarkerSolid}                                                                        from 'config/icons'
import React                                                                                   from 'react'
import Div                                                                                     from 'shared/Basic/Div'
import Icon                                                                                    from 'shared/Basic/Icon'
import LinkSwitch
                                                                                               from 'shared/Basic/LinkSwitch'
import InclusiveScore                                                                          from './InclusiveScore'
import {placeCardInclusiveScoreInfoStyle, placeCardInclusiveScoreWrapperStyle, placeCardStyle} from './styles'

const PlaceCard = ({
                       address,
                       city,
                       name,
                       state,
                       safe,
                       celebrated,
                       welcome,
                       inclusiveScore,
                       linkCard,
                       url,
                       isPending = false,
                       hideScore,
                       theme,
                   }) => {

    return (
        <LinkSwitch url={!!linkCard ? url : ''} theme={{...placeCardStyle, ...theme}}>
            <Div theme={{display: 'flex'}}>
                <LinkSwitch
                    url={url}
                    theme={{...placeCardStyle.name, ...theme.name}}
                >
                    {name}
                </LinkSwitch>
            </Div>

            <Div theme={{...placeCardStyle.address, ...theme.address}}>{address}</Div>

            {!hideScore && (
                <>
                    {(inclusiveScore > 0 && (
                        <InclusiveScore
                            inclusiveScore={inclusiveScore}
                            safe={safe}
                            welcome={welcome}
                            celebrated={celebrated}
                            theme={theme}
                        />
                    )) || (
                        <Div>
                            <Div theme={{...placeCardInclusiveScoreInfoStyle}}>
                                <Div theme={{...placeCardInclusiveScoreWrapperStyle, alignItems: 'center'}}>
                                    <Div theme={{...placeCardInclusiveScoreWrapperStyle.noReview}}>Be the first to Leave
                                        a Review!</Div>
                                </Div>
                            </Div>
                        </Div>
                    )}

                </>
            )}

            <Div theme={{...placeCardStyle.locationWrapper, ...theme.locationWrapper}}>
                <Icon
                    theme={{...placeCardStyle.locationIcon}}
                    icon={mapMarkerSolid}
                />
                <Div theme={{...placeCardStyle.locationTextWrapper}}>
                    <Div theme={{...placeCardStyle.city}}>{city}{!!state ? ', ' : ''}</Div>
                    <Div theme={{...placeCardStyle.state}}>{state}</Div>
                </Div>
            </Div>
            {!!isPending[0] && (
                <>
                    {(isPending[1] && (
                        <Div theme={{...placeCardStyle.pendingReview, ...theme.pendingReview}}>Pending Review</Div>
                    )) || (
                        <Div theme={{...placeCardStyle.acceptedReview, ...theme.acceptedReview}}>Accepted</Div>
                    )}
                </>
            )}

        </LinkSwitch>
    )
}

PlaceCard.defaultProps = {
    theme: {}
}

export default PlaceCard
