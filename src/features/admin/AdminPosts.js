import {
    adminPostCardStyle,
    adminPostCardWrapperStyle,
    adminPostsInnerWrapperStyle,
    searchWrapperStyle
}                               from 'features/admin/styles'
import PropTypes                from 'prop-types'
import React, {useContext}      from 'react'
import {
    connectHits,
    InstantSearch,
    SearchBox
}                               from 'react-instantsearch-dom'
import Div                      from 'shared/Basic/Div'
import GenericCard              from 'shared/Cards/GenericCard'
import {searchContext}          from 'shared/Containers/SearchController'
import GenericCardAdminControls from 'shared/Controls/GenericCardAdminControls'

const AdminPosts = ({posts}) => {
    const {searchClient} = useContext(searchContext)

    const Hits = connectHits(
        ({hits}) =>
            <>
                {hits && hits.map((post) =>
                    <Div
                        key={post.slug}
                        theme={adminPostCardWrapperStyle}
                    >
                        <GenericCard
                            slug={`posts/update/${post.slug}`}
                            name={post.name}
                            photo={post.photo}
                            theme={adminPostCardStyle}
                        />
                        <GenericCardAdminControls
                            edit={'/admin/posts/update'}
                            destroyAction={'admin/attemptDestroyPost'}
                            slug={post.slug}
                        />
                    </Div>
                )}
            </>
    )

    return (
        <InstantSearch
            indexName="hyphaPosts"
            searchClient={searchClient}
        >
            {posts.length > 0 && (
                <Div theme={searchWrapperStyle}>
                    <SearchBox/>
                </Div>
            )}
            <Div theme={adminPostsInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}


AdminPosts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default AdminPosts