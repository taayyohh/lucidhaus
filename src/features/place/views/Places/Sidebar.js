import React                   from 'react'
import Div                     from 'shared/Basic/Div'
import Query                   from './Query'
import SidebarListings         from './SidebarListings'
import {placesMapSidebarStyle} from './styles'

const Sidebar = ({noResults}) => {
    return (
        <Div theme={placesMapSidebarStyle(noResults)}>
            <Query/>
            <SidebarListings/>
        </Div>
    )
}

export default Sidebar
