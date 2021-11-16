import React, {useContext, useState}                         from 'react'
import Div                                                   from 'shared/Basic/Div'
import PlaceCard                                             from 'shared/Cards/Place'
import {mapContext}                                          from 'shared/Containers/MapController'
import {placeSidebarCardStyle, placeSidebarCardWrapperStyle} from './styles'

const MapSidebarListing = ({p, i, locationList}) => {
    const [isClicked, setIsClicked] = useState(false)
    const {mapBoxInstance, flyToStore, isActivePlaceCard, setIsActivePlaceCard, createPopUp} = useContext(mapContext)


    return (
        <Div
            theme={placeSidebarCardWrapperStyle}
            onClick={() => {
                flyToStore(locationList[i], mapBoxInstance)
                createPopUp(locationList[i], mapBoxInstance)
                setIsActivePlaceCard(p._id)
                setIsClicked(true)
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
                url={isClicked ? `/places/${p.slug}` : null}
                theme={placeSidebarCardStyle(p._id === isActivePlaceCard)}
            />
        </Div>
    )
}

export default MapSidebarListing
