import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import Div                  from '../../shared/Basic/Div'
import H2                   from '../../shared/Basic/H2'
import H3                   from '../../shared/Basic/H3'
import LinkSwitch           from '../../shared/Basic/LinkSwitch'
import {userDashboardStyle} from '../../themes/user'
import UserPurchaseHistory  from '../../shared/Elements/UserPurchaseHistory'

const UserDashboard = () => {
    const {name, email, token, _id, error, purchaseHistory} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const userExists = _id.length > 0 && token.length > 0
    const init = (userId, token) => {
        dispatch({
            type: 'user/getPurchaseHistory',
            payload: {
                userId: userId,
                token: token
            }
        })
    }

    useEffect(() => {
        if (userExists)
            init(_id, token)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id, token])

    return (
        <Div>
            <H2 theme={userDashboardStyle.greeting}>Hey, {name}</H2>
            <H3>Your email is: {email}</H3>
            <LinkSwitch url={`/settings/profile`} children={'profile'}/>
            <UserPurchaseHistory
                purchaseHistory={purchaseHistory}
                error={error}
            />
        </Div>
    )
}

export default UserDashboard