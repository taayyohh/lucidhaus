import React, {useContext} from 'react'
import {mapContext}        from 'shared/Containers/MapController'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import Map                 from 'shared/Map'

const Home = () => {
    const {coords} = useContext(mapContext)

    return (
        <ContentWrapper>
            <Map
                lon={coords?.lon}
                lat={coords?.lat}
                zoom={13}
            />
        </ContentWrapper>
    )
}

export default Home