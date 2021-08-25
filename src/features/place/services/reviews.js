import {API} from 'config/variables'

export const getFlaggedReviews = () =>
    fetch(`${API}/reviews/flagged/?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
