import 'braintree-web'
import DropIn               from 'braintree-web-drop-in-react'
import React, {
    useEffect,
    useState
}                           from 'react'
import PlacesAutocomplete   from 'react-places-autocomplete'
import {Link}               from 'react-router-dom'
import {isAuthenticated} from '../api/apiAuth'
import {
    createOrder,
    getBraintreeClientToken,
    processPayment
}                           from '../services/apiShop'
import Div                  from '../shared/Basic/Div'
import {genericButtonStyle} from '../themes/elements'
import {
    checkoutAddress,
    checkoutDropIn
}                           from '../themes/shop'
import {flex}      from '../utils/themer'
import {emptyCart} from '../features/shop/cartHelpers'


const Checkout = ({products, setRun = f => f, run = undefined}) => {
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    })


    // const [showConfirmed, setShowConfirmed] = useState(false)


    const userId = isAuthenticated() && isAuthenticated().user._id
    const token = isAuthenticated() && isAuthenticated().token

    //get Braintree token
    const getToken = (userId, token) => {
        getBraintreeClientToken(userId, token).then(data => {
            if (data.error) {
                setData({...data, error: data.error})
            } else {
                setData({clientToken: data.clientToken})
            }

        })
    }

    useEffect(() => {
        getToken(userId, token)

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
        return isAuthenticated() ? (
            <Div theme={{display: flex}}>
                {showDropIn()}
            </Div>
        ) : (
            <>
                <Link to="/signin">
                    Sign in to checkout
                </Link> or

                <Link to="/signin">
                    checkout as guest
                </Link>
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
                console.log('DATA', data)
                nonce = data.nonce
                //once you have nonce (card type, card number)
                //send nonce as 'paymentMethodNonce'
                //and also total to be charged


                const paymentData = {
                    paymentMethodNonce: nonce,
                    amount: getTotal(products)
                }
                processPayment(userId, token, paymentData)
                    .then(response => {

                        //create order
                        const createOrderData = {
                            products,
                            transactionId_id: response.transaction.id,
                            amount: response.transaction.amount,
                            address: deliveryAddress
                        }

                        createOrder(userId, token, createOrderData)


                        //empty cart
                        setData({...data, success: response.success})
                        emptyCart(() => {
                            setRun(!run) // run useEffect in parent Cart
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
                            value={data.address}
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
