import {
    placesContentWrapperStyle,
    placeSearchResultsQueryTextStyle,
    placesMapSidebarStyle,
    placesMapStyle
}                                   from 'features/place/views/styles'
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
            features?.["features"].push(place.geojson[0])
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
                    "_id": place.id
                }
            })
        }
    }



    return (
        <ContentWrapper theme={placesContentWrapperStyle}>
            <Div>
                {/*<Div>*/}
                {/*    <Div theme={placeDetailStyle}>*/}
                {/*        By reviewing businesses, you help other members of your*/}
                {/*        community know where you felt safe, welcomed, and celebrated!*/}
                {/*        It’s a win/win way to celebrate the businesses that celebrate*/}
                {/*        you as well as to provide local resources to your friends and neighbors.*/}
                {/*    </Div>*/}
                {/*</Div>*/}

                <Div className='sidebar' theme={placesMapSidebarStyle}>
                    <Div>
                        <h1>Our locations</h1>
                        {(slug !== 'places' && (
                            <Div theme={placeSearchResultsQueryTextStyle}>
                                <em>Search results for</em>: {slug ? unslugify(slug) : ''}
                            </Div>
                        ))}
                    </Div>
                    <Div id={'listings'} className="listings"/>
                </Div>


                {features && !!features?.features?.[0]?.geometry?.coordinates?.[0] && !!features?.features?.[0]?.geometry?.coordinates?.[1] && (
                    <Map
                        style={'mapbox://styles/mapbox/light-v10'}
                        features={features}
                        lon={features?.features?.[0]?.geometry?.coordinates?.[0]}
                        lat={features?.features?.[0]?.geometry?.coordinates?.[1]}
                        theme={placesMapStyle}
                        zoom={5}
                    />
                )}


                {/*<Div theme={placesWrapperStyle}>*/}
                {/*    {allPlaces.length > 0 && allPlaces.map((place) => {*/}
                {/*        if (!!place.uuid) { // if place does not exist in Inclusive Guide database*/}


                {/*            const address1 = !!place?.locations[0]?.address1 ? `${place?.locations[0]?.address1}` : ''*/}
                {/*            const city = !!place.locations[0].city ? `, ${place.locations[0].city}` : ''*/}
                {/*            const state = !!place.locations[0].state ? `, ${place.locations[0].state}` : ''*/}
                {/*            const zip = !!place.locations[0].postal_code ? `, ${place.locations[0].postal_code}` : ''*/}
                {/*            const composedAddress = `${address1}${city}${state}${zip}`*/}

                {/*            const slug = `${slugify(place.name)}-${*/}
                {/*                place?.locations[0].length > 0 ?*/}
                {/*                    slugify(place?.locations[0]?.address1) : ''}-${place.id}`*/}

                {/*            return (*/}
                {/*                <GenericCard*/}
                {/*                    key={slug}*/}
                {/*                    slug={`/places/${place.id}`}*/}
                {/*                    name={place.name}*/}
                {/*                    address={composedAddress}*/}
                {/*                    theme={placeCardStyle}*/}
                {/*                />*/}
                {/*            )*/}
                {/*        } else {*/}
                {/*            const address1 = !!place?.geojson?.[0]?.properties?.address ? `${place?.geojson?.[0]?.properties?.address}` : ''*/}
                {/*            // const address2 = !!place?.address2 ? place?.address2 : ''*/}
                {/*            const city = !!place?.geojson?.[0]?.properties?.city ? `, ${place?.geojson?.[0]?.properties?.city}` : ''*/}
                {/*            const state = !!place?.geojson?.[0]?.properties?.state ? `, ${place?.geojson?.[0]?.properties?.state}` : ''*/}
                {/*            const zip = !!place?.geojson?.[0]?.properties?.postal_code ? place?.geojson?.[0]?.properties?.postal_code : ''*/}
                {/*            const composedAddress = `${address1}${city}${state}${zip}`*/}


                {/*            return (*/}
                {/*                <GenericCard*/}
                {/*                    key={place.slug}*/}
                {/*                    slug={`/places/${place.slug}`}*/}
                {/*                    name={place.name}*/}
                {/*                    address={composedAddress}*/}
                {/*                    theme={{...placeCardStyle}}*/}
                {/*                />*/}
                {/*            )*/}
                {/*        }*/}
                {/*    })}*/}
                {/*</Div>*/}
                {noResults.boone && noResults.algolia && (
                    <NoResults/>
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Places
