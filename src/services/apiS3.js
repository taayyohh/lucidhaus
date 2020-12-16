import {API} from 'config'

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


export const getSignedRequest = ({croppedImage}) =>
    fetch(`${API}/sign-s3?file-name=${encodeURIComponent(croppedImage.name)}&file-type=${croppedImage.type}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
