import React, {useContext, useEffect, useState}                                         from 'react'
import {useSelector}                                                                    from 'react-redux'
import Div                                                                              from 'shared/Basic/Div'
import PlaceCard                                                                        from 'shared/Cards/Place'
import {mapContext}                                                                     from 'shared/Containers/MapController'
import {isEmpty}                                                                        from 'utils/helpers'
import {placeSidebarCardStyle, placeSidebarCardWrapperStyle, placeSidebarListingsStyle} from './styles'

const MapSidebarListings = () => {
    const {mapBoxInstance, flyToStore, isActivePlaceCard, setIsActivePlaceCard, createPopUp} = useContext(mapContext)
    const {locationList} = useSelector(state => state.place)
    const [properties, setProperties] = useState([])
    const propertiesReducer = (previousValue, currentValue) => [...previousValue, currentValue.properties]

    useEffect(() => {
        if (!isEmpty(locationList)) {
            setProperties(locationList?.reduce(propertiesReducer, []))
        }

    }, [locationList])

    return (
        <Div
            id='listings'
            className="listings"
            theme={placeSidebarListingsStyle}
        >
            {properties && properties.map((p, i) => (
                <Div
                    key={p._id}
                    theme={placeSidebarCardWrapperStyle}
                    onClick={() => {
                        flyToStore(locationList[i], mapBoxInstance)
                        createPopUp(locationList[i], mapBoxInstance)
                        setIsActivePlaceCard(p._id)
                    }}
                >
                    <PlaceCard
                        name={p.name}
                        address={p.address}
                        city={p.city}
                        state={p.state}
                        safe={p.averageSafe}
                        celebrated={p.averageCelebrated}
                        welcome={p.averageWelcome}
                        inclusiveScore={p.inclusiveScore}
                        url={`/places/${p.slug}`}
                        theme={placeSidebarCardStyle(p._id === isActivePlaceCard)}
                    />
                </Div>
            ))}
        </Div>
    )
}

export default MapSidebarListings
