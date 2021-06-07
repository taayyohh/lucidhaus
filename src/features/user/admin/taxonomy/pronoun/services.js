import {API} from 'config/variables'

/**
 * to perform crud on admin
 * get all places
 * get a single admin
 * update single admin
 * delete single admin
 */

export const addPronoun = ({_id, token, place}) =>
    fetch(`${API}/pronoun/create/${_id}`, {
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

export const deletePronoun = ({_id, token, slug}) =>
    fetch(`${API}/pronoun/${slug}/${_id}`, {
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

export const getPronoun = ({slug}) =>
    fetch(`${API}/pronoun/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const updatePronoun = ({slug, _id, token, adaptiveEquipment}) =>
    fetch(`${API}/pronoun/${slug}/${_id}`, {
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

export const getPronounList = () =>
    fetch(`${API}/pronoun?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
