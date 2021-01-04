import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import AdminPosts            from 'features/admin/AdminPosts'
import React, {
    useContext,
    useEffect
}                            from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import {searchContext}       from 'shared/Containers/SearchController'
import ContentWrapper from 'shared/Layout/ContentWrapper'
import DashboardInfo  from 'shared/Layout/dashboard/DashboardInfo'

const ManagePosts = () => {
    const {posts} = useSelector(state => state.post)
    const {confirmDelete} = useSelector(state => state.admin)
    const {postsIndex} = useContext(searchContext)
    const dispatch = useDispatch()

    useEffect(() => {
        if (posts.length > 0)
            postsIndex.saveObjects(posts)
                .then(({objectIDs}) => {

                })
                .catch(err => {
                    console.log(err)
                })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts])

    useEffect(() => {
        dispatch({type: 'post/getPosts'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Posts'}
                    description={'Click to edit.'}
                />
                <AdminPosts posts={posts}/>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManagePosts
