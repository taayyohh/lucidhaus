import AdminCreateButton from 'features/admin/AdminCreateButton'
import {
    adminPlaceCardStyle,
    adminPlaceCardWrapperStyle,
    adminPlacesInnerWrapperStyle,
    searchWrapperStyle
}                        from 'features/admin/styles'
import PropTypes         from 'prop-types'
import React, {useContext} from 'react'
import {
    connectHits,
    InstantSearch,
    SearchBox
}                        from 'react-instantsearch-dom'
import Div               from 'shared/Basic/Div'
import GenericCard       from 'shared/Cards/GenericCard'
import {searchContext}   from 'shared/Containers/SearchController'

const List = ({places}) => {
    const {searchClient} = useContext(searchContext)

    const Hits = connectHits(
        ({hits}) =>
            <>
                {hits && hits.map((place) =>
                    <Div
                        key={place.slug}
                        theme={adminPlaceCardWrapperStyle}
                    >
                        <GenericCard
                            slug={`places/update/${place.slug}`}
                            name={place.name}
                            photo={place.photo}
                            theme={adminPlaceCardStyle}
                        />
                    </Div>
                )}
            </>
    )

    console.log('places', places)



    return (
        <InstantSearch
            indexName="Places"
            searchClient={searchClient}
            stalledSearchDelay={500}
        >
            <Div theme={searchWrapperStyle}>
                <SearchBox
                    searchAsYouType={false}
                    autoFocus
                />
                <AdminCreateButton url={'/create/place'}/>
            </Div>
            <Div theme={adminPlacesInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}


List.propTypes = {
    places: PropTypes.array.isRequired
}

export default List