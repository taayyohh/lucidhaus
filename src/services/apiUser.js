import {API} from "config";

export const signup = user =>
    fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
        return response.json()
    })
        .catch(error => {
            return error
    })


export const signin = user =>
    fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(err => {
        return err
    })


export const signout = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt')
        return fetch(`${API}/signout`, {
            method: "GET"
        })
            .then(response => {
            return response.json()
        })
            .catch(error => {
            return error
        })
    }
}

export const authenticate = (data) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
    }
}

export const isAuthenticated = () => {
    if (typeof window === 'undefined') {
        return false
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    } else {
        return false
    }
}

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