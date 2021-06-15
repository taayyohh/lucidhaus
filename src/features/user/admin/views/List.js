import PropTypes           from 'prop-types'
import React, {useContext} from 'react'
import {
    connectHits,
    InstantSearch,
    SearchBox
}                          from 'react-instantsearch-dom'
import Div                 from 'shared/Basic/Div'
import GenericCard         from 'shared/Cards/GenericCard'
import {searchContext}     from 'shared/Containers/SearchController'
import {
    adminPlaceCardStyle,
    adminPlaceCardWrapperStyle,
    adminPlacesInnerWrapperStyle,
    searchWrapperStyle
}                          from 'shared/Layout/Dashboard/admin/styles'

const List = ({users}) => {
    const {searchClient} = useContext(searchContext)

    const Hits = connectHits(
        ({hits}) =>
            <>
                {hits && hits.map((user) =>
                    <Div
                        key={user.objectID}
                        theme={adminPlaceCardWrapperStyle}
                    >
                        <GenericCard
                            slug={`users/update/${user.slug}`}
                            name={user.nameFirst}
                            photo={user.photo}
                            theme={adminPlaceCardStyle}
                        />
                    </Div>
                )}
            </>
    )

    return (
        <InstantSearch
            indexName="Users"
            searchClient={searchClient}
            stalledSearchDelay={500}
        >
            <Div theme={searchWrapperStyle}>
                <SearchBox
                    searchAsYouType={false}
                    autoFocus
                />
                {/*<AdminCreateButton url={'/admin/create/user'}/>*/}
            </Div>
            <Div theme={adminPlacesInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}


List.propTypes = {
    users: PropTypes.array.isRequired
}

export default List
