import {userDashboardMenu}                                  from 'config/menus/dashboard/user'
import {userContentWrapperStyle, userDashboardWelcomeStyle} from 'features/user/admin/views/styles'
import React, {useEffect}                                   from 'react'
import {useDispatch, useSelector}                           from 'react-redux'
import Div                                                  from 'shared/Basic/Div'
import ContentWrapper                                       from 'shared/Layout/ContentWrapper'
import DashboardWrapper                                     from 'shared/Layout/Dashboard/DashboardWrapper'
import Avatar                                               from './Avatar'
import {userDashboardInfoWrapperStyle}                      from './styles'
import Welcome                                              from './Welcome'

const UserDashboard = () => {
    const {
        _id,
        token,
        user,
        email,
        slug,
        nameFirst,
        tel,
        avatar
    } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'user/getUser',
            payload: {
                slug: slug,
                _id: _id,
                token: token
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <DashboardWrapper menu={userDashboardMenu}>
                <Div theme={userDashboardWelcomeStyle}>
                    <Div theme={userDashboardWelcomeStyle.inner}>
                        <Avatar avatar={avatar}/>
                        <Welcome
                            _id={_id}
                            token={token}
                            nameFirst={nameFirst}
                            tel={tel}
                            email={email}
                            emailVerified={user.emailVerified}
                            user={user}
                            verificiationToken={user.verificationToken}
                        />
                    </Div>
                </Div>
                <Div theme={userDashboardInfoWrapperStyle}>
                    Hi
                </Div>
            </DashboardWrapper>
        </ContentWrapper>

    )
}

export default UserDashboard
