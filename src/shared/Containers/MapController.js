import mapboxgl                                    from 'mapbox-gl'
import React, {createContext, useEffect, useState} from 'react'

export const mapContext = createContext(null)

const MapController = ({children}) => {
    const geo = navigator.geolocation
    const [coords, setCoords] = useState({})
    const [mapBoxInstance, setMapBoxInstance] = useState({})
    const [isActivePlaceCard, setIsActivePlaceCard] = useState(null)
    const getLocation = () => geo.getCurrentPosition((pos) => {
        setCoords({
            lon: pos.coords.longitude,
            lat: pos.coords.latitude
        })
    })

    const flyToStore = (currentFeature, map) => {
        map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
        })
    }

    const createPopUp = (currentFeature, map) => {
        const popUps = document.getElementsByClassName('mapboxgl-popup')
        /** Check if there is already a popup on the map and if so, remove it */
        if (popUps[0]) popUps[0].remove()

        new mapboxgl.Popup({closeOnClick: false})
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML(`
                <div>
                    <a class="place-name" href="/places/${currentFeature.properties.slug}">
                        ${currentFeature.properties.name}
                    </a>
                    <h4>${currentFeature.properties.address}</h4>
                </div>
            `)
            .addTo(map)
    }

    useEffect(() => {
        if (geo)
            getLocation()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <mapContext.Provider value={{
            geo,
            coords,
            createPopUp,
            flyToStore,
            getLocation,
            isActivePlaceCard,
            setIsActivePlaceCard,
            setMapBoxInstance,
            mapBoxInstance
        }}>
            {children}
        </mapContext.Provider>
    )
}

export default MapController
