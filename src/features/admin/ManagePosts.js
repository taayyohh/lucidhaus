import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                   from 'react-redux'
import AdminPosts            from 'features/admin/AdminPosts'
import DeletePrompt          from 'shared/Layout/DeletePrompt'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import ContentWrapper from 'shared/Layout/ContentWrapper'
import DashboardInfo  from 'shared/Layout/Dashboard/DashboardInfo'

const ManagePosts = () => {
    const {posts} = useSelector(state => state.post)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()

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
                <DeletePrompt destroyAction={'admin/destroyPost'}/>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManagePosts
