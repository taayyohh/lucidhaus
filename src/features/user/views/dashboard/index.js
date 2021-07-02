import {userDashboardMenu}        from 'config/menus/dashboard/user'
import {colorPalette}             from 'config/styles'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper           from 'shared/Layout/Dashboard/DashboardWrapper'
import {white}                    from '../../../../utils/themer'

const UserDashboard = () => {
    const {nameFirst, tel} = useSelector(state => state.user)
    const {
        _id,
        token,
        verificationToken,
        user,
        email,
        emailVerified,
        slug
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
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={`Hey, ${nameFirst}`}
                    description={`${tel}`}
                />
                <Div theme={{display: 'flex', flexDirection: 'column'}}>
                    <Div theme={{display: 'flex'}}>
                        <Div>Email: {email}</Div>
                        <Div theme={{marginLeft: 15}}>{user.emailVerified ? 'verified' : 'unverified'}</Div>
                    </Div>
                    {!user.emailVerified && (
                        <Div
                            onClick={() => dispatch(
                                {
                                    type: 'user/resendVerificationLink',
                                    payload: {
                                        verificationLink: `https://beta.inclusiveguide.com/verify/${user.verificationToken}`,
                                        email: email,
                                        _id,
                                        token
                                    }
                                })}
                            theme={{
                                padding: '10px 15px',
                                background: colorPalette.paleGreen,
                                display: 'flex',
                                alignSelf: 'flex-start',
                                borderRadius: '10px',
                                hover: {
                                    cursor: 'pointer',
                                    backgroundColor: colorPalette.forestGreen,
                                    color:white
                                }
                            }}
                        >
                            Resend Verification Link
                        </Div>
                    )}
                </Div>


            </DashboardWrapper>
        </ContentWrapper>

    )
}

export default UserDashboard
