import {quantityFields}  from 'config/fields'
import {AnimatePresence} from 'framer-motion'
import PropTypes         from 'prop-types'
import React             from 'react'
import Div               from 'shared/Basic/Div'
import LinkSwitch        from 'shared/Basic/LinkSwitch'
import MotionDiv         from 'shared/Basic/MotionDiv'
import S3Img             from 'shared/Basic/S3Img'
import Span from 'shared/Basic/Span'
import Form from 'shared/Field/Form'
import {
    fadeIn,
    fadeOut,
    nOpacity
}           from 'shared/Layout/styles/animations'
import {
    productCardControlsStyle,
    productCardCountStyle,
    productCardImageStyle,
    productCardInfoStyle,
    productCardPriceStyle,
    productCardStyle,
    productCardTextWrapperStyle,
    productCardTitleStyle
}                        from './styles'


const CartItemCard = ({product, theme}) =>
    <AnimatePresence>
        <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
            <Div theme={{...productCardStyle, ...theme}}>
                <Div theme={{...productCardInfoStyle, ...theme.info}}>
                    <S3Img
                        url={product.photo}
                        theme={{...productCardImageStyle, ...theme.image}}
                        alt={`${product.name} product photo`}
                    />
                    <Div theme={productCardTextWrapperStyle}>
                        <LinkSwitch url={`/shop/${product.slug}`} theme={{...productCardTitleStyle, ...theme.title}}>
                            {product.name}
                        </LinkSwitch>
                        <Span theme={{...productCardPriceStyle, ...theme.price}}>
                            $: {product.price}
                        </Span>
                    </Div>
                </Div>

                <Div theme={{...productCardControlsStyle, ...theme.controls}}>
                    <Form
                        initialValues={{
                            count: product.count,
                            productId: product._id
                        }}
                        fields={quantityFields}
                        theme={productCardCountStyle}
                        autoSubmit
                        enableReinitialize={true}
                        dispatchAction={'shop/updateProductQuantity'}
                    />
                </Div>
            </Div>
        </MotionDiv>
    </AnimatePresence>

CartItemCard.propTypes = {
    theme: PropTypes.object,
    product: PropTypes.object.isRequired
}

CartItemCard.defaultProps = {
    theme: {},
}

export default CartItemCard