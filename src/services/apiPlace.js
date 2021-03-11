import {API} from 'config'

/**
 * to perform crud on admin
 * get all places
 * get a single admin
 * update single admin
 * delete single admin
 */
export const addPlace = ({_id, token, place}) =>
    fetch(`${API}/place/create/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: place
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const getPlaces = () =>
    fetch(`${API}/places?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const deletePlace = ({_id, token, slug}) =>
    fetch(`${API}/place/${slug}/${_id}`, {
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


export const getPlace = ({slug}) =>
    fetch(`${API}/place/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const updatePlace = ({slug, _id, token, place}) =>
    fetch(`${API}/place/${slug}/${_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: place
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


