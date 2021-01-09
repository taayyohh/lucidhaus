import {
    orderFields,
    validateCheckoutAddress
}                             from 'config/fields/order'
import CheckoutSection        from 'features/shop/CheckoutSection'
import {shippingAddressStyle} from 'features/shop/styles'
import React                  from 'react'
import Form                   from 'shared/Forms/Form'

const ShippingAddress = () => {
    const initialValues = {
        company: '',
        autoAddress: '',
        address: '',
        address2: '',
        city: '',
        zip: '',
        country: '',
        state: '',
        phone: '',
    }

    return (
        <CheckoutSection title={'Shipping Address'}>
            <Form
                initialValues={initialValues}
                validationSchema={validateCheckoutAddress}
                fields={orderFields}
                theme={shippingAddressStyle}
                dispatchAction={'shop/updateDeliveryAddress'}
                autoSubmit
            />
        </CheckoutSection>
    )
}

export default ShippingAddress