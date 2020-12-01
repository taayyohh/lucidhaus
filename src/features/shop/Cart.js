import React         from 'react'
import {useSelector} from 'react-redux'
import Div           from '../../shared/Basic/Div'
import H2            from '../../shared/Basic/H2'
import ProductCard   from '../../shared/Cards/ProductCard'
import {getTotal}    from '../../utils/cartHelpers'
import Checkout      from './Checkout'
import {
    cartStyle,
    cartTitleStyle
}                    from './styles'

const Cart = () => {
    const {cart} = useSelector(state => state.shop)

    return (
        <Div theme={cartStyle}>
            <Div>
                <Div theme={cartStyle.checkOut}>
                    <H2 theme={cartTitleStyle}>Cart Summary</H2>
                    <h2>Total: ${getTotal(cart)}</h2>
                </Div>

                {cart.length > 0 && (
                    <>
                        <Div>Your cart has {`${cart.length}`} items</Div>
                        <Div theme={cartStyle.showItems}>
                            {cart.map((product, i) =>
                                <ProductCard
                                    key={i}
                                    product={product}
                                />
                            )}
                        </Div>
                    </>
                )}

                <Checkout products={cart}/>
            </Div>
        </Div>
    )
}

export default Cart
