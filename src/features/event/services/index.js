/**
 * to perform crud on admin
 * get all events
 * get a single admin
 * update single admin
 * delete single admin
 */
import {API} from 'config/variables'

export const addEvent = ({_id, token, event}) =>
    fetch(`${API}/event/create/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: event
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const getEvents = () =>
    fetch(`${API}/events?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const deleteEvent = ({_id, token, slug}) =>
    fetch(`${API}/event/${slug}/${_id}`, {
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


export const getEvent = ({slug}) =>
    fetch(`${API}/event/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const updateEvent = ({slug, token, event}) =>
    fetch(`${API}/event/${slug}`, {
        method: 'PUT',
        body: event
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

