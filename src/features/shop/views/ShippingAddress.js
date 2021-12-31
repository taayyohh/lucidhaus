import {orderFields, validateCheckoutAddress} from 'features/shop/admin/order/fields/order'
import CheckoutSection                        from 'features/shop/views/CheckoutSection'
import {shippingAddressStyle}                 from 'features/shop/views/styles'
import React                                  from 'react'
import {useSelector}                          from 'react-redux'
import Form                                   from 'shared/Fields/Form'

const ShippingAddress = () => {
    const {user} = useSelector(state => state.user)
    const {nameFirst, email, tel} = user
    const initialValues = {
        name: nameFirst || '',
        company: '',
        autoAddress: '',
        address: '',
        address2: '',
        city: '',
        zip: '',
        country: '',
        state: '',
        phone: tel || '',
        email: email || ''
    }

    return (
        <CheckoutSection title={'Shipping Address'}>
            <Form
                initialValues={initialValues}
                validationSchema={validateCheckoutAddress}
                fields={orderFields}
                theme={shippingAddressStyle}
                dispatchAction={'shop/updateDeliveryAddress'}
                dispatchOnBlur={true}
                autoSubmit
            />
        </CheckoutSection>
    )
}

export default ShippingAddress
