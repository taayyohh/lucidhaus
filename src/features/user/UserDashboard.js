import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import H2                   from 'shared/Basic/H2'
import H3                   from 'shared/Basic/H3'
import LinkSwitch           from 'shared/Basic/LinkSwitch'
import ContentWrapper       from 'shared/Layout/ContentWrapper'
import {userDashboardStyle} from './styles'
import UserPurchaseHistory  from './UserPurchaseHistory'

const UserDashboard = () => {
    const {name, email, token, _id, error, purchaseHistory} = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'user/getPurchaseHistory',
            payload: {
                userId: _id,
                token: token
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id, token])

    return (
        <ContentWrapper>
            <H2 theme={userDashboardStyle.greeting}>Hey, {name}</H2>
            <H3>Your email is: {email}</H3>
            <LinkSwitch url={`/settings/profile`} children={'profile'}/>
            <UserPurchaseHistory
                purchaseHistory={purchaseHistory}
                error={error}
            />
        </ContentWrapper>
    )
}

export default UserDashboard