import React, {useEffect}             from 'react'
import {
    useDispatch,
    useSelector
}                                     from 'react-redux'
import AdminControls from '../../shared/Admin/AdminControls'
import AdminPosts    from '../../shared/Admin/AdminPosts'
import DeletePrompt  from '../../shared/Admin/DeletePrompt'
import Div                            from '../../shared/Basic/Div'
import {contentWrapperStyle}          from '../../shared/Layout/styles'
import {adminPostsWrapperStyle} from './styles'

const ManagePosts = () => {
    const {posts} = useSelector(state => state.post)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'post/getPosts'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])

    return (
        <Div theme={contentWrapperStyle}>
            <Div theme={adminPostsWrapperStyle}>
                {/*//TODO:improve*/}
                <AdminControls
                    data={posts}
                    title={'Post'}
                    create={'/create/post'}
                />
                <AdminPosts posts={posts}/>
                <DeletePrompt destroyAction={'admin/destroyPost'}/>
            </Div>
        </Div>
    )
}

export default ManagePosts
