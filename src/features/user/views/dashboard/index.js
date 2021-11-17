import review                                         from 'assets/review.png'
import search                                         from 'assets/search.png'
import setup                                         from 'assets/setup.png'

import {bookmark}                                           from 'config/icons'
import {userDashboardMenu}                                  from 'config/menus/dashboard/user'
import {userContentWrapperStyle, userDashboardWelcomeStyle} from 'features/user/admin/views/styles'
import React, {useEffect}                                   from 'react'
import {useDispatch, useSelector}                           from 'react-redux'
import Div                                                  from 'shared/Basic/Div'
import Icon                                                 from 'shared/Basic/Icon'
import Img                                                  from 'shared/Basic/Img'
import LinkSwitch                                           from 'shared/Basic/LinkSwitch'
import ContentWrapper                                       from 'shared/Layout/ContentWrapper'
import DashboardWrapper                                     from 'shared/Layout/Dashboard/DashboardWrapper'
import Avatar                                               from './Avatar'
import {
    dashboardParagraphStyle,
    userDashboardBookmarkStyle,
    userDashboardInfoWrapperStyle,
    userDashboardRTEHeadingStyle
}                                                           from './styles'
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
                        <Div theme={userDashboardRTEHeadingStyle}>How to use the Inclusive Guide</Div>
                        <Div theme={userDashboardWelcomeStyle.howToWrapper}>
                            <Div theme={userDashboardWelcomeStyle.setup}>
                                <Div theme={userDashboardWelcomeStyle.howToHeading}>Setup</Div>
                                <Img src={setup} />
                                <Div>
                                    Get started with your Inclusive Guide account by verifying your
                                    login details and updating your identity profile.
                                </Div>
                            </Div>
                            <Div theme={userDashboardWelcomeStyle.search}>
                                <Div theme={userDashboardWelcomeStyle.howToHeading}>Search</Div>
                                <Img src={search} />
                                <Div>
                                    Search for your favorite places and businesses, or find something new.
                                </Div>
                            </Div>
                            <Div theme={userDashboardWelcomeStyle.review}>
                                <Div theme={userDashboardWelcomeStyle.howToHeading}>Review</Div>
                                <Img src={review} />
                                <Div>
                                    Leave a review to share your experience after your visit!
                                </Div>
                            </Div>
                        </Div>
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
