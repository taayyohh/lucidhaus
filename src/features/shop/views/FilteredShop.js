import ShopWrapper                from 'features/shop/views/ShopWrapper'
import {shopCardStyle}            from 'features/shop/views/styles'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import GenericCard                from 'shared/Cards/GenericCard'
import ContentWrapper             from 'shared/Layout/ContentWrapper'

const FilteredShop = () => {
    const {shop, productCategories} = useSelector(state => state.shop)
    const {slug} = useSelector(state => state.site)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!!slug)
            dispatch({
                type: 'shop/getFilteredShop',
                payload: {
                    category: productCategories.filter(cat => cat.slug === slug)[0]?.objectID
                }
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

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
                    product => product.isPublished && product.quantity > 0 && (
                        <GenericCard
                            key={product.slug}
                            slug={`/shop/${product.slug}`}
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

export default FilteredShop
