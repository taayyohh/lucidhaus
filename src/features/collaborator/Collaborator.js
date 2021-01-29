import {collaboratorImageWrapperStyle} from 'features/collaborator/styles'
import {AnimatePresence}               from 'framer-motion'
import React, {useEffect}              from 'react'
import {
    useDispatch,
    useSelector
}                                      from 'react-redux'
import Div                             from 'shared/Basic/Div'
import MotionDiv                       from 'shared/Basic/MotionDiv'
import S3Img                           from 'shared/Basic/S3Img'
import {genericCardImageStyle}         from 'shared/Cards/styles'
import ContentWrapper                  from 'shared/Layout/ContentWrapper'
import {
    fadeIn,
    fadeOut,
    nOpacity
}                                      from 'shared/Layout/styles/animations'
import {
    collaboratorTitleStyle,
    collaboratorWrapperStyle
}                                      from './styles'

const Collaborator = () => {
    const dispatch = useDispatch()
    const {collaborator} = useSelector(state => state.collaborator)
    const {slug} = useSelector(state => state.site)
    const {name, photo} = collaborator

    useEffect(() => {
        dispatch({type: 'collaborator/getCollaborator', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: name,
                image: photo,
                imageAlt: `${name} Product Photo`
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collaborator])

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <ContentWrapper>
                    <MotionDiv theme={collaboratorWrapperStyle}>
                        <MotionDiv theme={collaboratorTitleStyle}>
                            {name}
                        </MotionDiv>
                        <Div theme={collaboratorImageWrapperStyle}>
                            <S3Img
                                url={photo}
                                alt={name}
                                theme={genericCardImageStyle}
                            />
                        </Div>
                    </MotionDiv>
                </ContentWrapper>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Collaborator