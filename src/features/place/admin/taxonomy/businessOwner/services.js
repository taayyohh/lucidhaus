import {API} from 'config/variables'

/**
 * to perform crud on admin
 * get all places
 * get a single admin
 * update single admin
 * delete single admin
 */

export const addBusinessOwner = ({_id, token, place}) =>
    fetch(`${API}/business-owner/create/${_id}`, {
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

export const deleteBusinessOwner = ({_id, token, slug}) =>
    fetch(`${API}/business-owner/${slug}/${_id}`, {
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

export const getBusinessOwner = ({slug}) =>
    fetch(`${API}/business-owner/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const updateBusinessOwner = ({slug, _id, token, adaptiveEquipment}) =>
    fetch(`${API}/business-owner/${slug}/${_id}`, {
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

export const getBusinessOwnerList = () =>
    fetch(`${API}/business-owner?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
