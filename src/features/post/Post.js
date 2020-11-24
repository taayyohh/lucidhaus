import React, {useEffect}    from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import MotionDiv             from '../../shared/Basic/MotionDiv'
import RichText              from '../../shared/Basic/RichText'
import S3Img                 from '../../shared/Basic/S3Img'
import {
    genericCardDetailImageWrapperStyle,
    genericCardImageStyle
}                            from '../../shared/Cards/styles'
import {contentWrapperStyle} from '../../shared/Layout/styles'
import {
    postStyle,
    postWrapperStyle
}                            from './styles'


const Post = () => {
    const dispatch = useDispatch()
    const {post} = useSelector(state => state.post)
    const {slug} = useSelector(state => state.site)
    const {name, description, photo} = post

    useEffect(() => {
        dispatch({type: 'post/getPost', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log('id', post._id)


    return (
        <MotionDiv theme={contentWrapperStyle}>
            <MotionDiv
                theme={postWrapperStyle}
            >
            </MotionDiv>
            <MotionDiv
              //  layoutId={`${post._id}-image`}
                theme={genericCardDetailImageWrapperStyle}
            >
                <S3Img
                    url={photo}
                    alt={name}
                    theme={genericCardImageStyle}
                />
            </MotionDiv>
            <MotionDiv
                theme={postStyle.name}
                layoutId={`${post._id}-name`}
            >
                {name}
                <RichText children={description}/>
            </MotionDiv>
        </MotionDiv>
    )
}

export default Post