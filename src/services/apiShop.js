import queryString from 'query-string'
import {API}       from '../variables/config'


export const list = params => {
    const query = queryString.stringify(params)
    return fetch(`${API}/products/search/?${query}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const read = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const listRelated = ({slug}) => {
    return fetch(`${API}/products/related/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const processPayment = ({_id, token, paymentData}) => {
    return fetch(`${API}/braintree/payment/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const createOrder = ({_id, token, createOrderData}) => {
    return fetch(`${API}/order/create/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: createOrderData})
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

}

