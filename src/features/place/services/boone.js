import {BOONE_API, BOONE_CLIENT_ID, BOONE_HOST, CORS} from 'config/variables'

export const getBooneAutoComplete = ({input, longitude, latitude, radius}) => {
    return (
        fetch(`${CORS}${BOONE_HOST}${BOONE_API}autocomplete?input=${input}&center=${longitude},${latitude}&radius=${radius}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                'RT-ORG-APP-CLIENT-ID': BOONE_CLIENT_ID
            },
        })
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })
    )
}

export const getPlaceFromBoone = ({placeId}) => {
    return (
        fetch(`${CORS}${BOONE_HOST}${BOONE_API}canonical_places/${placeId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                'RT-ORG-APP-CLIENT-ID': BOONE_CLIENT_ID
            },
        })
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })
    )
}
