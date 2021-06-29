import {API} from 'config/variables'

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

export const confirmSignup = user =>
    fetch(`${API}/confirmSignup`, {
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
