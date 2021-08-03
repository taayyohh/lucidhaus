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

export const getUser = ({slug, _id, token}) =>
    fetch(`${API}/user/${slug}/${_id}`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
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

export const update = ({_id, token, user}) => {
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

}


export const updateUserJwt = (user) => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('jwt')) {
            let auth = JSON.parse(localStorage.getItem('jwt'))

            auth.user = user

            localStorage.setItem('jwt', JSON.stringify(auth))
        }
    }
}

export const deleteUser = ({_id, token, slug}) =>
    fetch(`${API}/user/${slug}/${_id}`, {
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


export const verifyUserEmail = ({_id, token, verificationToken}) =>
    fetch(`${API}/verification-token/verify/${verificationToken}`, {
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

export const getReviewsByUser = ({_id, token}) =>
    fetch(`${API}/reviews/by/user/${_id}`, {
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

export const resendVerification = ({_id, token}) => {
    fetch(`${API}/resend-verification-token/${_id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

// export const sendRecoverPassword = ({body, token})  => {
//     fetch(`${API}/auth/recover/`, {
//         method: "POST",
//         body: body
//     })
//         .then(response => {
//             return response.json()
//         })
//         .catch(error => {
//             return error
//         })
// }


export const sendRecoverPassword = ({payload}) =>
    fetch(`${API}/auth/recover`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(response => {
        return response.json()
    }).catch(err => {
        return err
    })

export const confirmUserResetToken = ({payload}) =>
    fetch(`${API}/auth/reset/verify/${payload.token}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const resetUserPassword = ({body, slug}) => {
    fetch(`${API}/auth/reset/${slug}`, {
        method: "POST",
        body: body
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}
