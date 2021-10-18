import {
    placesContentInnerWrapperStyle,
    placesContentWrapperStyle,
    placeSearchResultsQueryTextStyle, placeSidebarListingsStyle,
    placesMapSidebarStyle,
    placesMapStyle,
    placesSidebarHeadlineStyle
} from 'features/place/views/styles'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector}   from 'react-redux'
import Div                          from 'shared/Basic/Div'
import ContentWrapper               from 'shared/Layout/ContentWrapper'
import Map                          from 'shared/Map'
import {unslugify}                  from 'utils/helpers'
import NoResults                    from './NoResults'

const Places = () => {
    const {boonePlaces, algoliaPlaces, places, noResults} = useSelector(state => state.place)
    const {slug} = useSelector(state => state.site)
    const dispatch = useDispatch()
    const [allPlaces, setAllPlaces] = useState([])

    useEffect(() => {
        setAllPlaces(
            !boonePlaces?.data
                ? [...algoliaPlaces]
                : [...algoliaPlaces, ...boonePlaces?.data]
                    .reduce(function (accumulator = [], currentValue) {
                        if (!currentValue.isPendingSubmission)
                            if (currentValue.type === 'place') {
                                accumulator.push(currentValue)
                            } else if (accumulator.filter(place =>
                                !!place.booneId
                                && (place.booneId === currentValue?.id)).length === 0) {
                                accumulator.push(currentValue)
                            }

                        return accumulator
                    }, [])
        )

    }, [algoliaPlaces, boonePlaces])


    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'Places',
                description: 'The places description'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [places])


    const features = {
        "type": "FeatureCollection",
        "features": []
    }
    for (const place of allPlaces) {
        if (!!place._id) {
            features?.["features"].push({
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": place.geojson?.[0]?.geometry?.coordinates
                },
                "properties": {
                    "name": place.geojson[0]?.properties?.name,
                    "address": place.geojson[0]?.properties?.address,
                    "city": place.geojson[0]?.properties?.city,
                    "country": place.geojson[0]?.properties?.country,
                    "postalCode": place.geojson[0]?.properties?.postalCode,
                    "state": place.geojson[0]?.properties?.state,
                    "slug": place?.slug,
                    "_id": place._id
                }
            })
        } else {
            features?.["features"].push({
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [place?.locations?.[0]?.longitude, place?.locations?.[0]?.latitude]
                },
                "properties": {
                    "name": place?.name,
                    "address": place?.locations?.[0]?.address1,
                    "city": place?.locations?.[0]?.city,
                    "country": place?.locations?.[0]?.country,
                    "postalCode": place?.locations?.[0]?.postal_code,
                    "state": place?.locations?.[0]?.state,
                    "slug": place.id,
                    "_id": place.id
                }
            })
        }
    }


    return (
        <ContentWrapper theme={placesContentWrapperStyle}>
            <Div theme={placesContentInnerWrapperStyle}>
                <Div className='sidebar' theme={placesMapSidebarStyle}>
                    <Div>
                        <Div theme={placesSidebarHeadlineStyle}>Celebrating places that celebrate you</Div>
                        {(slug !== 'places' && (
                            <Div theme={placeSearchResultsQueryTextStyle}>
                                <em>Search results for</em>: {slug ? unslugify(slug) : ''}
                            </Div>
                        ))}
                    </Div>
                    <Div
                        id='listings'
                        className="listings"
                        theme={placeSidebarListingsStyle}
                    />
                </Div>
                {
                    !!features
                    && !!features?.features?.[0]?.geometry?.coordinates?.[0]
                    && !!features?.features?.[0]?.geometry?.coordinates?.[1]
                    && (
                        <Map
                            style={'mapbox://styles/mapbox/light-v10'}
                            features={features}
                            lon={features?.features?.[0]?.geometry?.coordinates?.[0]}
                            lat={features?.features?.[0]?.geometry?.coordinates?.[1]}
                            theme={placesMapStyle}
                            zoom={5}
                            scrollZoom={false}
                        />
                    )
                }
                {noResults.boone && noResults.algolia && (
                    <NoResults/>
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Places
