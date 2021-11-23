import {placesContentInnerWrapperStyle, placesContentWrapperStyle} from 'features/place/views/styles'
import React, {useEffect, useState}                                from 'react'
import {useDispatch, useSelector}                                  from 'react-redux'
import Div                                                         from 'shared/Basic/Div'
import ContentWrapper                                              from 'shared/Layout/ContentWrapper'
import Map                                                         from 'shared/Map'
import {unslugify}                                                 from 'utils/helpers'
import MapSidebar                                                  from './MapSidebar'
import NoResults                                                   from './NoResults'
import {placesMapStyle}                                            from './styles'

const Places = () => {
    const {boonePlaces, algoliaPlaces, places, noResults} = useSelector(state => state.place)
    const {slug} = useSelector(state => state.site)

    const dispatch = useDispatch()
    const [allPlaces, setAllPlaces] = useState([])
    const [features, setFeatures] = useState([])
    const [geoJsonFeature, setGeoJsonFeature] = useState()

    useEffect(() => {
        if(!!algoliaPlaces && !!boonePlaces?.data) {
            console.log('al', algoliaPlaces)
            console.log('bo', boonePlaces?.data)

            setAllPlaces(
                !boonePlaces?.data
                    ? [...algoliaPlaces?.reduce((acc = [], cv) => {
                        acc.push(cv[0])

                        return acc
                    }, [])]
                    : [...algoliaPlaces?.reduce((acc = [], cv) => {
                        acc.push(cv[0])

                        return acc
                    }, []), ...boonePlaces?.data]
                        .reduce(function (accumulator = [], currentValue) {
                            if (!!currentValue && !currentValue?.isPendingSubmission)
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
        }




    }, [algoliaPlaces, boonePlaces])

    useEffect(() => {
        setFeatures([])
        // console.log('all', allPlaces)
        for (const place of allPlaces) {
            // console.log('place', place)
            if (!!place?._id) {
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
                            "description": place.geojson[0]?.properties?.description,
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
                            "description": place.description,
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
        setGeoJsonFeature({
            "type": "FeatureCollection",
            "features": features
        })

    }, [features])

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
                        features={geoJsonFeature}
                        lon={features?.[0]?.geometry?.coordinates?.[0]}
                        lat={features?.[0]?.geometry?.coordinates?.[1]}
                        theme={placesMapStyle}
                        zoom={6}
                        scrollZoom={false}
                    />
                )) || (
                    <Div theme={placesMapStyle}>
                        <NoResults search={unslugify(slug)}/>
                    </Div>
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Places
