import {API} from 'config'

/**
 * to perform crud on admin
 * get all albums
 * get a single admin
 * update single admin
 * delete single admin
 */
export const addAlbum = ({_id, token, album}) =>
    fetch(`${API}/album/create/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: album
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const getAlbums = () =>
    fetch(`${API}/albums?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const deleteAlbum = ({_id, token, slug}) =>
    fetch(`${API}/album/${slug}/${_id}`, {
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


export const getAlbum = ({slug}) =>
    fetch(`${API}/album/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const updateAlbum = ({slug, _id, token, album}) =>
    fetch(`${API}/album/${slug}/${_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: album
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

