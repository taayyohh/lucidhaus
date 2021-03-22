import React, {createContext, useEffect, useState} from 'react'

export const mapContext = createContext(null)

const MapController = ({children}) => {
    const geo = navigator.geolocation
    const [coords, setCoords] = useState({})
    const getLocation = () => geo.getCurrentPosition((pos) => {
        setCoords({
            lon: pos.coords.longitude,
            lat: pos.coords.latitude
        })
    })

    useEffect(() => {
        if(geo)
            getLocation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <mapContext.Provider value={{
            geo,
            coords,
            getLocation
        }}>
            {children}
        </mapContext.Provider>
    )
}

export default MapController