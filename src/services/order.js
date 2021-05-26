import {API} from 'config'

/**
 * Manage ManageOrders
 */

export const listOrders = ({_id, token}) =>
    fetch(`${API}/order/list/${_id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const listStatusValues = ({_id, token}) =>
    fetch(`${API}/order/status-values/${_id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const updateOrderStatus = ({_id, token, orderId, status}) =>
    fetch(`${API}/order/${orderId}/status/${_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(status)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
