import mapboxgl                       from '!mapbox-gl'
import {MAPBOX_PUBLIC}                from 'config/variables'
import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import Div                            from 'shared/Basic/Div'
import {mapContext}                   from 'shared/Containers/MapController'
/* eslint import/no-webpack-loader-syntax: off */

const Map = ({
                 lon,
                 lat,
                 zoom = 14,
                 styles = 'mapbox://styles/mapbox/streets-v11',
                 features,
                 scrollZoom = true,
                 theme
             }) => {
    const {url} = useSelector(state => state.site)
    const dispatch = useDispatch()
    const {setMapBoxInstance, setIsActivePlaceCard, flyToStore, createPopUp} = useContext(mapContext)


    const buildLocationList = ({features}, map) => {
        dispatch({
            type: 'place/buildLocationList',
            payload: {
                features
            }
        })
        setMapBoxInstance(map)
    }


    useEffect(() => {
        if (url.includes('search')) {
            mapboxgl.accessToken = MAPBOX_PUBLIC

            const map = new mapboxgl.Map({
                container: 'map', // container id
                style: styles, // style URL
                center: [parseInt(lon), parseInt(lat)], // starting position [lng, lat]
                zoom: zoom, // starting zoom
                scrollZoom: scrollZoom
            })

            map.on('load', () => {
                map.addLayer({
                    id: 'locations',
                    type: 'circle',
                    /* Add a GeoJSON source containing place coordinates and information. */
                    source: {
                        type: 'geojson',
                        data: features
                    }
                })
                map.on('click', ({point}) => {
                    /* Determine if a feature in the "locations" layer exists at that point. */
                    const features = map.queryRenderedFeatures(point, {
                        layers: ['locations']
                    })

                    /* If it does not exist, return */
                    if (!features.length) return

                    const clickedPoint = features[0]

                    flyToStore(clickedPoint, map)
                    createPopUp(clickedPoint, map)
                    setIsActivePlaceCard(clickedPoint?.properties?._id)
                })
                buildLocationList(features, map)
            })
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [features])


    useEffect(() => {
        if (!!lon && !!lat && !features) {
            mapboxgl.accessToken = MAPBOX_PUBLIC
            const map = new mapboxgl.Map({
                container: 'map', // container id
                style: styles, // style URL
                center: [lon, lat], // starting position [lng, lat]
                zoom: zoom // starting zoom
            })

            new mapboxgl.Marker()
                .setLngLat([lon, lat])
                .addTo(map)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lon, lat])

    return (
        <Div
            id="map"
            theme={theme}
        />
    )
}

Map.defaultProps = {
    theme: {position: 'absolute', top: 0, bottom: 0, left: 0, width: '100%'}
}

export default Map
