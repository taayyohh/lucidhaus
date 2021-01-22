import AdminCreateButton from 'features/admin/AdminCreateButton'
import {
    adminAlbumCardStyle,
    adminAlbumCardWrapperStyle,
    adminAlbumsInnerWrapperStyle,
    adminArtistCardStyle,
    searchWrapperStyle
}                          from 'features/admin/styles'
import PropTypes from 'prop-types'
import React, {
    useContext,
    useEffect
}                from 'react'
import {
    connectHits,
    InstantSearch,
    SearchBox
}                from 'react-instantsearch-dom'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import Div                 from 'shared/Basic/Div'
import GenericCard         from 'shared/Cards/GenericCard'
import {searchContext}     from 'shared/Containers/SearchController'
import {getNameById}       from 'utils/helpers'

const List = ({albums}) => {
    const {searchClient} = useContext(searchContext)
    const {artists} = useSelector(state => state.artist)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch({type: 'artist/getArtists'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const Hits = connectHits(
        ({hits}) =>
            <>
                {hits && hits.map((album) =>
                    <Div
                        key={album.slug}
                        theme={adminAlbumCardWrapperStyle}
                    >
                        <GenericCard
                            slug={`music/update/${album.slug}`}
                            name={album.albumName}
                            photo={album.coverArt}
                            theme={adminAlbumCardStyle}
                            artist={getNameById(artists, album.primaryArtist)}
                        />
                    </Div>
                )}
            </>
    )

    return (
        <InstantSearch
            indexName="Albums"
            searchClient={searchClient}
            stalledSearchDelay={500}
        >
            <Div theme={searchWrapperStyle}>
                <SearchBox
                    searchAsYouType={false}
                    autoFocus
                />
                <AdminCreateButton url={'/create/album'}/>
            </Div>
            <Div theme={adminAlbumsInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}


List.propTypes = {
    albums: PropTypes.array.isRequired
}

export default List