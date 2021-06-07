import {API} from 'config/variables'

/**
 * to perform crud on admin
 * get all places
 * get a single admin
 * update single admin
 * delete single admin
 */

export const addBathroom = ({_id, token, place}) =>
    fetch(`${API}/bathroom/create/${_id}`, {
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

export const deleteBathroom = ({_id, token, slug}) =>
    fetch(`${API}/bathroom/${slug}/${_id}`, {
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

export const getBathroom = ({slug}) =>
    fetch(`${API}/bathroom/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const updateBathroom = ({slug, _id, token, adaptiveEquipment}) =>
    fetch(`${API}/bathroom/${slug}/${_id}`, {
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

export const getBathroomList = () =>
    fetch(`${API}/bathroom?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
