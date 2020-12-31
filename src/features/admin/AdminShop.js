import AdminCreateButton   from 'features/admin/AdminCreateButton'
import {
    adminPostsInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle,
    searchWrapperStyle
}                          from 'features/admin/styles'
import React, {useContext} from 'react'
import {
    connectHits,
    InstantSearch,
    SearchBox
}                          from 'react-instantsearch-dom'
import Div                 from 'shared/Basic/Div'
import GenericCard         from 'shared/Cards/GenericCard'
import {searchContext}     from 'shared/Containers/SearchController'

const AdminShop = ({shop}) => {
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
            indexName="hyphaProducts"
            searchClient={searchClient}
        >
            {shop.length > 0 && (
                <Div theme={searchWrapperStyle}>
                    <SearchBox autoFocus/>
                    <AdminCreateButton url={'/create/product'}/>
                </Div>
            )}
            <Div theme={adminPostsInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}


export default AdminShop