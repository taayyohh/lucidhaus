import DropIn          from 'braintree-web-drop-in-react'
import CheckoutSection from 'features/shop/CheckoutSection'
import React           from 'react'

const Payment = ({braintreeClientToken, setDropInInstance}) =>
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

export default Payment