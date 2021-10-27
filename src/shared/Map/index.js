import mapboxgl                       from '!mapbox-gl'
import {MAPBOX_PUBLIC}                      from 'config/variables'
import React, {memo, useContext, useEffect} from 'react'
import {useDispatch, useSelector}           from 'react-redux'
import Div                            from 'shared/Basic/Div'
import {mapContext}                   from 'shared/Containers/MapController'
/* eslint import/no-webpack-loader-syntax: off */

const Map = memo(({
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
    const isPlaceDetail = (url.includes('places') && url.length === 2)


    const buildLocationList = ({features}, map) => {
        console.log('BUILD')
        dispatch({
            type: 'place/buildLocationList',
            payload: {
                features
            }
        })
        setMapBoxInstance(map)
    }

    /*  Search Map  */
    useEffect(() => {
        console.log('FEAT', features)
        if (url.includes('search')) {
            mapboxgl.accessToken = MAPBOX_PUBLIC

            const map = new mapboxgl.Map({
                container: 'map',
                style: styles,
                center: [parseInt(lon), parseInt(lat)],
                zoom: zoom,
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

    /*  Place Detail Sidebar Map  */
    useEffect(() => {
        if (!!lon && !!lat && isPlaceDetail) {
            mapboxgl.accessToken = MAPBOX_PUBLIC
            const map = new mapboxgl.Map({
                container: 'map',
                style: styles,
                center: [lon, lat],
                zoom: zoom
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
})

Map.defaultProps = {
    theme: {position: 'absolute', top: 0, bottom: 0, left: 0, width: '100%'}
}

export default Map
