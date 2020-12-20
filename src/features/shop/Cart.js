import React           from 'react'
import Div             from 'shared/Basic/Div'
import ProductCard     from 'shared/Cards/ProductCard'
import CheckoutSection from './CheckoutSection'
import {cartStyle}     from './styles'

const Cart = ({cart}) =>
    <CheckoutSection title={'Cart Summary'}>
        <Div theme={cartStyle.showItems}>
            {cart.map((product, i) =>
                <ProductCard
                    key={i}
                    product={product}
                />
            )}
        </Div>
    </CheckoutSection>

export default Cart