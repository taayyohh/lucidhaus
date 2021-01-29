import DropIn          from 'braintree-web-drop-in-react'
import CheckoutSection from 'features/shop/CheckoutSection'
import PropTypes       from 'prop-types'
import React           from 'react'

const Payment = ({braintreeClientToken, setDropInInstance}) =>
    <CheckoutSection title={'Payment'}>
        <DropIn
            options={{
                authorization: braintreeClientToken,
                paypal: {
                    flow: 'vault'
                },
                venmo: true
            }}
            onInstance={instance => setDropInInstance(instance)}
        />
    </CheckoutSection>

Payment.propTypes = {
    braintreeClientToken: PropTypes.string.isRequired,
    setDropInInstance: PropTypes.func.isRequired
}

export default Payment