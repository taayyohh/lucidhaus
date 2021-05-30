import {API} from "config/variables";


export const read = (userId, token) =>
    fetch(`${API}/user/${userId}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const getUsers = () =>
    fetch(`${API}/users?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const getUser = ({slug}) =>
    fetch(`${API}/user/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const getPurchaseHistory = ({_id, token}) =>
    fetch(`${API}/orders/by/user/${_id}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const update = ({_id, token, user}) =>
    fetch(`${API}/user/${_id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

export const updateUser = ({user}) => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('jwt')) {
            let auth = JSON.parse(localStorage.getItem('jwt'))
            auth.user = user
            localStorage.setItem('jwt', JSON.stringify(auth))
        }
    }
}
