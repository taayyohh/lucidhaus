import React                from 'react'
import {useDispatch}        from 'react-redux'
import {productCardStyle}   from '../../themes/product'
import Div                  from '../Basic/Div'
import H2                   from '../Basic/H2'
import S3Img                from '../Basic/S3Img'
import Span                 from '../Basic/Span'
import RemoveFromCartButton from '../Controls/RemoveFromCartButton'


const ProductCard = ({product, theme}) => {
    const dispatch = useDispatch()

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
                        defaultValue={product.count}
                        onChange={(e) => {
                            dispatch({
                                type: 'shop/updateProductQuantity',
                                payload: {
                                    productId: product._id,
                                    count: e.target.value
                                }
                            })
                        }}
                    />
                </Div>

                <RemoveFromCartButton productId={product._id}/>
            </Div>
        </Div>
    )
}

ProductCard.defaultProps = {
    theme: {},
}

export default ProductCard