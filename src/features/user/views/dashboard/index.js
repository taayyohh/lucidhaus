import {bookmark}                                           from 'config/icons'
import {userDashboardMenu}                                  from 'config/menus/dashboard/user'
import {colorPalette}                                       from 'config/styles'
import React, {useEffect}                                   from 'react'
import {useDispatch, useSelector}                           from 'react-redux'
import Div                                                  from 'shared/Basic/Div'
import Icon                                                 from 'shared/Basic/Icon'
import LinkSwitch                                           from 'shared/Basic/LinkSwitch'
import ContentWrapper                                       from 'shared/Layout/ContentWrapper'
import DashboardWrapper                                     from 'shared/Layout/Dashboard/DashboardWrapper'
import S3Img                                                from '../../../../shared/Basic/S3Img'
import {white}                                              from '../../../../utils/themer'
import {userContentWrapperStyle, userDashboardWelcomeStyle} from '../../admin/views/styles'
import {
    dashboardParagraphStyle,
    userDashboardBookmarkStyle,
    userDashboardInfoWrapperStyle,
    userDashboardRTEHeadingStyle
}                                                           from './styles'

const UserDashboard = () => {
    const {
        _id,
        token,
        user,
        email,
        isVerified,
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
                    {(avatar && (
                        <S3Img
                            url={avatar}
                            theme={{height: 130, width: 130, borderRadius: 70}}
                        />
                    ) || (
                        <Div
                            theme={{height: 130, width: 130, borderRadius: 70, background: colorPalette.seaFoamGreen}}/>
                    ))}


                    <Div theme={userDashboardWelcomeStyle.info}>
                        <Div theme={userDashboardWelcomeStyle.heading}>Hey, {nameFirst}</Div>
                        <Div>Registered Phone Number: {tel}</Div>
                        <Div>Registered Email: {email}</Div>
                        <Div theme={{display: 'flex'}}>
                            Account Verification Status: {(isVerified && (
                            <Div>Verified</Div>
                        )) || (
                            <Div theme={userDashboardWelcomeStyle.unverified}>Unverified</Div>
                        )}
                        </Div>
                        <Div theme={{display: 'flex', flexDirection: 'column', marginTop: 20}}>
                            <Div>*Please Note: Account verification is required to leave reviews!</Div>
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
                                    theme={userDashboardWelcomeStyle.verifyEmail}
                                >
                                    Click here to Verify Your Account
                                </Div>
                            )}
                        </Div>
                    </Div>
                </Div>
                {/*<DashboardInfo*/}
                {/*    heading={`Hey, ${nameFirst}`}*/}
                {/*    description={`${tel}`}*/}
                {/*/>*/}

                <Div theme={userDashboardInfoWrapperStyle}>
                    <Div theme={dashboardParagraphStyle}>
                        <Div theme={userDashboardRTEHeadingStyle}>Who we are</Div>
                        <Div>
                            Inclusive Guide is an online community that lists safe and
                            welcoming spaces for people who experience discrimination. Individuals can rate businesses
                            and
                            spaces on their experience relating to each person’s specific identities (race, ability,
                            gender,
                            etc).
                        </Div>
                        <br/>
                        <Div>
                            Inclusive Guide was started by two Black women with a mission to create data-driven,
                            economic
                            incentives for businesses to be more inclusive and welcoming, resulting in safer spaces for
                            people who regularly experience discrimination.
                        </Div>

                    </Div>
                    <Div theme={dashboardParagraphStyle}>
                        <strong>Celebrate your community!</strong> — We need people of all identities to start rating
                        businesses so we can celebrate the places that celebrate you! These ratings will be available to
                        the public, allowing individuals to support businesses that align with their values.
                    </Div>

                    <Div>
                        <Div theme={dashboardParagraphStyle}>
                            <Div theme={userDashboardRTEHeadingStyle}>Leave a Review!</Div>
                            <Div>
                                <strong>SAFE</strong> - This is both your physical and emotional safety. Feeling safe
                                includes feeling like you can be your full authentic self and can communicate openly
                                without being discriminated against based on your identity.
                            </Div>
                            <Div>
                                <strong>WELCOMED</strong> - Not only do you feel safe, but you also feel treated with
                                dignity and respect. Are your needs being met at the same level as everyone else’s?
                            </Div>
                            <Div>
                                <strong>CELEBRATED</strong> - Do you see yourself represented in the space, the
                                advertising, the products? Did you leave feeling better than when you came in?
                            </Div>
                        </Div>
                    </Div>
                    <Div>
                        <Div theme={dashboardParagraphStyle}>
                            <Div theme={userDashboardRTEHeadingStyle}>Save your favorite places!</Div>

                            To save your favorite places simply click on this bookmark icon ( <Icon icon={bookmark}
                                                                                                    theme={userDashboardBookmarkStyle}/> )
                            and the place will be
                            saved in your{' '}
                            <LinkSwitch url={'/dashboard/places'}>My Places</LinkSwitch>!
                        </Div>
                    </Div>


                </Div>


            </DashboardWrapper>
        </ContentWrapper>

    )
}

export default UserDashboard
