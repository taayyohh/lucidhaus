import algoliasearch                  from 'algoliasearch'
import {algoliaAppId, alogiaAdminKey} from 'config'
import React, {createContext}         from 'react'

export const searchContext = createContext(null)

const SearchController = ({children}) => {
    const searchClient = algoliasearch(algoliaAppId, alogiaAdminKey)
    const productsIndex = searchClient.initIndex('Products')
    const ordersIndex = searchClient.initIndex('Orders')
    const placesIndex = searchClient.initIndex('Places')
    const productCategoriesIndex = searchClient.initIndex('ProductCategories')

    return (
        <searchContext.Provider value={{
            searchClient,
            productsIndex,
            ordersIndex,
            placesIndex,
            productCategoriesIndex
        }}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchController