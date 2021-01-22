import {quantityFields} from 'config/fields'
import React            from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import Div                     from 'shared/Basic/Div'
import {productCardCountStyle} from 'shared/Cards/styles'
import Form                    from 'shared/Field/Form'
import {genericButtonStyle}    from './styles'

const AddToCartButton = ({product}) => {
    const dispatch = useDispatch()
    const {cart} = useSelector(state => state.shop)
    const itemInCart = cart.filter((p) => p._id === product._id)
    const inCart = itemInCart.length > 0

    return (
        <>
            {(!inCart && (
                <Div
                    as="button"
                    theme={genericButtonStyle}
                    onClick={() => {
                        dispatch({
                            type: 'shop/addToCart',
                            payload: product
                        })
                        //  setPanel('cart-menu-panel')
                    }}
                >
                    Add to cart
                </Div>
            )) || (
                <Form
                    initialValues={{
                        count: itemInCart[0].count,
                        productId: product._id
                    }}
                    fields={quantityFields}
                    theme={productCardCountStyle}
                    enableReinitialize={true}
                    dispatchAction={'shop/updateProductQuantity'}
                    autoSubmit
                />
            )}
        </>

    )
}

export default AddToCartButton