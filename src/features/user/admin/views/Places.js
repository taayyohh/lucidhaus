import {userDashboardMenu} from 'config/menus/dashboard/user'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo       from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper    from 'shared/Layout/Dashboard/DashboardWrapper'

const Places = () => {
    const dispatch = useDispatch()
    const {_id, token, user} = useSelector(state => state.user)
    console.log('BOOK', user.bookmarks)

    useEffect(() => {
        if(user?.bookmarks?.length > 0) {
            for (const bookmark of user.bookmarks) {
                dispatch({type: 'user/getBookmark', payload: {bookmark}})
            }
        }

    }, [user.bookmarks])

    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Your Saved Places'}
                    description={"Here are the places you've saved."}
                />
                My Places
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Places
