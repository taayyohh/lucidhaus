import ShopWrapper        from 'features/shop/ShopWrapper'
import {shopCardStyle}    from 'features/shop/styles'
import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import GenericCard        from 'shared/Cards/GenericCard'
import ContentWrapper     from 'shared/Layout/ContentWrapper'

const Shop = () => {
    const {shop, productCategories} = useSelector(state => state.shop)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getShop'})
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <ShopWrapper>
                {shop && shop.map(
                    product => product.isPublished && (
                        <GenericCard
                            key={product.slug}
                            slug={`shop/${product.slug}`}
                            name={product.name}
                            photo={product.photo}
                            price={product.price}
                            productCategories={productCategories}
                            productCategory={product.category}
                            theme={shopCardStyle}
                        />
                    ))
                }
            </ShopWrapper>
        </ContentWrapper>
    )
}

export default Shop