import React                     from 'react'
import {orderFieldTypes}         from 'config/fieldTypes/order'
import {validateCheckoutAddress} from 'config/fieldValidation'
import {checkoutFormStyle}       from 'features/shop/styles'
import GenericFormik             from 'shared/Forms/GenericFormik'

const DeliveryAddress = () => {
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
        <GenericFormik
            initialValues={initialValues}
            validationSchema={validateCheckoutAddress}
            fields={orderFieldTypes}
            theme={checkoutFormStyle}
            dispatchAction={'shop/updateDeliveryAddress'}
            autoSubmit
        />
    )
}

export default DeliveryAddress