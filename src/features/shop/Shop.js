import React, {useEffect}    from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import Div                   from '../../shared/Basic/Div'
import GenericCard           from '../../shared/Cards/GenericCard'
import {shopWrapperStyle}    from './styles'
import {contentWrapperStyle} from '../../shared/Layout/styles'


const Shop = () => {
    const {shop} = useSelector(state => state.shop)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getShop'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={contentWrapperStyle}>
            <Div theme={shopWrapperStyle}>
                {shop && shop.map(shop => (
                    <GenericCard
                        key={shop.slug}
                        slug={`shop/${shop.slug}`}
                        name={shop.name}
                        photo={shop.photo}
                        layoutId={shop._id}
                    />
                ))}
            </Div>
        </Div>
    )
}


export default Shop