import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}               from 'react-redux'
import Div      from '../../shared/Basic/Div'
import H2       from '../../shared/Basic/H2'
import RichText from '../../shared/Basic/RichText'
import S3Image  from '../../Shop/S3Image'
import {
    genericCardImageStyle,
    businessStyle,
    businessWrapperStyle
}                         from '../../themes/business'
import {postContentStyle} from '../../themes/layout'


const Business = () => {
    const dispatch = useDispatch()
    const {business} = useSelector(state => state.business)
    const {slug} = useSelector(state => state.site)
    const {name, description, photo} = business

    useEffect(() => {
        if (slug.length > 0)
            dispatch({type: 'business/getBusiness', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])


    return (
        <Div theme={postContentStyle(slug)}>
            <Div theme={businessWrapperStyle}>
                <H2 theme={businessStyle.title}>{name}</H2>
                <S3Image
                    url={photo}
                    alt={name}
                    theme={genericCardImageStyle}
                />
                <RichText children={description}/>
            </Div>
        </Div>
    )
}

export default Business