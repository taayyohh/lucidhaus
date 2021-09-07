import mapboxgl           from '!mapbox-gl'
import {MAPBOX_PUBLIC}    from 'config/variables'
import React, {useEffect} from 'react'
import Div                from 'shared/Basic/Div'
/* eslint import/no-webpack-loader-syntax: off */

const Map = ({lon, lat, zoom = 14, theme}) => {
    useEffect(() => {
        if (!!lon && !!lat) {
            mapboxgl.accessToken = MAPBOX_PUBLIC
            const map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [lon, lat], // starting position [lng, lat]
                zoom: zoom // starting zoom
            })
;

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
