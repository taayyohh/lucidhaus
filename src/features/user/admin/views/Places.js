import {userDashboardMenu} from 'config/menus/dashboard/user'
import {placeCardStyle}    from 'features/place/views/styles'
import React               from 'react'
import {useSelector}       from 'react-redux'
import Div                 from 'shared/Basic/Div'
import GenericCard         from 'shared/Cards/GenericCard'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import DashboardInfo       from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper    from 'shared/Layout/Dashboard/DashboardWrapper'

const Places = () => {
    const {bookmarks, isVerified} = useSelector(state => state.user)

    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Your Saved Places'}
                    description={"Here are the places you've saved."}
                />
                {!isVerified && (
                    <Div>In order to save a place, make sure you verify your email!</Div>
                )}

                {bookmarks && bookmarks.map((place) => {
                    const address = () => {
                        if (!!place.address1 && !!place.city && !!place.state && !!place.country) {
                            return `${!!place.address1 && place.address1} ${(!!place.address2 && place.address2 !== 'undefined') ? place.address2 : ''}, ${!!place.city && place.city} ${place.state} ${place.country}`
                        }
                    }

                    return (
                        <GenericCard
                            key={place.slug}
                            slug={`/places/${place.slug}`}
                            name={place.name}
                            address={address()}
                            theme={placeCardStyle}
                        />
                    )
                })}
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Places
