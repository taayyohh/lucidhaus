import React, {useEffect}                 from 'react'
import {
    useDispatch,
    useSelector
}                                         from 'react-redux'
import Div                                from 'shared/Basic/Div'
import H2                                 from 'shared/Basic/H2'
import H3                                 from 'shared/Basic/H3'
import LinkSwitch                         from 'shared/Basic/LinkSwitch'
import Span                               from 'shared/Basic/Span'
import ContentWrapper                     from 'shared/Layout/ContentWrapper'
import {headerMenuAuthStyleListItemStyle} from 'shared/Menus/styles'
import {userDashboardStyle}               from './styles'
import UserPurchaseHistory                from './UserPurchaseHistory'

const UserDashboard = () => {
    const {name, email, isAuthenticated, token, _id, error, purchaseHistory} = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'user/getPurchaseHistory',
            payload: {
                _id: _id,
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
            <Div>
                {isAuthenticated && (
                    <Span
                        to="/signout"
                        theme={headerMenuAuthStyleListItemStyle}
                        onClick={() => dispatch({type: 'user/signOut'})}
                    >
                        Sign Out
                    </Span>
                )}
            </Div>
        </ContentWrapper>
    )
}

export default UserDashboard