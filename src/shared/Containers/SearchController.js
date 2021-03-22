import algoliasearch                       from 'algoliasearch'
import {ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY} from 'config'
import React, {createContext}              from 'react'

export const searchContext = createContext(null)

const SearchController = ({children}) => {
    const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY)
    const productsIndex = searchClient.initIndex('Products')
    const ordersIndex = searchClient.initIndex('Orders')
    const placesIndex = searchClient.initIndex('Places')
    const booneIndex = searchClient.initIndex('Boone')
    const productCategoriesIndex = searchClient.initIndex('ProductCategories')

    return (
        <searchContext.Provider value={{
            searchClient,
            productsIndex,
            ordersIndex,
            placesIndex,
            booneIndex,
            productCategoriesIndex
        }}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchController