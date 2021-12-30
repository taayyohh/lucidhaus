export const getAudiusProviders = () =>
    fetch(`https://api.audius.co/`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const getAudiusUser = ({provider}) => {
    fetch(`${provider}/v1//users/search?query=Brownies&app_name=LUCIDHAUS`, {
        method: 'GET',
        headers: {
            Accept: "application/json"
        }
    })
        .then(response => {
            return response.json()
        })
        .then(function (body) {
        })
        .catch(error => {
            return error
        })
}


