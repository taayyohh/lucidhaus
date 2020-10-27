import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import Div                from '../../shared/Basic/Div'
import GenericCard        from '../../shared/Cards/GenericCard'
import {postContentStyle} from '../../themes/layout'
import {shopWrapperStyle} from '../../themes/shop'


const Shop = () => {
    const {slug} = useSelector(state => state.site)
    const {shop} = useSelector(state => state.shop)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getShop'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={postContentStyle(slug)}>
            <Div theme={shopWrapperStyle}>
                {shop && shop.map(shop => (
                    <GenericCard
                        key={shop.slug}
                        slug={`shop/${shop.slug}`}
                        name={shop.name}
                        photo={shop.photo}
                    />
                ))}
            </Div>
        </Div>
    )
}


export default Shop