import {API} from '../config'

export const getBusinesses = () => {
    return fetch(`${API}/businesses?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const deleteBusiness = (businessId, userId, token) => {
    return fetch(`${API}/business/${businessId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getBusiness = slug => {
    return fetch(`${API}/business/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const updateBusiness = (slug, userId, token, business) => {
    return fetch(`${API}/business/${slug}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: business
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}
