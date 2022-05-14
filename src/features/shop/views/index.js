import ShopWrapper                from 'features/shop/views/ShopWrapper'
import {shopCardStyle}            from 'features/shop/views/styles'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import ShopCard                   from './ShopCard'

const Shop = () => {
    const {shop, taxonomy} = useSelector(state => state.shop)
    const {productCategories} = taxonomy
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getShop'})
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'LucidHaus Shop',
                description: 'Welcome to the shop.'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shop])


    return (
        <ContentWrapper>
            <ShopWrapper>
                {shop && shop.map(
                    product => product.isPublished && product.quantity > 0 && (
                        <ShopCard
                            key={product.slug}
                            slug={`shop/${product.slug}`}
                            name={product.name}
                            photo={product.photo}
                            price={product.price}
                            productCategories={productCategories}
                            productCategory={product.category}
                            quantity={product.quantity}
                            theme={shopCardStyle}
                        />
                    ))
                }
            </ShopWrapper>
        </ContentWrapper>
    )
}

export default Shop
