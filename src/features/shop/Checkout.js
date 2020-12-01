import 'braintree-web'
import DropIn               from 'braintree-web-drop-in-react'
import React, {
    useEffect,
    useState
}                           from 'react'
import PlacesAutocomplete   from 'react-places-autocomplete'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import Div                  from '../../shared/Basic/Div'
import H2                   from '../../shared/Basic/H2'
import {genericButtonStyle} from '../../shared/Controls/styles'
import {getTotal}           from '../../utils/cartHelpers'
import {
    cartTitleStyle,
    checkoutAddress,
    checkoutDropIn
}                           from './styles'


const Checkout = ({products}) => {
    const dispatch = useDispatch()
    const [dropInInstance, setDropInInstance] = useState({})
    const [address, setAddress] = useState('')
    const {_id, token, email, name} = useSelector(state => state.user)
    const {braintreeClientToken} = useSelector(state => state.shop)
    const {isAuthenticated} = useSelector(state => state.user)

    useEffect(() => {
        if (isAuthenticated)
            dispatch({type: 'shop/getBraintreeToken', payload: {_id, token}})

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
                        <PlacesAutocomplete
                            value={address || ''}
                            onChange={(handleAddress)}
                            onSelect={handleAddress}
                            placeholder="Type your delivery Address"
                        >
                            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                <>
                                    <Div theme={checkoutAddress}>
                                        <input
                                            value={address}
                                            {...getInputProps({
                                                placeholder: 'Your Address ...',
                                                className: 'location-search-input',
                                            })}
                                        />
                                    </Div>
                                    <Div>
                                        {suggestions.map(suggestion =>
                                            <Div
                                                {...getSuggestionItemProps(suggestion)}
                                                key={suggestion.placeId}
                                                className={
                                                    suggestion.active
                                                        ? 'suggestion-item--active'
                                                        : 'suggestion-item'
                                                }
                                                theme={
                                                    suggestion.active
                                                        ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                                        : {backgroundColor: '#ffffff', cursor: 'pointer'}
                                                }
                                                children={suggestion.description}
                                            />
                                        )}
                                    </Div>
                                </>
                            )}
                        </PlacesAutocomplete>
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
