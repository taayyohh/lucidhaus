import {API} from 'config/variables'

/**
 * to perform crud on admin
 * get all places
 * get a single admin
 * update single admin
 * delete single admin
 */

export const addAdaptiveEquipment = ({_id, token, place}) =>
    fetch(`${API}/adaptive-equipment/create/${_id}`, {
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

export const getAdaptiveEquipments = () =>
    fetch(`${API}/adaptive-equipment?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const deleteAdaptiveEquipment = ({_id, token, slug}) =>
    fetch(`${API}/adaptive-equipment/${slug}/${_id}`, {
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

export const getAdaptiveEquipment = ({slug}) =>
    fetch(`${API}/adaptive-equipment/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const updateAdaptiveEquipment = ({slug, _id, token, place}) =>
    fetch(`${API}/adaptive-equipment/${slug}/${_id}`, {
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
