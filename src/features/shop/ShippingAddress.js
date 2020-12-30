import {
    orderFieldTypes,
    validateCheckoutAddress
}                                from 'config/fields/order'
import CheckoutSection           from 'features/shop/CheckoutSection'
import {checkoutFormStyle}       from 'features/shop/styles'
import React                     from 'react'
import GenericFormik             from 'shared/Forms/GenericFormik'

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
            <GenericFormik
                initialValues={initialValues}
                validationSchema={validateCheckoutAddress}
                fields={orderFieldTypes}
                theme={checkoutFormStyle}
                dispatchAction={'shop/updateDeliveryAddress'}
                autoSubmit
            />
        </CheckoutSection>
    )
}

export default ShippingAddress