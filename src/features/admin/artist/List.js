import AdminCreateButton from 'features/admin/AdminCreateButton'
import {
    adminArtistCardStyle,
    adminArtistCardWrapperStyle,
    adminArtistsInnerWrapperStyle,
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

const List = ({artists}) => {
    const {searchClient} = useContext(searchContext)

    const Hits = connectHits(
        ({hits}) =>
            <>
                {hits && hits.map((artist) =>
                    <Div
                        key={artist.slug}
                        theme={adminArtistCardWrapperStyle}
                    >
                        <GenericCard
                            slug={`artists/update/${artist.slug}`}
                            name={artist.name}
                            photo={artist.photo}
                            theme={adminArtistCardStyle}
                        />
                    </Div>
                )}
            </>
    )

    return (
        <InstantSearch
            indexName="Artists"
            searchClient={searchClient}
            stalledSearchDelay={500}
        >
            <Div theme={searchWrapperStyle}>
                <SearchBox
                    searchAsYouType={false}
                    autoFocus
                />
                <AdminCreateButton url={'/create/artist'}/>
            </Div>
            <Div theme={adminArtistsInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}


List.propTypes = {
    artists: PropTypes.array.isRequired
}

export default List