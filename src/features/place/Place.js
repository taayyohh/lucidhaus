import {placeImageWrapperStyle} from 'features/place/styles'
import {AnimatePresence}         from 'framer-motion'
import React, {useEffect}        from 'react'
import {
    useDispatch,
    useSelector
}                                from 'react-redux'
import Div                       from 'shared/Basic/Div'
import MotionDiv                 from 'shared/Basic/MotionDiv'
import RichText                  from 'shared/Basic/RichText'
import S3Img                     from 'shared/Basic/S3Img'
import {genericCardImageStyle}   from 'shared/Cards/styles'
import ContentWrapper            from 'shared/Layout/ContentWrapper'
import {
    fadeIn,
    fadeOut,
    nOpacity
}                                from 'shared/Layout/styles/animations'
import {
    placeDescriptionStyle,
    placeTitleStyle,
    placeWrapperStyle
}                                from './styles'

const Place = () => {
    const dispatch = useDispatch()
    const {place} = useSelector(state => state.place)
    const {slug} = useSelector(state => state.site)
    const {name, description, photo} = place

    useEffect(() => {
        dispatch({type: 'place/getPlace', payload: {slug: slug}})

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
    }, [place])

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <ContentWrapper>
                    <MotionDiv theme={placeWrapperStyle}>
                        <MotionDiv theme={placeTitleStyle}>
                            {name}
                        </MotionDiv>
                        <Div theme={placeImageWrapperStyle}>
                            <S3Img
                                url={photo}
                                alt={name}
                                theme={genericCardImageStyle}
                            />
                        </Div>
                        <RichText
                            children={description}
                            theme={placeDescriptionStyle}
                        />
                    </MotionDiv>
                </ContentWrapper>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Place