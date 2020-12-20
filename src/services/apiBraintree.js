import {API} from 'config'

export const getBraintreeClientToken = () =>
    fetch(`${API}/braintree/getToken`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const getPaymentMethod = (instance) =>
    instance.requestPaymentMethod()
        .then(data => {
            return data.nonce
        })
        .catch(error => {
            return error
        })
