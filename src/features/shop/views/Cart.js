import PropTypes       from 'prop-types'
import React           from 'react'
import CartItemCard    from 'shared/Cards/CartItemCard'
import CheckoutSection from './CheckoutSection'

const Cart = ({cart}) =>
    <CheckoutSection title={'Cart Summary'}>
        {cart.map((product, i) =>
            <CartItemCard
                key={i}
                product={product}
            />
        )}
    </CheckoutSection>

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart