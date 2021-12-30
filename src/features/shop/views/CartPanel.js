import {
    cartSummaryIntlDisc,
    cartSummaryLengthStyle,
    cartSummaryStyle,
    cartSummaryTotalStyle
}                                   from 'features/shop/views/styles'
import React, {useEffect, useState} from 'react'
import {useSelector}                from 'react-redux'
import Div                          from 'shared/Basic/Div'
import H2                           from 'shared/Basic/H2'
import Span                         from 'shared/Basic/Span'
import {getTotal}                   from 'utils/cartHelpers'
import Cart                         from './Cart'
import Checkout                     from './Checkout'
import {cartStyle}                  from './styles'

const CartPanel = () => {
    const {cart} = useSelector(state => state.shop)
    const emptyCart = cart.length < 1
    const {deliveryAddress} = useSelector(state => state.shop)
    const isIntl = deliveryAddress?.country?.length > 0 && deliveryAddress?.country !== 'United States'
    const [itemsInCart, setItemsInCart] = useState(0)

    useEffect(() => {
        const sum = cart.reduce((acc = 0, cv) => {
            return acc + cv.count
        }, 0)

        setItemsInCart(sum)
    }, [cart])
    return (
        <Div theme={cartStyle}>
            <Div>
                <Div theme={cartSummaryStyle}>
                    <H2 theme={cartSummaryTotalStyle}>Total: <span>${getTotal(cart, isIntl)}</span></H2>
                    <Span theme={cartSummaryLengthStyle}>{`${itemsInCart}`} item{itemsInCart > 1 ? `s` : ''}</Span>
                    {isIntl && (
                        <Span theme={cartSummaryIntlDisc}>* international shipping costs have been included in the
                            total</Span>
                    )}
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
