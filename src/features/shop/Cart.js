import React         from 'react'
import {useSelector} from 'react-redux'
import Div           from 'shared/Basic/Div'
import H2            from 'shared/Basic/H2'
import ProductCard   from 'shared/Cards/ProductCard'
import {getTotal}    from 'utils/cartHelpers'
import Checkout      from './Checkout'
import {
    cartStyle,
    cartTitleStyle,
    cartTotalWrapperStyle,
    checkoutSectionStyle
}                    from './styles'

const Cart = () => {
    const {cart} = useSelector(state => state.shop)

    return (
        <Div theme={cartStyle}>
            <Div>
                <Div theme={cartTotalWrapperStyle}>
                    <H2>Total: ${getTotal(cart)}</H2>
                    <Div>Your cart has {`${cart.length}`} items</Div>
                </Div>

                {cart.length > 0 && (
                    <Div theme={checkoutSectionStyle}>
                        <H2 theme={cartTitleStyle}>Cart Summary</H2>
                        <Div theme={cartStyle.showItems}>
                            {cart.map((product, i) =>
                                <ProductCard
                                    key={i}
                                    product={product}
                                />
                            )}
                        </Div>
                    </Div>
                )}

                <Checkout products={cart}/>
            </Div>
        </Div>
    )
}

export default Cart
