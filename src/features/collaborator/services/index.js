/**
 * to perform crud on admin
 * get all collaborators
 * get a single admin
 * update single admin
 * delete single admin
 */
import {API} from 'config/variables'

export const addCollaborator = ({_id, token, collaborator}) =>
    fetch(`${API}/collaborator/create/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: collaborator
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const getCollaborators = () =>
    fetch(`${API}/collaborators?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const deleteCollaborator = ({_id, token, slug}) =>
    fetch(`${API}/collaborator/${slug}/${_id}`, {
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


export const getCollaborator = ({slug}) =>
    fetch(`${API}/collaborator/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const updateCollaborator = ({slug, _id, token, collaborator}) =>
    fetch(`${API}/collaborator/${slug}/${_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: collaborator
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

