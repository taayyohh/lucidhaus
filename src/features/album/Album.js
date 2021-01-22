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
    getNameById
}                               from 'utils/helpers'
import {center}                 from 'utils/themer'
import {
    albumTitleStyle,
    albumWrapperStyle
}                               from './styles'


const Album = () => {
    const dispatch = useDispatch()
    const {album} = useSelector(state => state.album)
    const {slug} = useSelector(state => state.site)
    const {artists} = useSelector(state => state.artist)
    const {albumName, primaryArtist, description, coverArt, songs} = album
    const {currentMedia, setCurrentMedia, setPlaying} = useContext(playerContext)


    useEffect(() => {
        dispatch({type: 'album/getAlbum', payload: {slug: slug}})
        dispatch({type: 'artist/getArtists'})


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: albumName,
                description,
                image: coverArt,
                imageAlt: `${albumName} Product Photo`
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [album])

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <ContentWrapper>
                    <MotionDiv theme={albumWrapperStyle}>
                        <MotionDiv theme={albumTitleStyle}>
                            {albumName}
                        </MotionDiv>
                        <LinkSwitch url={`/artists/${getById(artists, primaryArtist)?.slug}`}>
                            {getNameById(artists, primaryArtist)}
                        </LinkSwitch>
                        <Div theme={{display: 'flex', justifyContent: center}}>
                            <S3Img
                                url={coverArt}
                                alt={albumName}
                                theme={genericCardImageStyle}
                            />
                            <Div>
                                {songs && songs.map((s) => (
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
                                                _id: s._id
                                            }])
                                            await setPlaying(true)
                                        }}
                                    >
                                        <Div theme={{display: 'flex', flexDirection: 'column'}}>
                                            {s.trackNumber}
                                            {s.title}
                                        </Div>
                                    </Div>
                                ))}
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
    )
}

export default Album