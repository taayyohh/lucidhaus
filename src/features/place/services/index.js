import {API}       from 'config/variables'
import {unslugify} from '../../../utils/helpers'

/**
 * to perform crud on admin
 * get all places
 * get a single admin
 * update single admin
 * delete single admin
 */

export const addPlace = ({_id, token, place}) =>
    fetch(`${API}/place/create/${_id}`, {
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

export const getPlaces = () =>
    fetch(`${API}/places?limit=${50}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const getPendingPlaces = () =>
    fetch(`${API}/pending-places?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const deletePlace = ({_id, token, slug}) =>
    fetch(`${API}/place/${slug}/${_id}`, {
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

export const getPlace = ({slug}) =>
    fetch(`${API}/place/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const getPlaceById = ({_id}) =>
    fetch(`${API}/place/by/id/${_id}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const updatePlace = ({slug, _id, token, place}) =>
    fetch(`${API}/place/${slug}/${_id}`, {
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

export const addPlaceFromBoone = ({_id, token, place}) =>
    fetch(`${API}/place/create-from-boone/${_id}`, {
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

export const getAlgoliaPlaces = ({input, index}) => {
    return (
        index.search(unslugify(input))
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    )
}

export const getPlaceCategories = ({payload}) => {
    return (
        fetch(`${API}/place-category/by/name/or/description/${payload}`, {
            method: 'GET',
        })
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })
    )
}

export const handlePageView = ({_id, token, viewedAt, placeId}) => {
    fetch(`${API}/place/${placeId}/handle-page-view/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            viewedBy: _id,
            viewedAt: viewedAt
        })
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}
