import {API} from 'config/variables'

export const uploadFile = ({file, signedRequest}) =>
    fetch(signedRequest, {
        method: 'PUT',
        body: file
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const getSignedRequest = file =>
    fetch(`${API}/sign-s3?file-name=${encodeURIComponent(file.name)}&file-type=${file.type}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
