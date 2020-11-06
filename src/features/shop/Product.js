import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import Div                from '../../shared/Basic/Div'
import H2                 from '../../shared/Basic/H2'
import RichText           from '../../shared/Basic/RichText'
import S3Img              from '../../shared/Basic/S3Img'
import AddToCartButton    from '../../shared/Controls/AddToCartButton'
import {
    businessStyle,
    businessWrapperStyle,
    genericCardImageStyle
}                         from '../../themes/business'
import {postContentStyle} from '../../themes/layout'
import {getNameById}      from '../../utils/getNameById'


const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.shop)
    const {slug} = useSelector(state => state.site)
    const {name, description, photo, price, category} = product
    const {productCategories} = useSelector(state => state.shop)

    useEffect(() => {
        dispatch({type: 'shop/getProduct', payload: {slug: slug}})
        dispatch({type: 'shop/getRelatedProducts', payload: {slug: slug}})
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Div theme={postContentStyle(slug)}>
            <Div theme={businessWrapperStyle}>
                <Div>{getNameById(productCategories, category)}</Div>
                <H2 theme={businessStyle.title}>{name}</H2>
                <Div> price: {price}</Div>
                <S3Img
                    url={photo}
                    alt={name}
                    theme={genericCardImageStyle}
                />
                <RichText children={description}/>
                <AddToCartButton
                    product={product}
                    dispatchAction={'shop/addToCart'}
                />

            </Div>
        </Div>
    )
}

export default Product