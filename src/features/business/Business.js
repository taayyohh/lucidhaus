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
    businessStyle,
    businessWrapperStyle
}                            from './styles'


const Business = () => {
    const dispatch = useDispatch()
    const {business} = useSelector(state => state.business)
    const {slug} = useSelector(state => state.site)
    const {name, description, photo} = business

    useEffect(() => {
        dispatch({type: 'business/getBusiness', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <MotionDiv theme={contentWrapperStyle}>
            <MotionDiv
                theme={businessWrapperStyle}
            >
            </MotionDiv>
            <MotionDiv
                layoutId={`${business._id}-image`}
                theme={genericCardDetailImageWrapperStyle}
            >
                <S3Img
                    url={photo}
                    alt={name}
                    theme={genericCardImageStyle}
                />
            </MotionDiv>
            <MotionDiv
                theme={businessStyle.name}
                layoutId={`${business._id}-name`}
            >
                {name}
                <RichText children={description}/>
            </MotionDiv>
        </MotionDiv>
    )
}

export default Business