import {quantityField} from 'config/fields'
import React           from 'react'
import Div             from 'shared/Basic/Div'
import LinkSwitch      from 'shared/Basic/LinkSwitch'
import S3Img           from 'shared/Basic/S3Img'
import Span            from 'shared/Basic/Span'
import GenericFormik   from 'shared/Forms/GenericFormik'
import {
    productCardControlsStyle,
    productCardCountStyle,
    productCardImageStyle,
    productCardInfoStyle,
    productCardPriceStyle,
    productCardStyle,
    productCardTextWrapperStyle,
    productCardTitleStyle
}                      from './styles'


const ProductCard = ({product, theme}) =>
    <Div theme={{...productCardStyle, ...theme}}>
        <Div theme={{...productCardInfoStyle, ...theme.info}}>
            <S3Img
                url={product.photo}
                theme={{...productCardImageStyle, ...theme.image}}
                alt={`${product.name} product photo`}
            />
            <Div theme={productCardTextWrapperStyle}>
                <LinkSwitch url={`shop/${product.slug}`} theme={{...productCardTitleStyle, ...theme.title}}>
                    {product.name}
                </LinkSwitch>
                <Span theme={{...productCardPriceStyle, ...theme.price}}>
                    $: {product.price}
                </Span>
            </Div>
        </Div>

        <Div theme={{...productCardControlsStyle, ...theme.controls}}>
            <GenericFormik
                initialValues={{
                    count: product.count,
                    productId: product._id
                }}
                fields={quantityField}
                theme={productCardCountStyle}
                autoSubmit
                enableReinitialize={true}
                dispatchAction={'shop/updateProductQuantity'}
            />
        </Div>
    </Div>


ProductCard.defaultProps = {
    theme: {},
}

export default ProductCard