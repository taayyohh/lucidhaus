import React                                                                  from 'react'
import Div                                                                    from 'shared/Basic/Div'
import Map                                                                    from 'shared/Map'
import {isEmpty}                                                              from 'utils/themer'
import {placeInnerRightInfoStyle, placeInnerRightWrapperStyle, placeMapStyle} from '../styles'
import Address                                                                from './Address'
import LeaveAReviewButton                                                     from './LeaveAReview'
import Tags                                                                   from './Tags'
import Website                                                                from './Website'

const PlaceSidebar = ({
                          boonePlace,
                          geojson,
                          hasNoReviews,
                          isAuthenticated,
                          isVerified,
                          placeCategory,
                          website,
                      }) => {

    return (
        <Div theme={placeInnerRightWrapperStyle}>
            <Div theme={placeInnerRightInfoStyle}>
                <Map
                    lon={geojson?.[0]?.geometry?.coordinates?.[0] || (!isEmpty(boonePlace) && boonePlace.locations[0].longitude)}
                    lat={geojson?.[0]?.geometry?.coordinates?.[1] || (!isEmpty(boonePlace) && boonePlace.locations[0].latitude)}
                    theme={placeMapStyle}
                />
                <Address
                    address1={geojson?.[0]?.properties?.address}
                    address2={geojson?.[0]?.properties?.address2}
                    boonePlace={boonePlace}
                    city={geojson?.[0]?.properties?.city}
                    state={geojson?.[0]?.properties?.state}
                    zip={geojson?.[0]?.properties?.postalCode}
                />
                <Website website={website}/>
                <Tags placeCategory={placeCategory}/>
                {((isAuthenticated && isVerified && hasNoReviews) && (
                    <LeaveAReviewButton/>
                )) || (
                    <>
                        {hasNoReviews && (
                            <LeaveAReviewButton isAuth={false}/>
                        )}
                    </>
                )}
            </Div>
        </Div>
    )
}

export default PlaceSidebar
