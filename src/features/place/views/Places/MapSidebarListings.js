import React, {useEffect, useState} from 'react'
import {useSelector}                from 'react-redux'
import Div                  from 'shared/Basic/Div'
import {isEmpty, unslugify} from 'utils/helpers'
import MapSidebarListing    from './MapSidebarListing'
import NoResults                    from './NoResults'
import {placeSidebarListingsStyle}  from './styles'

const MapSidebarListings = () => {
    const {locationList} = useSelector(state => state.place)
    const {slug} = useSelector(state => state.site)
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
            {properties.length > 0 && properties.map((p, i) =>
                <MapSidebarListing
                    key={i}
                    i={i}
                    p={p}
                    locationList={locationList}
                />
            )}
            {properties.length === 0 && (
                <NoResults  search={unslugify(slug)} />
            )}
        </Div>
    )
}

export default MapSidebarListings
