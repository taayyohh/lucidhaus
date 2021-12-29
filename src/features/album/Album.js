import {
    albumCollaboratorStyle,
    albumSongActiveIndicatorStyle,
    albumSongTrackNumberStyle
} from 'features/album/styles'
import {artistDescriptionStyle} from 'features/artist/styles'
import {AnimatePresence}        from 'framer-motion'
import React, {
    useContext,
    useEffect
}                               from 'react'
import {
    useDispatch,
    useSelector
}                               from 'react-redux'
import Div                      from 'shared/Basic/Div'
import LinkSwitch               from 'shared/Basic/LinkSwitch'
import MotionDiv                from 'shared/Basic/MotionDiv'
import RichText                 from 'shared/Basic/RichText'
import S3Img                    from 'shared/Basic/S3Img'
import Span                     from 'shared/Basic/Span'
import {genericCardImageStyle}  from 'shared/Cards/styles'
import {playerContext}          from 'shared/Containers/PlayerController'
import ContentWrapper           from 'shared/Layout/ContentWrapper'
import {
    fadeIn,
    fadeOut,
    nOpacity
}                               from 'shared/Layout/styles/animations'
import {
    getById,
    getNameById,
    resolvedPromise
}                               from 'utils/helpers'
import {
    albumInfoWrapperStyle,
    albumPrimaryArtistStyle,
    albumSongsWrapperStyle,
    albumSongWrapperStyle,
    albumTitleStyle,
    albumWrapperImageWrapperStyle,
    albumWrapperInnerStyle,
    albumWrapperStyle
}                               from './styles'

const Album = () => {
    const dispatch = useDispatch()
    const {album} = useSelector(state => state.album)
    const {slug} = useSelector(state => state.site)
    const {artists} = useSelector(state => state.artist)
    const {albumCollaborators} = useSelector(state => state.collaborator)
    const {albumName, primaryArtist, collaborators, description, coverArt, songs} = album
    const {currentMedia, setCurrentMedia, currentMediaIndex, setPlaying} = useContext(playerContext)
    const artist = getById(artists, primaryArtist)

    useEffect(() => {
        dispatch({type: 'album/getAlbum', payload: {slug: slug}})
        dispatch({type: 'artist/getArtists'})
        dispatch({type: 'collaborator/getCollaborators'})


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: albumName,
                description,
                image: coverArt,
                imageAlt: `${albumName} Product Photo`,
                audio: songs && songs[0]?.audio
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [album])

    const queueAlbum = async (songs) => {
        const prepared = []

        await resolvedPromise(
            songs.map((song) =>
                prepared.push({
                    title: song.title,
                    audio: song.audio,
                    trackNumber: song.trackNumber,
                    primaryArtist: getNameById(artists, primaryArtist),
                    primaryArtistSlug: getById(artists, primaryArtist).slug,
                    albumSlug: slug,
                    coverArt: coverArt,
                    _id: song._id
                })
            )
        )
        await resolvedPromise(
            setCurrentMedia([
                ...currentMedia,
                ...prepared
            ])
        )
    }


    return (
        <>
            {album.isPublished && (
                <AnimatePresence>
                    <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                        <ContentWrapper>
                            <MotionDiv theme={albumWrapperStyle}>
                                <Div theme={albumWrapperInnerStyle}>
                                    <Div theme={albumWrapperImageWrapperStyle}>
                                        <S3Img
                                            url={coverArt}
                                            alt={albumName}
                                            theme={genericCardImageStyle}
                                        />
                                    </Div>
                                    <Div theme={albumInfoWrapperStyle}>
                                        <MotionDiv
                                            theme={albumTitleStyle}
                                            onClick={async () => {
                                                await resolvedPromise(queueAlbum(songs))
                                                await setPlaying(true)
                                            }}
                                        >
                                            {albumName}
                                        </MotionDiv>
                                        <Div theme={{display: 'flex'}}>
                                            {artist && (
                                                <LinkSwitch
                                                    url={`/artists/${artist?.slug}`}
                                                    theme={albumPrimaryArtistStyle}
                                                >
                                                    {getNameById(artists, primaryArtist)}
                                                </LinkSwitch>
                                            )}
                                            {collaborators && (
                                                <Div
                                                    theme={albumCollaboratorStyle}
                                                >
                                                    {getNameById(albumCollaborators, collaborators)}
                                                </Div>
                                            )}
                                        </Div>

                                        <Div theme={albumSongsWrapperStyle}>
                                            {songs && songs.map((s) => {
                                                    const isActive = currentMedia[currentMediaIndex]?.audio === s.audio
                                                    return (
                                                        <Div
                                                            key={s.audio}
                                                            onClick={async () => {
                                                                await setCurrentMedia([...currentMedia, {
                                                                    title: s.title,
                                                                    audio: s.audio,
                                                                    trackNumber: s.trackNumber,
                                                                    primaryArtist: getNameById(artists, primaryArtist),
                                                                    primaryArtistSlug: getById(artists, primaryArtist).slug,
                                                                    albumSlug: slug,
                                                                    coverArt: coverArt,
                                                                    _id: s._id
                                                                }])
                                                                await setPlaying(true)
                                                            }}
                                                        >
                                                            <Div
                                                                theme={albumSongWrapperStyle(isActive)}>
                                                                <Div>
                                                                    <Span theme={albumSongTrackNumberStyle}>{s.trackNumber}</Span>
                                                                    <Span>{s.title}</Span>
                                                                </Div>
                                                                {isActive && (
                                                                    <MotionDiv
                                                                        theme={albumSongActiveIndicatorStyle}
                                                                        layoutId={'activeSongIndicator'}
                                                                    />
                                                                )}
                                                            </Div>
                                                        </Div>
                                                    )
                                                }
                                            )}
                                        </Div>
                                    </Div>
                                </Div>
                                <RichText
                                    children={description}
                                    theme={artistDescriptionStyle}
                                />
                            </MotionDiv>
                        </ContentWrapper>
                    </MotionDiv>
                </AnimatePresence>
            )}
        </>

    )
}

export default Album