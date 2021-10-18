import React                       from 'react'
import Div                         from 'shared/Basic/Div'
import {placeSidebarListingsStyle} from './styles'

const SidebarListings = () => {
    return (
        <Div
            id='listings'
            className="listings"
            theme={placeSidebarListingsStyle}
        />
    )
}

export default SidebarListings
