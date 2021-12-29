/**
 * to perform crud on admin
 * get all artists
 * get a single admin
 * update single admin
 * delete single admin
 */
import {API} from 'config/variables'

export const addArtist = ({_id, token, artist}) =>
    fetch(`${API}/artist/create/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: artist
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const getArtists = () =>
    fetch(`${API}/artists?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const deleteArtist = ({_id, token, slug}) =>
    fetch(`${API}/artist/${slug}/${_id}`, {
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


export const getArtist = ({slug}) =>
    fetch(`${API}/artist/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const updateArtist = ({slug, _id, token, artist}) =>
    fetch(`${API}/artist/${slug}/${_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: artist
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

