import mapboxgl           from 'mapbox-gl'
import React, {useEffect} from 'react'
import Div                from 'shared/Basic/Div'

const Map = ({lon, lat, theme}) => {

    useEffect(() => {
        if (!!lon && !!lat) {
            mapboxgl.accessToken = 'pk.eyJ1IjoiaW5jbHVzaXZlZ3VpZGUiLCJhIjoiY2ttanA1ZThnMHRkcjJ5cXU3MjJoZ2szbSJ9.0JsDAD-p_AH6RgoN1NMglA'
            // console.log('secret', MAPBOX_PUBLIC)
            const map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [lon, lat], // starting position [lng, lat]
                zoom: 9 // starting zoom
            })
        }
    }, [lon, lat])


    return (
        <Div id="map" theme={theme}>

        </Div>
    )
}

Map.defaultProps = {
    theme: {position: 'absolute', top: 0, bottom: 0, width: '100%' }
}

export default Map
