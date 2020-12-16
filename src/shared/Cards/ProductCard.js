import {countField}         from 'config/fields'
import React                from 'react'
import {useDispatch}        from 'react-redux'
import Div                  from 'shared/Basic/Div'
import LinkSwitch           from 'shared/Basic/LinkSwitch'
import S3Img                from 'shared/Basic/S3Img'
import Span                 from 'shared/Basic/Span'
import RemoveFromCartButton from 'shared/Controls/RemoveFromCartButton'
import GenericFormik        from 'shared/Forms/GenericFormik'
import {
    productCardCountStyle,
    productCardStyle
}                           from './styles'


const ProductCard = ({product, theme}) => {
    const dispatch = useDispatch()

    return (
        <Div theme={productCardStyle}>
            <Div theme={productCardStyle.infoWrapper}>
                <S3Img
                    url={product.photo}
                    theme={{...productCardStyle.image, ...theme.image}}
                    alt={`${product.name} product photo`}
                />
                <Div theme={productCardStyle.textWrapper}>
                    <LinkSwitch url={`shop/${product.slug}`} theme={{...productCardStyle.title, ...theme.title}}>
                        {product.name}
                    </LinkSwitch>
                    <Span theme={{...productCardStyle.price, ...theme.price}}>
                        $: {product.price}
                    </Span>
                </Div>
            </Div>


            <Div theme={{...productCardStyle.controls, ...theme.controls}}>
                <GenericFormik
                    initialValues={{
                        count: product.count,
                        productId: product._id
                    }}
                    fields={countField}
                    theme={productCardCountStyle}
                    autoSubmit
                    enableReinitialize={true}
                />
                <RemoveFromCartButton productId={product._id}/>
            </Div>
        </Div>
    )
}

ProductCard.defaultProps = {
    theme: {},
}

export default ProductCard