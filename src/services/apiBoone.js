import {BOONE_API, BOONE_CLIENT_ID, BOONE_HOST} from 'config'

export const getBooneAutoComplete = ({input}) => {
    console.log('input', `${BOONE_HOST}${BOONE_API}autocomplete?input=${input}`)

    return (
        fetch(`${BOONE_HOST}${BOONE_API}autocomplete?input=${input}`, {
            method: 'GET',
            headers: {
                'RT-ORG-APP-CLIENT-ID': BOONE_CLIENT_ID,
            }
        })
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })
    )
}