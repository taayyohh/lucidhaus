import List                                     from 'features/place/admin/views/List'
import {userContentWrapperStyle}                from 'features/user/admin/views/styles'
import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector}               from 'react-redux'
import {searchContext}                          from 'shared/Containers/SearchController'
import ContentWrapper                           from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper                    from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import DashboardInfo                            from 'shared/Layout/Dashboard/DashboardInfo'

const Manage = () => {
    const {artists} = useSelector(state => state.artist)
    const {artistsIndex} = useContext(searchContext)
    const dispatch = useDispatch()
    const [isIndexed, setIsIndexed] = useState(false)

    useEffect(() => {
        dispatch({type: 'artist/getArtists'})
        artistsIndex.saveObjects(artists)
            .then(() => setIsIndexed(true))
            .catch(error =>
                dispatch({
                    type: 'site/setNotification',
                    payload: {notification: error}
                })
            )

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Artists'}
                    description={'Type & Enter to search. Click to edit.'}
                />
                {isIndexed && (
                    <List artists={artists}/>
                )}
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
