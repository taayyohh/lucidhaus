import React                    from 'react'
import {
    adminPostCardStyle,
    adminPostCardWrapperStyle,
    adminPostsInnerWrapperStyle
} from '../../features/admin/styles'
import Div         from '../Basic/Div'
import GenericCard from '../Cards/GenericCard'
import GenericCardAdminControls from '../Controls/GenericCardAdminControls'

const AdminPosts = ({posts}) =>
    <Div theme={adminPostsInnerWrapperStyle}>
        {posts && posts?.map(post => (
            <Div
                key={post.slug}
                theme={adminPostCardWrapperStyle}
            >
                <GenericCard
                    slug={`posts/update/${post.slug}`}
                    name={post.name}
                    photo={post.photo}
                    theme={adminPostCardStyle}
                    layoutId={post._id}
                />
                <GenericCardAdminControls
                    edit={'/admin/posts/update'}
                    destroyAction={'admin/attemptDestroyPost'}
                    slug={post.slug}
                />
            </Div>
        ))}
    </Div>

export default AdminPosts