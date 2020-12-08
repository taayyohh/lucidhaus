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
import {orderFieldTypes}    from '../../config/fieldTypes/order'
import Div                  from '../../shared/Basic/Div'
import H2                   from '../../shared/Basic/H2'
import {genericButtonStyle} from '../../shared/Controls/styles'
import AutoCompleteAddress  from '../../shared/Forms/AutoCompleteAddress'
import GenericFormik        from '../../shared/Forms/GenericFormik'
import {getTotal}           from '../../utils/cartHelpers'
import {
    cartTitleStyle,
    checkoutDropIn,
    checkoutFormStyle
}                           from './styles'


const Checkout = ({products}) => {
    const dispatch = useDispatch()
    const [dropInInstance, setDropInInstance] = useState({})
    const [address, setAddress] = useState('')
    const {_id, token, email, name} = useSelector(state => state.user)
    const {braintreeClientToken} = useSelector(state => state.shop)
    const {isAuthenticated} = useSelector(state => state.user)

    const initialValues = {
        company: '',
        address: '',
        address2: '',
        city: '',
        zip: '',
        country: '',
        state: '',
        phone: '',
    }

    useEffect(() => {
        if (isAuthenticated)
            dispatch({
                type: 'shop/getBraintreeToken',
                payload: {_id, token}
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id, token])


    const handleAddress = address => {
        setAddress(address)
    }

    const purchase = () => {
        dispatch({
            type: 'shop/getPaymentNonce',
            payload: {
                _id: _id,
                token: token,
                dropInInstance: dropInInstance,
                amount: getTotal(products),
                products: products,
                deliveryAddress: address,
                user: {email: email, name: name}
            }
        })
    }

    return (
        <Div theme={checkoutDropIn}>
            {(!!braintreeClientToken && products.length > 0) && (
                <>
                    <Div>
                        <H2 theme={cartTitleStyle}>Checkout</H2>
                        <label>Delivery Address</label>
                        <AutoCompleteAddress
                            address={address}
                            handleAddress={handleAddress}
                        />
                        <GenericFormik
                            initialValues={initialValues}
                            fields={orderFieldTypes}
                            theme={checkoutFormStyle}
                            submit={false}
                        />
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

                    <Div
                        as="button"
                        theme={genericButtonStyle}
                        onClick={!!address ? purchase : null}
                    >
                        Pay
                    </Div>

                </>
            )}
        </Div>
    )
}

export default Checkout
