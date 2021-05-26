import algoliasearch                       from 'algoliasearch'
import {ALGOLIA_ADMIN_KEY, ALGOLIA_APP_ID} from 'config'
import React, {createContext}              from 'react'

export const searchContext = createContext(null)

const SearchController = ({children}) => {
    const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY)
    const booneIndex = searchClient.initIndex('Boone')
    const ordersIndex = searchClient.initIndex('Orders')
    const placesIndex = searchClient.initIndex('Places')
    const productsIndex = searchClient.initIndex('Products')
    const productCategoriesIndex = searchClient.initIndex('ProductCategories')
    const usersIndex = searchClient.initIndex('Users')

    return (
        <searchContext.Provider value={{
            searchClient,
            booneIndex,
            ordersIndex,
            placesIndex,
            productsIndex,
            productCategoriesIndex,
            usersIndex
        }}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchController
