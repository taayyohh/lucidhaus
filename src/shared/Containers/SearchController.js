import algoliasearch          from 'algoliasearch'
import {
    algoliaAppId,
    alogiaAdminKey
}                             from 'config'
import React, {createContext} from 'react'

export const searchContext = createContext(null)

const SearchController = ({children}) => {
    const searchClient = algoliasearch(algoliaAppId, alogiaAdminKey)
    const postsIndex = searchClient.initIndex('hyphaPosts')
    const productsIndex = searchClient.initIndex('hyphaProducts')
    const ordersIndex = searchClient.initIndex('hyphaOrders')
    const productCategoriesIndex = searchClient.initIndex('hyphaProductCategories')

    return (
        <searchContext.Provider value={{
            searchClient,
            postsIndex,
            productsIndex,
            ordersIndex,
            productCategoriesIndex
        }}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchController