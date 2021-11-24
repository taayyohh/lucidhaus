import React, {useContext, useState}                         from 'react'
import {useSelector}                                         from 'react-redux'
import Div                                                   from 'shared/Basic/Div'
import PlaceCard                                             from 'shared/Cards/Place'
import {mapContext}                                          from 'shared/Containers/MapController'
import {mobileFlag}                                          from '../../../site/slice'
import {placeSidebarCardStyle, placeSidebarCardWrapperStyle} from './styles'

const MapSidebarListing = ({p, i, locationList}) => {
    const isMobile = useSelector(mobileFlag)
    const [isClicked, setIsClicked] = useState(isMobile)
    const {mapBoxInstance, flyToStore, isActivePlaceCard, setIsActivePlaceCard, createPopUp} = useContext(mapContext)


    return (
        <Div
            theme={placeSidebarCardWrapperStyle}
            onClick={() => {
                if (!isMobile) {
                    flyToStore(locationList[i], mapBoxInstance)
                    createPopUp(locationList[i], mapBoxInstance)
                    setIsActivePlaceCard(p._id)
                    setIsClicked(true)
                }
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
                linkCard={isMobile}
            />
        </Div>
    )
}

export default MapSidebarListing
