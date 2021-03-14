import {BOONE_API, BOONE_CLIENT_ID, BOONE_HOST, CORS} from 'config'

export const getBooneAutoComplete = ({input}) => {
    console.log('input', `${CORS}${BOONE_HOST}${BOONE_API}autocomplete?input=${input}`)

    return (
        fetch(`${CORS}${BOONE_HOST}${BOONE_API}autocomplete?input=${input}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                ['RT-ORG-APP-CLIENT-ID']: BOONE_CLIENT_ID
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