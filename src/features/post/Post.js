import {AnimatePresence}       from 'framer-motion'
import React, {useEffect}      from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import Div                     from 'shared/Basic/Div'
import MotionDiv               from 'shared/Basic/MotionDiv'
import RichText                from 'shared/Basic/RichText'
import S3Img                   from 'shared/Basic/S3Img'
import {genericCardImageStyle} from 'shared/Cards/styles'
import ContentWrapper          from 'shared/Layout/ContentWrapper'
import {
    fadeIn,
    fadeOut,
    nOpacity
}                              from 'shared/variables'
import {center}                from 'utils/themer'
import {
    postDescriptionStyle,
    postTitleStyle,
    postWrapperStyle
}                              from './styles'

const Post = () => {
    const dispatch = useDispatch()
    const {post} = useSelector(state => state.post)
    const {slug} = useSelector(state => state.site)
    const {name, description, photo} = post

    useEffect(() => {
        dispatch({type: 'post/getPost', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
    }, [post])

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <ContentWrapper>
                    <MotionDiv theme={postWrapperStyle}>
                        <MotionDiv theme={postTitleStyle}>
                            {name}
                        </MotionDiv>
                        <Div theme={{display: 'flex', justifyContent: center}}>
                            <S3Img
                                url={photo}
                                alt={name}
                                theme={genericCardImageStyle}
                            />
                        </Div>
                        <RichText
                            children={description}
                            theme={postDescriptionStyle}
                        />
                    </MotionDiv>
                </ContentWrapper>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Post