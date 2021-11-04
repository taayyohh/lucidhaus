import React                   from 'react'
import Div                     from 'shared/Basic/Div'
import Query                   from './Query'
import MapSidebarListings      from './MapSidebarListings'
import {placesMapSidebarStyle} from './styles'

const MapSidebar = ({noResults}) => {
    return (
        <Div theme={placesMapSidebarStyle(noResults)}>
            <Query/>
            <MapSidebarListings/>
        </Div>
    )
}

export default MapSidebar
