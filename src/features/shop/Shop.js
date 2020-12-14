import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import Div                from 'shared/Basic/Div'
import ShopCard           from 'shared/Cards/ShopCard'
import ContentWrapper     from 'shared/Layout/ContentWrapper'
import {shopWrapperStyle} from './styles'


const Shop = () => {
    const {shop} = useSelector(state => state.shop)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getShop'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <Div theme={shopWrapperStyle}>
                {shop && shop.map(
                    product => product.isPublished && (
                        <ShopCard
                            key={product.slug}
                            slug={`shop/${product.slug}`}
                            name={product.name}
                            photo={product.photo}
                            price={product.price}
                            layoutId={product._id}
                        />
                    ))
                }
            </Div>
        </ContentWrapper>
    )
}

export default Shop