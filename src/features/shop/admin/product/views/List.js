import AdminCreateButton   from 'shared/Layout/Dashboard/admin/AdminCreateButton'
import {
    adminPostsInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle,
    searchWrapperStyle
}                          from 'shared/Layout/Dashboard/admin/styles'
import React, {useContext} from 'react'
import {
    connectHits,
    InstantSearch,
    SearchBox
}                          from 'react-instantsearch-dom'
import Div                 from 'shared/Basic/Div'
import GenericCard         from 'shared/Cards/GenericCard'
import {searchContext}     from 'shared/Containers/SearchController'

const List = ({shop}) => {
    const {searchClient} = useContext(searchContext)

    const Hits = connectHits(
        ({hits}) =>
            <>
                {hits && hits.map((product) =>
                    <Div
                        key={product.slug}
                        theme={adminShopCardWrapperStyle}
                    >
                        <GenericCard
                            slug={`shop/update/${product.slug}`}
                            name={product.name}
                            photo={product.photo}
                            theme={adminShopCardStyle}
                        />
                    </Div>
                )}
            </>
    )

    return (
        <InstantSearch
            indexName="Products"
            searchClient={searchClient}
            stalledSearchDelay={500}
        >
            <Div theme={searchWrapperStyle}>
                <SearchBox
                    searchAsYouType={false}
                    autoFocus
                />
                <AdminCreateButton url={'/admin/create/product'}/>
            </Div>
            <Div theme={adminPostsInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}


export default List
