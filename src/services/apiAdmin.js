import {API} from '../variables/config'


/**
 * to perform crud on admin
 * get all businesses
 * get a single admin
 * update single admin
 * delete single admin
 */
export const addBusiness = ({userId, token, business}) => {
    return fetch(`${API}/business/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: business
    }).then(response => {
        return response.json()
    }).catch(error => {
        return error
    })
}

export const getBusinesses = () => {
    return fetch(`${API}/businesses?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const deleteBusiness = ({_id, token, slug}) => {
    return fetch(`${API}/business/${slug}/${_id}`, {
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
        .catch(error => {
            return error
        })
}

export const getBusiness = ({slug}) => {
    return fetch(`${API}/business/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const updateBusiness = ({slug, _id, token, business}) => {
    return fetch(`${API}/business/${slug}/${_id}`, {
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
        .catch(error => {
            return error
        })
}


