import {API} from 'config/variables'

export const sendTwilioVerification = user =>
    fetch(`${API}/twilio/sendVerification`, {
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

export const confirmTwilioVerification = user =>
    fetch(`${API}/twilio/confirmVerification`, {
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
