import moment               from 'moment'
import React, {
    useEffect,
    useState
}                           from 'react'
import {isAuthenticated}    from '../api/apiAuth'
import {getPurchaseHistory} from '../api/apiUser'
import Div                  from '../Basic/Div'
import H2                   from '../Basic/H2'
import H3                   from '../Basic/H3'
import {userDashboardStyle} from '../themes/user'

const UserDashboard = () => {
    const [history, setHistory] = useState([])

    const {
        user: {_id, name, email} //role
    } = isAuthenticated()
    const token = isAuthenticated().token

    const init = (userId, token) => {
        getPurchaseHistory(userId, token).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setHistory(data)
            }
        })
    }

    useEffect(() => {
        init(_id, token)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const purchaseHistory = () => (
        <Div>
            <H3>
                {history.map((h, i) => (
                    h.products.map((p, i) => {
                        return (
                            <Div key={i}>
                                <H3>{p.name}</H3>
                                <h6>Product price: ${p.price}</h6>
                                <h6>
                                    Purchased date:{' '}
                                    {moment(p.createdAt).fromNow()}
                                </h6>
                            </Div>
                        )
                    })
                ))
                }
            </H3>
        </Div>
    )

    return (
        <>
            <H2 theme={userDashboardStyle.greeting}>Hey, {name}</H2>
            <H3>Your email is: {email}</H3>
            <Div>{purchaseHistory()}</Div>

        </>
    )
}

export default UserDashboard