import React, {useContext}                     from 'react'
import Div                                     from 'shared/Basic/Div'
import {mapContext}                            from 'shared/Containers/MapController'
import ContentWrapper                                          from 'shared/Layout/ContentWrapper'
import {homeImageStyle, homeImageWrapperStyle, homeQuoteStyle} from './styles'

const Home = () => {
    const {coords} = useContext(mapContext)

    return (
        <ContentWrapper theme={{width: '100%', margin: 0}}>
            <Div theme={homeImageWrapperStyle}>
                <Div theme={homeImageStyle}/>
            </Div>
            <Div theme={homeQuoteStyle}>
                Celebrating the places that celebrate <span>You</span>
            </Div>
        </ContentWrapper>
    )
}

export default Home
