import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import LinkSwitch                 from 'shared/Basic/LinkSwitch'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import Search                     from 'shared/Layout/Search'
import PlaceCard                  from '../../../shared/Cards/Place'
import {
    homeContentWrapperStyle,
    homeHeadlineStyle,
    homeImageStyle,
    homeImageWrapperStyle,
    homeSearchStyle,
    homeSearchWrapperStyle,
    homeSignupButtonStyle,
    homeSignupQuoteStyle,
    homeSignupQuoteWrapperStyle,
    homeSignupWrapperStyle,
    recentlyViewedPlaceCardStyle,
    recentlyViewedPlaceCardWrapperStyle,
    recentlyViewedPlacesHeadingStyle,
    recentlyViewedWrapperStyle
}                                 from './styles'

const Home = () => {
    const {isAuthenticated, isAdmin, recentlyViewedPlaces, user} = useSelector(state => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        if (!!user.recentlyViewed)
            for (const recent of user?.recentlyViewed) {
                dispatch({
                    type: 'user/getRecentlyViewedPlace',
                    payload: {_id: recent}
                })
            }


    }, [user.recentlyViewed])


    return (
        <ContentWrapper theme={homeContentWrapperStyle}>
            <Div theme={homeImageWrapperStyle}>
                <Div theme={homeImageStyle}/>
                <Div theme={homeSearchWrapperStyle}>
                    <Div theme={homeHeadlineStyle}>
                        Celebrating the places that celebrate you
                    </Div>
                    <Search theme={homeSearchStyle}/>
                </Div>
            </Div>
            <Div theme={homeSignupWrapperStyle}>
                <Div theme={homeSignupQuoteWrapperStyle}>
                    <Div theme={homeSignupQuoteStyle}>
                        Join us on the <em>Inclusive Guide</em> to review and share the places that
                        foster welcoming spaces and celebrate all identities!
                        Your input provides valuable insights to help us
                        build and evolve the Guide in real time.
                        {!isAuthenticated && !isAdmin && (
                            <Div>Click below to join us today!</Div>
                        )}
                    </Div>
                    {!isAuthenticated && !isAdmin && (
                        <LinkSwitch
                            url={'/signup'}
                            theme={homeSignupButtonStyle}
                        >
                            Create Account
                        </LinkSwitch>
                    )}
                </Div>

                <Div theme={recentlyViewedWrapperStyle}>
                    <Div theme={recentlyViewedPlacesHeadingStyle}>Recently Viewed</Div>
                    <Div theme={recentlyViewedPlaceCardWrapperStyle}>
                        {recentlyViewedPlaces?.length > 0 && recentlyViewedPlaces?.map((p, i) => (
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
                                theme={recentlyViewedPlaceCardStyle}
                            />
                        ))}
                    </Div>
                </Div>

            </Div>
        </ContentWrapper>
    )
}

export default Home
