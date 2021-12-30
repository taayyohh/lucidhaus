import {userDashboardMenu}                                  from 'config/menus/dashboard/user'
import {userContentWrapperStyle, userDashboardWelcomeStyle} from 'features/user/admin/views/styles'
import React, {useEffect}                                   from 'react'
import {useDispatch, useSelector}                           from 'react-redux'
import Div                                                  from 'shared/Basic/Div'
import ContentWrapper                                       from 'shared/Layout/ContentWrapper'
import DashboardWrapper                                     from 'shared/Layout/Dashboard/DashboardWrapper'
import LinkSwitch                                           from '../../../../shared/Basic/LinkSwitch'
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
                    Welcome to LucidHaus.
                    <br/>
                    <br />
                    You can <LinkSwitch url={'/music'}>stream our entire catalogue</LinkSwitch> by clicking on an album title or song name and can
                    <LinkSwitch url={'/shop/category/vinyl'}> buy vinyl</LinkSwitch> from your fav LucidHaus artist or some label merch if you want to support {`<3`}.
                    <br />
                    <br/>
                    Lots more to come, stay tuned!
                    <br />
                    <br />
                    - LucidHaus
                    <br />
                    <br />
                    This e-commerce / streaming web app was built by <LinkSwitch
                    url={'/artists/theo-mode'}>th&eacute;o</LinkSwitch> and will be in continuous
                    development to allow us as a label to build features that are meaningful to y'all! Our code is open source and can be found
                    on th&eacute;o's <LinkSwitch url={'https://github.com/taayyohh'}>Github</LinkSwitch> if you wish to fork it.
                </Div>
            </DashboardWrapper>
        </ContentWrapper>

    )
}

export default UserDashboard
