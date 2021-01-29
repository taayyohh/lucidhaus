import {
    cartSummaryLengthStyle,
    cartSummaryStyle,
    cartSummaryTotalStyle
} from 'features/shop/styles'
import React         from 'react'
import {useSelector} from 'react-redux'
import Div           from 'shared/Basic/Div'
import H2            from 'shared/Basic/H2'
import Span          from 'shared/Basic/Span'
import {getTotal}    from 'utils/cartHelpers'
import Cart          from './Cart'
import Checkout      from './Checkout'
import {cartStyle}   from './styles'

const CartPanel = () => {
    const {cart} = useSelector(state => state.shop)
    const emptyCart = cart.length < 1

    return (
        <Div theme={cartStyle}>
            <Div>
                <Div theme={cartSummaryStyle}>
                    <H2 theme={cartSummaryTotalStyle}>Total: ${getTotal(cart)}</H2>
                    <Div>Your cart has <Span theme={cartSummaryLengthStyle}>{`${cart.length}`}</Span> items</Div>
                </Div>
            </Div>
            <Div>
                {!emptyCart && (
                    <>
                        <Cart cart={cart}/>
                        <Checkout cart={cart}/>
                    </>
                )}
            </Div>
        </Div>
    )
}

export default CartPanel
