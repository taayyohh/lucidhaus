import {albumCardStyle}     from 'features/album/styles'
import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import Div                  from 'shared/Basic/Div'
import GenericCard          from 'shared/Cards/GenericCard'
import ContentWrapper       from 'shared/Layout/ContentWrapper'
import {getNameById}        from 'utils/helpers'
import {albumsWrapperStyle} from './styles'

const Albums = () => {
    const {albums} = useSelector(state => state.album)
    const dispatch = useDispatch()
    const {artists} = useSelector(state => state.artist)

    useEffect(() => {
        dispatch({type: 'album/getAlbums'})
        dispatch({type: 'artist/getArtists'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'Albums',
                description: 'The albums description'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [albums])

    return (
        <ContentWrapper>
            <Div theme={albumsWrapperStyle}>
                {albums && albums?.map(
                    album => album.isPublished && (
                        <GenericCard
                            key={album.slug}
                            slug={`music/${album.slug}`}
                            name={album.albumName}
                            photo={album.coverArt}
                            artist={getNameById(artists, album.primaryArtist)}
                            theme={albumCardStyle}
                        />
                    )
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Albums