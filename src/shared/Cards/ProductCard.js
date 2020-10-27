import React, {useState}    from 'react'
import Div                  from '../Basic/Div'
import H2                   from '../Basic/H2'
import S3Img                from '../Basic/S3Img'
import Span                 from '../Basic/Span'
import RemoveFromCartButton from '../Controls/RemoveFromCartButton'
import {productCardStyle}   from '../../themes/product'
import {updateItem}         from '../../utils/cartHelpers'


const ProductCard = ({product, theme}) => {
    const [count, setCount] = useState(product.count)

    const handleChange = productId => event => {
        setCount(event.target.value < 1 ? 1 : event.target.value)
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value)
        }
    }

    return (
        <Div theme={productCardStyle}>
            <H2 theme={{...productCardStyle.title, ...theme.title}}>
                {product.name}
            </H2>
            <S3Img
                url={product.photo}
                theme={{...productCardStyle.image, ...theme.image}}
                alt={`${product.name} product photo`}
            />
            <Span theme={{...productCardStyle.price, ...theme.price}}>
                $: {product.price}
            </Span>
            <Div theme={{...productCardStyle.controls, ...theme.controls}}>
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

                <RemoveFromCartButton productId={product._id} />
            </Div>
        </Div>
    )
}

ProductCard.defaultProps = {
    theme: {},
}

export default ProductCard