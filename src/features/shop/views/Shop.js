import ShopWrapper        from 'features/shop/views/ShopWrapper'
import {shopCardStyle}    from 'features/shop/views/styles'
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

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'The Hypha Beta FilteredShop',
                description: 'Welcome to the shop.'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shop])


    return (
        <ContentWrapper>
            <ShopWrapper>
                {shop && shop.map(
                    (product, i) => product.isPublished && product.quantity > 0 && (
                        <GenericCard
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
