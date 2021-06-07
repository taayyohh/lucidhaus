import {API} from 'config/variables'

/**
 * to perform crud on admin
 * get all places
 * get a single admin
 * update single admin
 * delete single admin
 */

export const addSexualOrientation = ({_id, token, place}) =>
    fetch(`${API}/sexual-orientation/create/${_id}`, {
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

export const deleteSexualOrientation = ({_id, token, slug}) =>
    fetch(`${API}/sexual-orientation/${slug}/${_id}`, {
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

export const getSexualOrientation = ({slug}) =>
    fetch(`${API}/sexual-orientation/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const updateSexualOrientation = ({slug, _id, token, adaptiveEquipment}) =>
    fetch(`${API}/sexual-orientation/${slug}/${_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: adaptiveEquipment
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const getSexualOrientationList = () =>
    fetch(`${API}/sexual-orientation?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
