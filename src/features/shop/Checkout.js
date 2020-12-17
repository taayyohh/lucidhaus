import 'braintree-web'
import DropIn            from 'braintree-web-drop-in-react'
import CheckoutSection   from 'features/shop/CheckoutSection'
import {AnimatePresence} from 'framer-motion'
import React, {
    useEffect,
    useState
}                        from 'react'
import {
    useDispatch,
    useSelector
}                        from 'react-redux'
import Button            from 'shared/Basic/Button'
import Div               from 'shared/Basic/Div'
import MotionDiv         from 'shared/Basic/MotionDiv'
import {getTotal}       from 'utils/cartHelpers'
import ShippingAddress  from './DeliveryAddress'
import {checkoutDropIn} from './styles'


const Checkout = ({products}) => {
    const dispatch = useDispatch()
    const [dropInInstance, setDropInInstance] = useState({})
    const {_id, token, email, name} = useSelector(state => state.user)
    const {braintreeClientToken, deliveryAddress, billingAddress} = useSelector(state => state.shop)
    const {isAuthenticated} = useSelector(state => state.user)

    useEffect(() => {
        if (isAuthenticated)
            dispatch({
                type: 'shop/getBraintreeToken',
                payload: {_id, token}
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id, token])


    const purchase = () => {
        dispatch({
            type: 'shop/getPaymentNonce',
            payload: {
                _id: _id,
                token: token,
                dropInInstance: dropInInstance,
                amount: getTotal(products),
                products: products,
                deliveryAddress: deliveryAddress,
                billingAddress: billingAddress,
                user: {
                    email: email,
                    name: name
                }
            }
        })
    }

    return (
        <Div theme={checkoutDropIn}>
            {(!!braintreeClientToken && products.length > 0) && (
                <AnimatePresence>
                    <MotionDiv initial={{height: 0, opacity: 0}} animate={{height: 'auto', opacity: 1}}>
                        <CheckoutSection title={'Shipping Address'}>
                            <ShippingAddress/>
                        </CheckoutSection>
                        <CheckoutSection title={'Payment'}>
                            <DropIn
                                options={{
                                    authorization: braintreeClientToken,
                                    paypal: {
                                        flow: 'vault'
                                    },
                                    applePay: {},
                                    samsungPay: {},
                                    googlePay: {},
                                    venmo: true
                                }}
                                onInstance={instance => setDropInInstance(instance)}
                            />
                        </CheckoutSection>
                        <Button
                            onClick={purchase}
                            children={'Purchase'}
                        />
                    </MotionDiv>
                </AnimatePresence>
            )}
        </Div>
    )
}

export default Checkout
