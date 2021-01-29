import algoliasearch          from 'algoliasearch'
import {
    algoliaAppId,
    alogiaAdminKey
}                             from 'config'
import React, {createContext} from 'react'

export const searchContext = createContext(null)

const SearchController = ({children}) => {
    const searchClient = algoliasearch(algoliaAppId, alogiaAdminKey)
    const postsIndex = searchClient.initIndex('Posts')
    const productsIndex = searchClient.initIndex('Products')
    const ordersIndex = searchClient.initIndex('Orders')
    const artistsIndex = searchClient.initIndex('Artists')
    const collaboratorsIndex = searchClient.initIndex('Collaborators')
    const albumsIndex = searchClient.initIndex('Albums')
    const productCategoriesIndex = searchClient.initIndex('ProductCategories')

    return (
        <searchContext.Provider value={{
            searchClient,
            postsIndex,
            productsIndex,
            ordersIndex,
            artistsIndex,
            collaboratorsIndex,
            albumsIndex,
            productCategoriesIndex
        }}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchController