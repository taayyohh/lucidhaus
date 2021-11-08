import {placesContentInnerWrapperStyle, placesContentWrapperStyle} from 'features/place/views/styles'
import React, {useEffect, useState}                                from 'react'
import {useDispatch, useSelector}                                  from 'react-redux'
import Div                                                         from 'shared/Basic/Div'
import ContentWrapper                                              from 'shared/Layout/ContentWrapper'
import Map                                                         from 'shared/Map'
import NoResults        from './NoResults'
import MapSidebar       from './MapSidebar'
import {placesMapStyle} from './styles'

const Places = () => {
    const {boonePlaces, algoliaPlaces, places, noResults} = useSelector(state => state.place)
    const dispatch = useDispatch()
    const [allPlaces, setAllPlaces] = useState([])
    const [features, setFeatures] = useState([])

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
        setFeatures([])
        for (const place of allPlaces) {
            if (!!place._id) {
                if (!!place?.geojson?.[0]?.geometry?.coordinates[0] && place?.geojson?.[0]?.geometry?.coordinates[1])
                    setFeatures(features => [...features, {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": place.geojson?.[0]?.geometry?.coordinates
                        },
                        "properties": {
                            "averageSafe": place.averageSafe,
                            "averageCelebrated": place.averageCelebrated,
                            "averageWelcome": place.averageWelcome,
                            "inclusiveScore": place.inclusiveScore,
                            "name": place.geojson[0]?.properties?.name,
                            "address": place.geojson[0]?.properties?.address,
                            "city": place.geojson[0]?.properties?.city,
                            "country": place.geojson[0]?.properties?.country,
                            "postalCode": place.geojson[0]?.properties?.postalCode,
                            "state": place.geojson[0]?.properties?.state,
                            "slug": place?.slug,
                            "_id": place._id
                        }
                    }])
            } else {
                if (!!place?.locations?.[0].latitude && !!place?.locations?.[0].longitude)
                    setFeatures(features => [...features, {
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
                    }])
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPlaces])

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

    return (
        <ContentWrapper theme={placesContentWrapperStyle}>
            <Div theme={placesContentInnerWrapperStyle(noResults.boone && noResults.algolia)}>
                <MapSidebar noResults={noResults.boone && noResults.algolia}/>
                {((features.length > 0 && !!features?.[0]?.geometry?.coordinates?.[0] && !!features?.[0]?.geometry?.coordinates?.[1]) && (
                    <Map
                        styles={'mapbox://styles/mapbox/light-v10'}
                        features={
                            {
                                "type": "FeatureCollection",
                                "features": features
                            }
                        }
                        lon={features?.[0]?.geometry?.coordinates?.[0]}
                        lat={features?.[0]?.geometry?.coordinates?.[1]}
                        theme={placesMapStyle}
                        zoom={5}
                        scrollZoom={false}
                    />
                )) || (
                    <NoResults/>
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Places
