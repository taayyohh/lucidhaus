import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import AdminControls      from 'shared/Admin/AdminControls'
import AdminPosts         from 'shared/Admin/AdminPosts'
import DeletePrompt       from 'shared/Admin/DeletePrompt'
import AdminWrapper       from 'shared/Layout/AdminWrapper'
import ContentWrapper     from 'shared/Layout/ContentWrapper'

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
            <AdminWrapper>
                {/*//TODO:improve*/}
                <AdminControls
                    data={posts}
                    title={'Post'}
                    create={'/create/post'}
                />
                <AdminPosts posts={posts}/>
                <DeletePrompt destroyAction={'admin/destroyPost'}/>
            </AdminWrapper>
        </ContentWrapper>
    )
}

export default ManagePosts
