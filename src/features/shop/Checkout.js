import 'braintree-web'
import DropIn               from 'braintree-web-drop-in-react'
import React, {
    useEffect,
    useState
}                           from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import DeliveryAddress      from 'features/shop/DeliveryAddress'
import Div                  from 'shared/Basic/Div'
import H2                   from 'shared/Basic/H2'
import {genericButtonStyle} from 'shared/Controls/styles'
import {getTotal}           from 'utils/cartHelpers'
import {
    cartTitleStyle,
    checkoutDropIn
}                           from './styles'


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
                <>
                    <Div>
                        <H2 theme={cartTitleStyle}>Checkout</H2>
                        <DeliveryAddress/>

                    </Div>

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

                    {deliveryAddress && (
                        <Div
                            as="button"
                            theme={genericButtonStyle}
                            onClick={purchase}
                        >
                            Pay
                        </Div>
                    )}


                </>
            )}
        </Div>
    )
}

export default Checkout
