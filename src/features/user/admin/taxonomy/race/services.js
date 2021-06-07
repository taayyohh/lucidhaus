import {API} from 'config/variables'

/**
 * to perform crud on admin
 * get all places
 * get a single admin
 * update single admin
 * delete single admin
 */

export const addRace = ({_id, token, place}) =>
    fetch(`${API}/race/create/${_id}`, {
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

export const deleteRace = ({_id, token, slug}) =>
    fetch(`${API}/race/${slug}/${_id}`, {
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

export const getRace = ({slug}) =>
    fetch(`${API}/race/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const updateRace = ({slug, _id, token, adaptiveEquipment}) =>
    fetch(`${API}/race/${slug}/${_id}`, {
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

export const getRaceList = () =>
    fetch(`${API}/race?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
