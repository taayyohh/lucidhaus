import {
    adminPostCardStyle,
    adminPostCardWrapperStyle,
    adminPostsInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle,
    searchWrapperStyle
} from 'features/admin/styles'
import {
    connectHits,
    Hits,
    InstantSearch,
    SearchBox
}                               from 'react-instantsearch-dom'
import React, {useContext}      from 'react'
import Div                      from 'shared/Basic/Div'
import GenericCard              from 'shared/Cards/GenericCard'
import {searchContext}          from 'shared/Containers/SearchController'
import GenericCardAdminControls from 'shared/Controls/GenericCardAdminControls'

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
                        <GenericCardAdminControls
                            edit={'/admin/shop/update'}
                            destroyAction={'admin/attemptDestroyProduct'}
                            slug={product.slug}
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
                    <SearchBox/>
                </Div>
            )}
            <Div theme={adminPostsInnerWrapperStyle}>
                <Hits />
            </Div>

        </InstantSearch>

    )
}


export default AdminShop