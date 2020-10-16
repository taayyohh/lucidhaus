import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import Div                from '../../Basic/Div'
import H2                 from '../../Basic/H2'
import RichText           from '../../Basic/RichText'
import S3Image            from '../../Shop/S3Image'
import {
    businessCardImageStyle,
    businessLeftStyle,
    businessStyle,
    businessWrapperStyle
}                         from '../../themes/business'
import {postContentStyle} from '../../themes/layout'


const Business = () => {
    const dispatch = useDispatch()
    const {business} = useSelector(state => state.business)
    const {_id, token} = useSelector(state => state.user)
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
                <Div theme={businessLeftStyle}>
                    <H2 theme={businessStyle.title}>{name}</H2>
                    <S3Image
                        url={photo}
                        alt={name}
                        theme={businessCardImageStyle}
                    />
                </Div>
                <Div>
                    <RichText children={description}/>
                </Div>
            </Div>
        </Div>
    )
}

export default Business