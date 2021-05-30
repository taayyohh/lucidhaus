import 'braintree-web'
import {checkoutPurchaseButtonStyle} from 'features/shop/views/styles'
import {AnimatePresence}             from 'framer-motion'
import PropTypes                     from 'prop-types'
import React, {
    useEffect,
    useState
}                                    from 'react'
import {
    useDispatch,
    useSelector
}                                    from 'react-redux'
import Button                        from 'shared/Basic/Button'
import Div                           from 'shared/Basic/Div'
import MotionDiv                     from 'shared/Basic/MotionDiv'
import {
    fadeIn,
    nOpacity
}                                    from 'shared/Layout/styles/animations'
import {getTotal}                    from 'utils/cartHelpers'
import Payment                       from './Payment'
import ShippingAddress               from './ShippingAddress'
import {checkoutDropIn}              from './styles'

const Checkout = ({cart}) => {
    const dispatch = useDispatch()
    const [dropInInstance, setDropInInstance] = useState({})
    const {_id, token} = useSelector(state => state.user)
    const {braintreeClientToken, deliveryAddress, billingAddress} = useSelector(state => state.shop)

    useEffect(() => {
        dispatch({
            type: 'shop/getBraintreeToken'
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const purchase = () =>
        dispatch({
            type: 'shop/getPaymentNonce',
            payload: {
                _id: _id,
                token: token,
                dropInInstance: dropInInstance,
                amount: getTotal(cart),
                products: cart,
                deliveryAddress: deliveryAddress,
                billingAddress: billingAddress,
                user: _id || undefined
            }
        })

    return (
        <Div theme={checkoutDropIn}>
            {(!!braintreeClientToken && cart.length > 0) && (
                <AnimatePresence>
                    <MotionDiv initial={nOpacity} animate={fadeIn}>
                        <ShippingAddress/>
                        <Payment
                            braintreeClientToken={braintreeClientToken}
                            setDropInInstance={setDropInInstance}
                        />
                        {deliveryAddress && (
                            <Button
                                onClick={purchase}
                                children={'Purchase'}
                                theme={checkoutPurchaseButtonStyle}
                            />
                        )}
                    </MotionDiv>
                </AnimatePresence>
            )}
        </Div>
    )
}

Checkout.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Checkout
