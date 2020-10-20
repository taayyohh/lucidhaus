import React, {useState}    from 'react'
import {Redirect}           from 'react-router-dom'
import Div                  from '../shared/Basic/Div'
import H2                   from '../shared/Basic/H2'
import Span                 from '../shared/Basic/Span'
import LinkSwitch           from '../shared/Basic/LinkSwitch'
import {genericButtonStyle} from '../themes/elements'
import {
    productCardStyle
}                           from '../themes/product'
import {
    addItem,
    removeItem,
    updateItem
}              from './cartHelpers'
import S3Image from './S3Image'


const ProductCard = ({
                         product,
                         showViewProductButton = true,
                         showAddToCartButton = true,
                         cartUpdate = false,
                         showRemoveProductButton = false,
                         setRun = f => f,
                         run = undefined,
                         theme
                     }) => {

    const [redirect, setRedirect] = useState(false)
    const [count, setCount] = useState(product.count)


    const addToCart = () => {
        addItem(product, () => {
            setRedirect(true)
        })
    }

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart"/>
        }
    }

    const showAddToCart = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <Div
                    as="button"
                    theme={genericButtonStyle}
                    onClick={(e) => {
                        e.stopPropagation()
                        addToCart()
                    }}
                >
                    Add to cart
                </Div>
            )
        )
    }

    const showRemoveButton = showRemoveProductButton => {
        return (
            showRemoveProductButton && (
                <Div as="button" theme={genericButtonStyle}
                     onClick={() => {
                         removeItem(product._id)
                         setRun(!run) // run useEffect in parent Cart
                     }}
                >
                    Remove Product
                </Div>
            )
        )
    }


    // const showStock = (quantity) => {
    //     return quantity > 0 ? (<span>in stock</span>) : (<span> out of stock</span>)
    // }

    const handleChange = productId => event => {
        setRun(!run) // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value)
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value)
        }
    }

    const showCartUpdateOptions = cartUpdate => {
        return cartUpdate && (
            <Div>
                <Div>
                    <span>Adjust Quantity</span>
                </Div>
                <input
                    type="number"
                    value={count}
                    onChange={handleChange(product._id)}
                />
            </Div>
        )
    }

    return (
        <LinkSwitch url={`shop/${product.slug}`} theme={productCardStyle}>
            <Div theme={{...productCardStyle.inner, ...theme.inner}}>
                <H2 theme={{...productCardStyle.title, ...theme.title}}>
                    {product.name}
                </H2>
                {shouldRedirect(redirect)}
                <S3Image
                    item={product}
                    url="product"
                    theme={{...productCardStyle.image, ...theme.image}}
                />
                <Div
                    theme={{...productCardStyle.description, ...theme.description}}>
                    {/*{parseHtml(product.description)}*/}
                </Div>
                <Span theme={{...productCardStyle.price, ...theme.price}}>
                        $: {product.price}
                    </Span>
                <Div theme={{...productCardStyle.controls, ...theme.controls}}>
                    {showAddToCart(showAddToCartButton)}
                    {showCartUpdateOptions(cartUpdate)}
                    {showRemoveButton(showRemoveProductButton)}
                </Div>
            </Div>
        </LinkSwitch>
    )
}

ProductCard.defaultProps = {
    theme: {},
}

export default ProductCard