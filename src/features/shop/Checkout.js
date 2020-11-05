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
import {genericButtonStyle} from '../../themes/elements'
import {
    checkoutAddress,
    checkoutDropIn
}                           from '../../themes/shop'


const Checkout = ({products}) => {
    const dispatch = useDispatch()
    const [dropInInstance, setDropInInstance] = useState({})
    const [address, setAddress] = useState('')
    const {_id, token} = useSelector(state => state.user)
    const {braintreeClientToken} = useSelector(state => state.shop)
    const {isAuthenticated} = useSelector(state => state.user)

    useEffect(() => {
        dispatch({type: 'shop/getBraintreeToken', payload: {_id, token}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id, token])


    const handleAddress = address => {
        setAddress(address)
    }

    const getTotal = () =>
        products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price
        }, 0)


    const buy = () => {
        dispatch({
            type: 'shop/getPaymentNonce',
            payload: {
                _id: _id,
                token: token,
                dropInInstance: dropInInstance,
                amount: getTotal(products),
                products: products,
                deliveryAddress: address
            }
        })
    }

    return (
        <Div>
            <h2>Total: ${getTotal()}</h2>
            <Div theme={checkoutDropIn}>
                {(!!braintreeClientToken && products.length > 0) && (
                    <>
                        <Div>
                            <label>Delivery Address</label>
                            <PlacesAutocomplete
                                value={address || ''}
                                onChange={handleAddress}
                                onSelect={handleAddress}
                                placeholder="Type your delivery Address"
                            >
                                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                    <div>
                                        <Div theme={checkoutAddress}>
                                            <input
                                                value={address}
                                                {...getInputProps({
                                                    placeholder: 'Your Address ...',
                                                    className: 'location-search-input',
                                                })}
                                            />
                                        </Div>
                                        <div className="autocomplete-dropdown-container">
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item'
                                                // inline style for demonstration purpose
                                                const style = suggestion.active
                                                    ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                                    : {backgroundColor: '#ffffff', cursor: 'pointer'}
                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>
                        </Div>

                        <DropIn
                            options={{
                                authorization: braintreeClientToken,
                                paypal: {
                                    flow: 'vault'
                                }
                            }}
                            onInstance={instance => setDropInInstance(instance)}
                        />

                        <Div
                            as="button"
                            theme={genericButtonStyle}
                            onClick={!!address ? buy : null}
                        >
                            Pay
                        </Div>

                    </>
                )}
            </Div>
        </Div>
    )
}

export default Checkout
