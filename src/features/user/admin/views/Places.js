import {userDashboardMenu}        from 'config/menus/dashboard/user'
import {placeCardStyle}           from 'features/place/views/styles'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import GenericCard                from 'shared/Cards/GenericCard'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper           from 'shared/Layout/Dashboard/DashboardWrapper'

const Places = () => {
    const dispatch = useDispatch()
    const {user, bookmarks} = useSelector(state => state.user)

    useEffect(() => {
        if (user?.bookmarks?.length > 0) {
            for (const bookmark of user.bookmarks) {
                if (bookmarks.filter(place => place._id === bookmark).length === 0)
                    dispatch({type: 'user/getBookmark', payload: {bookmark}})
            }
        }

    }, [user.bookmarks, dispatch])

    // useEffect(() => {
    //     for (const bookmark of user.bookmarks) {
    //         dispatch({type: 'user/getBookmark', payload: {bookmark}})
    //     }
    //
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Your Saved Places'}
                    description={"Here are the places you've saved."}
                />
                My Places
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
