import {API} from 'config/variables'

export const updateEntity = ({slug, parentSlug, body, _id, token}) =>
    fetch(`${API}/${parentSlug}/${slug}/${_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: body
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const createEntity = ({_id, token, body, slug}) =>
    fetch(`${API}/${slug}/create/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: body
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
