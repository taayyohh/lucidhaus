import React            from 'react'
import {useSelector}    from 'react-redux'
import Div              from '../../shared/Basic/Div'
import H2          from '../../shared/Basic/H2'
import Checkout    from './Checkout'
import ProductCard from './ProductCard'
import {
    cartStyle,
    cartTitleStyle
}                  from '../../themes/cart'
import {microCardStyle} from '../../themes/layout'

const Cart = () => {
    const {cart} = useSelector(state => state.shop)

    return (
        <Div theme={cartStyle}>
            <Div>
                <Div theme={cartStyle.checkOut}>
                    <H2 theme={cartTitleStyle}>Cart Summary</H2>
                    <Checkout products={cart}/>
                </Div>

                {cart.length > 0 && (
                    <div>
                        <h2>Your cart has {`${cart.length}`} items</h2>
                        <Div theme={cartStyle.showItems}>
                            {cart.map((product, i) => (
                                <ProductCard
                                    key={i}
                                    product={product}
                                    showAddToCartButton={false}
                                    cartUpdate={true}
                                    showRemoveProductButton={true}
                                    theme={microCardStyle}
                                />
                            ))}
                        </Div>
                    </div>
                )}
            </Div>
        </Div>
    )
}

export default Cart
