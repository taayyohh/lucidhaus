import AdminCreateButton from 'features/admin/AdminCreateButton'
import {
    adminPostCardStyle,
    adminPostCardWrapperStyle,
    adminPostsInnerWrapperStyle,
    searchWrapperStyle
}                        from 'features/admin/styles'
import PropTypes         from 'prop-types'
import React, {useContext} from 'react'
import {
    connectHits,
    InstantSearch,
    SearchBox
}                        from 'react-instantsearch-dom'
import Div               from 'shared/Basic/Div'
import GenericCard       from 'shared/Cards/GenericCard'
import {searchContext}   from 'shared/Containers/SearchController'

const List = ({posts}) => {
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
                    </Div>
                )}
            </>
    )

    return (
        <InstantSearch
            indexName="Posts"
            searchClient={searchClient}
            stalledSearchDelay={500}
        >
            <Div theme={searchWrapperStyle}>
                <SearchBox
                    searchAsYouType={false}
                    autoFocus
                />
                <AdminCreateButton url={'/create/post'}/>
            </Div>
            <Div theme={adminPostsInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}


List.propTypes = {
    posts: PropTypes.array.isRequired
}

export default List