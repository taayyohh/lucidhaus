import 'braintree-web'
import DropIn             from 'braintree-web-drop-in-react'
import React, {
    useEffect,
    useState
}                         from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import {useSelector} from 'react-redux'
import {emptyCart}   from './cartHelpers'

import {
    createOrder,
    getBraintreeClientToken,
    processPayment
}                           from '../../services/apiShop'
import Div                  from '../../shared/Basic/Div'
import {genericButtonStyle} from '../../themes/elements'
import {
    checkoutAddress,
    checkoutDropIn
}                           from '../../themes/shop'


const Checkout = ({products}) => {
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    })
    const {_id, token} = useSelector(state => state.user)
    const {isAuthenticated} = useSelector(state => state.user)


    //get Braintree token
    const getToken = (_id, token) => {
        getBraintreeClientToken(_id, token).then(data => {
            if (data.error) {
                setData({...data, error: data.error})
            } else {
                setData({clientToken: data.clientToken})
            }

        })
    }

    useEffect(() => {
        getToken(_id, token)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleAddress = address => {
        setData({...data, address: address})
    }

    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price
        }, 0)
    }

    const showCheckout = () => {
        return isAuthenticated ? (
            <Div>
                {showDropIn()}
            </Div>
        ) : (
            <>
                Create Account? auto checked yesji
            </>

        )
    }

    const deliveryAddress = data.address

    const buy = () => {
        setData({loading: true})
        //send the nonce to your sever
        //nonce = data.instance.requestPaymentMethod

        //   setItems(getCart())


        let nonce
        data.instance
            .requestPaymentMethod()
            .then(data => {
                nonce = data.nonce
                //once you have nonce (card type, card number)
                //send nonce as 'paymentMethodNonce'
                //and also total to be charged


                const paymentData = {
                    paymentMethodNonce: nonce,
                    amount: getTotal(products)
                }
                processPayment(_id, token, paymentData)
                    .then(response => {

                        //create order
                        const createOrderData = {
                            products,
                            transactionId_id: response.transaction.id,
                            amount: response.transaction.amount,
                            address: deliveryAddress
                        }

                        createOrder(_id, token, createOrderData)


                        //empty cart
                        setData({...data, success: response.success})
                        emptyCart(() => {
                            console.log('payment success and empty cart')
                            setData({
                                loading: false,
                                success: true
                            })
                        })

                    })
                    .catch(error => {
                        console.log(error)
                        setData({loading: false})
                    })

            })
            .catch(error => {
                console.log('dropin error: ', error)
                setData({...data, error: error.message})
            })
    }


    const showDropIn = () => (
        <Div theme={checkoutDropIn}
             onBlur={() => setData({...data, error: ''})}>
            {data.clientToken !== null && products.length > 0 ? (
                <Div>
                    <Div>
                        <label>Delivery Address</label>

                        <PlacesAutocomplete
                            value={data.address || ''}
                            onChange={handleAddress}
                            onSelect={handleAddress}
                            placeholder="Type your delivery Address"
                        >
                            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                <div>
                                    <Div theme={checkoutAddress}>
                                        <input
                                            value={data.address}
                                            {...getInputProps({
                                                placeholder: 'Your Address ...',
                                                className: 'location-search-input',
                                            })}
                                        />
                                    </Div>
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
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
                    <DropIn options={{
                        authorization: data.clientToken,
                        paypal: {
                            flow: 'vault'
                        }
                    }} onInstance={instance => (data.instance = instance)}/>


                    {!!data.address && (
                        <Div
                            as="button"
                            theme={genericButtonStyle}
                            onClick={buy}
                        >
                            Pay
                        </Div>
                    )}


                </Div>
            ) : null}
        </Div>
    )

    const showError = error => (
        <Div theme={{display: error ? '' : 'none'}}>
            {error}
        </Div>
    )

    const showSuccess = success => (
        <Div theme={{display: success ? '' : 'none'}}>
            Thank you for you purchase! Your payment was succeessful
        </Div>
    )

    const showLoading = loading => loading && (
        <Div>
            Loading
        </Div>
    )

    return (
        <Div>
            <h2>Total: ${getTotal()}</h2>
            {showLoading(data.loading)}
            {showSuccess(data.success)}
            {showError(data.error)}
            {showCheckout()}
        </Div>
    )
}

export default Checkout
