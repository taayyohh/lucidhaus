import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import List                  from 'features/admin/album/List'
import React, {
    useContext,
    useEffect,
    useState
}                            from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import {searchContext}       from 'shared/Containers/SearchController'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'

const Manage = () => {
    const {albums} = useSelector(state => state.album)
    const {albumsIndex} = useContext(searchContext)
    const dispatch = useDispatch()
    const [isIndexed, setIsIndexed] = useState(false)

    useEffect(() => {
        dispatch({type: 'album/getAlbums'})
        albumsIndex.saveObjects(albums)
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
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Music'}
                    description={'Type & Enter to search. Click to edit.'}
                />
                {isIndexed && (
                    <List albums={albums}/>
                )}
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
