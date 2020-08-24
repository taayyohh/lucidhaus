import React, {
    useEffect,
    useState
}                       from 'react'
import {Link}           from 'react-router-dom'
import Div              from '../Basic/Div'
import H2               from '../Basic/H2'
import {
    cartStyle,
    cartTitleStyle
}                       from '../themes/cart'
import {microCardStyle} from '../themes/layout'
import {getCart}        from './cartHelpers'
import Checkout         from './Checkout'
import ProductCard      from './ProductCard'

const Cart = () => {
    const [items, setItems] = useState([])
    const [run, setRun] = useState(false)

    useEffect(() => {
        setItems(getCart())
    }, [run])

    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`} items</h2>
                <hr/>
                <Div theme={cartStyle.showItems}>
                    {items.map((product, i) => (
                        <ProductCard
                            key={i}
                            product={product}
                            showAddToCartButton={false}
                            cartUpdate={true}
                            showRemoveProductButton={true}
                            setRun={setRun}
                            run={run}
                            theme={microCardStyle}
                        />
                    ))}
                </Div>
            </div>
        )
    }

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br/> <Link to="/shop">Continue shopping</Link>
        </h2>
    )

    const cartSummary = () => {
        return (
            <Div>
                <Div theme={cartStyle.checkOut}>
                    <H2 theme={cartTitleStyle}>Cart Summary</H2>
                    <Checkout
                        products={items}
                        setRun={setRun}
                        run={run}
                    />
                </Div>
            </Div>
        )
    }

    return (
        <Div theme={cartStyle}>
            <Div>
                {cartSummary()}
                {items.length > 0 ? showItems(items) : noItemsMessage()}
            </Div>

        </Div>
    )
}

export default Cart
