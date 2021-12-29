import React                                            from 'react'
import {useDispatch, useSelector}                       from 'react-redux'
import Div                                              from 'shared/Basic/Div'
import ContentWrapper                                   from 'shared/Layout/ContentWrapper'
import {homeContentWrapperStyle, homeImageWrapperStyle} from './styles'

const Home = () => {
    const {isAuthenticated, isAdmin, recentlyViewedPlaces, user} = useSelector(state => state.user)
    const dispatch = useDispatch()


    return (
        <ContentWrapper theme={homeContentWrapperStyle}>
            LucidHaus
        </ContentWrapper>
    )
}

export default Home
