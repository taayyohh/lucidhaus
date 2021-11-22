import algoliasearch                       from 'algoliasearch'
import {ALGOLIA_ADMIN_KEY, ALGOLIA_APP_ID} from 'config/variables'
import React, {createContext}              from 'react'

export const searchContext = createContext(null)

const SearchController = ({children}) => {
    const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY)
    const placesIndex = searchClient.initIndex('dev_Places')
    const usersIndex = searchClient.initIndex('dev_Users')

    return (
        <searchContext.Provider value={{
            searchClient,
            placesIndex,
            usersIndex
        }}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchController
