import React, {useState}    from 'react'
import {
    removeItem,
    updateItem
}                           from './cartHelpers'
import Div                  from '../../shared/Basic/Div'
import H2                   from '../../shared/Basic/H2'
import LinkSwitch           from '../../shared/Basic/LinkSwitch'
import S3Img                from '../../shared/Basic/S3Img'
import Span                 from '../../shared/Basic/Span'
import {genericButtonStyle} from '../../themes/elements'
import {productCardStyle}   from '../../themes/product'


const ProductCard = ({product, theme}) => {
    const [count, setCount] = useState(product.count)

    const handleChange = productId => event => {
        setCount(event.target.value < 1 ? 1 : event.target.value)
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value)
        }
    }

    return (
        <LinkSwitch url={`shop/${product.slug}`} theme={productCardStyle}>
            <Div theme={{...productCardStyle.inner, ...theme.inner}}>
                <H2 theme={{...productCardStyle.title, ...theme.title}}>
                    {product.name}
                </H2>
                <S3Img
                    url={product.photo}
                    theme={{...productCardStyle.image, ...theme.image}}
                    alt={`${product.name} product photo`}
                />
                <Div
                    theme={{...productCardStyle.description, ...theme.description}}>
                    {/*{parseHtml(product.description)}*/}
                </Div>
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

                    <Div as="button" theme={genericButtonStyle}
                         onClick={() => {
                             removeItem(product._id)
                         }}
                    >
                        Remove Product
                    </Div>

                </Div>
            </Div>
        </LinkSwitch>
    )
}

ProductCard.defaultProps = {
    theme: {},
}

export default ProductCard