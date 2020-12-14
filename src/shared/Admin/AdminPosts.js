import {
    adminPostCardStyle,
    adminPostCardWrapperStyle,
    adminPostsInnerWrapperStyle
}                               from 'features/admin/styles'
import React                    from 'react'
import Div                      from 'shared/Basic/Div'
import GenericCard              from 'shared/Cards/GenericCard'
import GenericCardAdminControls from 'shared/Controls/GenericCardAdminControls'

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