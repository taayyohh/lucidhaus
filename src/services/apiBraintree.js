import {API} from '../variables/config'

export const getBraintreeClientToken = ({_id, token}) => {
    return fetch(`${API}/braintree/getToken/${_id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const getPaymentMethod = (instance) =>
    instance.requestPaymentMethod()
        .then(data => {
            return data.nonce
        })
        .catch(error => {
            return error
        })
