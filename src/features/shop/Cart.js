import PropTypes       from 'prop-types'
import React           from 'react'
import ProductCard     from 'shared/Cards/ProductCard'
import CheckoutSection from './CheckoutSection'

const Cart = ({cart}) =>
    <CheckoutSection title={'Cart Summary'}>
        {cart.map((product, i) =>
            <ProductCard
                key={i}
                product={product}
            />
        )}
    </CheckoutSection>

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart