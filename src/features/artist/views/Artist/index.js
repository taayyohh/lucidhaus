import {AnimatePresence}                                                                       from 'framer-motion'
import React, {useEffect}                                                                      from 'react'
import {useDispatch, useSelector}                                                              from 'react-redux'
import Div                                                                                     from 'shared/Basic/Div'
import MotionDiv
                                                                                               from 'shared/Basic/MotionDiv'
import RichText
                                                                                               from 'shared/Basic/RichText'
import S3Img                                                                                   from 'shared/Basic/S3Img'
import {genericCardImageStyle}                                                                 from 'shared/Cards/styles'
import ContentWrapper
                                                                                               from 'shared/Layout/ContentWrapper'
import {
    fadeIn,
    fadeOut,
    nOpacity
}                                                                                              from 'shared/Layout/styles/animations'
import {artistDescriptionStyle, artistImageWrapperStyle, artistTitleStyle, artistWrapperStyle} from '../styles'

const Artist = () => {
    const dispatch = useDispatch()
    const {artist} = useSelector(state => state.artist)
    const {slug} = useSelector(state => state.site)
    const {name, description, photo} = artist

    useEffect(() => {
        dispatch({type: 'artist/getArtist', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: name,
                description,
                image: photo,
                imageAlt: `${name} Product Photo`
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artist])

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <ContentWrapper>
                    <MotionDiv theme={artistWrapperStyle}>
                        <MotionDiv theme={artistTitleStyle}>
                            {name}
                        </MotionDiv>
                        <Div theme={artistImageWrapperStyle}>
                            <S3Img
                                url={photo}
                                alt={name}
                                theme={genericCardImageStyle}
                            />
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

export default Artist
