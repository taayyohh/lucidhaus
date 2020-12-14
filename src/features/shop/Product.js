import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import Div                from 'shared/Basic/Div'
import H2                 from 'shared/Basic/H2'
import MotionDiv          from 'shared/Basic/MotionDiv'
import RichText           from 'shared/Basic/RichText'
import S3Img              from 'shared/Basic/S3Img'
import {
    genericCardDetailImageWrapperStyle,
    genericCardImageStyle
}                         from 'shared/Cards/styles'
import AddToCartButton    from 'shared/Controls/AddToCartButton'
import ContentWrapper     from 'shared/Layout/ContentWrapper'
import {getNameById}      from 'utils/getNameById'
import {postTitleStyle}   from '../post/styles'
import {
    productCategoryStyle,
    productDescriptionStyle,
    productPriceStyle,
    productWrapperStyle
}                         from './styles'


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
        <ContentWrapper>
            <Div theme={productWrapperStyle}>
                <Div theme={productCategoryStyle}>{getNameById(productCategories, category)}</Div>
                <H2 theme={postTitleStyle}>{name}</H2>
                <MotionDiv
                    theme={genericCardDetailImageWrapperStyle}
                >
                    <S3Img
                        url={photo}
                        alt={name}
                        theme={genericCardImageStyle}
                    />
                    <Div theme={productPriceStyle}>
                        <Div>{price} <span>USD</span></Div>
                    </Div>
                    <AddToCartButton
                        product={product}
                        dispatchAction={'shop/addToCart'}
                    />
                </MotionDiv>
                <RichText
                    children={description}
                    theme={productDescriptionStyle}
                />
            </Div>
            {/*{relatedProducts && (*/}
            {/*    <Div theme={relatedProductStyle}>*/}
            {/*        {relatedProducts.map((product) =>*/}
            {/*            <ShopCard*/}
            {/*                name={product.name}*/}
            {/*                photo={product.photo}*/}
            {/*                slug={product.slug}*/}
            {/*            />*/}
            {/*        )}*/}
            {/*    </Div>*/}
            {/*)}*/}
        </ContentWrapper>
    )
}

export default Product