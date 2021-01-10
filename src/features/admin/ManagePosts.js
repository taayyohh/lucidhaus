import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import AdminPosts            from 'features/admin/AdminPosts'
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
import ContentWrapper from 'shared/Layout/ContentWrapper'
import DashboardInfo  from 'shared/Layout/Dashboard/DashboardInfo'

const ManagePosts = () => {
    const {posts} = useSelector(state => state.post)
    const {postsIndex} = useContext(searchContext)
    const dispatch = useDispatch()
    const [isIndexed, setIsIndexed] = useState(false)

    useEffect(() => {
        dispatch({type: 'post/getPosts'})
        postsIndex.saveObjects(posts)
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
                    heading={'Manage Posts'}
                    description={'Search to find. Click to edit.'}
                />
                {isIndexed && (
                    <AdminPosts posts={posts}/>
                )}
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManagePosts
