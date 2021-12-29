import algoliasearch                       from 'algoliasearch'
import {ALGOLIA_ADMIN_KEY, ALGOLIA_APP_ID} from 'config/variables'
import React, {createContext}              from 'react'

export const searchContext = createContext(null)

const SearchController = ({children}) => {
    const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY)
    const placesIndex = searchClient.initIndex('Places')
    const artistsIndex = searchClient.initIndex('Artists')
    const albumsIndex = searchClient.initIndex('Albums')
    const eventsIndex = searchClient.initIndex('Events')
    const usersIndex = searchClient.initIndex('Users')
    const productsIndex = searchClient.initIndex('Products')
    const ordersIndex = searchClient.initIndex('Orders')
    const collaboratorsIndex = searchClient.initIndex('Collaborators')

    return (
        <searchContext.Provider value={{
            searchClient,
            placesIndex,
            artistsIndex,
            collaboratorsIndex,
            eventsIndex,
            albumsIndex,
            usersIndex,
            productsIndex,
            ordersIndex,
        }}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchController
