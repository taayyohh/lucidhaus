import review                            from 'assets/review.png'
import search                            from 'assets/search.png'
import setup                             from 'assets/setup.png'
import {doorOpen, handHoldingHeart, spa} from 'config/icons'
import {
    userDashboardCelebratedIconStyle,
    userDashboardHowToStyle,
    userDashboardIconTextStyle,
    userDashboardIconWrapperStyle,
    userDashboardSafeIconStyle,
    userDashboardWelcomeIconStyle,
    userDashboardWelcomeStyle
}                                        from 'features/user/admin/views/styles'
import React                             from 'react'
import Div                               from 'shared/Basic/Div'
import Icon                              from 'shared/Basic/Icon'
import Img                               from 'shared/Basic/Img'

const HowTo = () => {
    return (
        <Div>
            <Div theme={userDashboardWelcomeStyle.howToHeader}>How to use the Inclusive Guide</Div>
            <Div theme={userDashboardWelcomeStyle.howToWrapper}>
                <Div theme={userDashboardWelcomeStyle.setup}>
                    <Div theme={userDashboardWelcomeStyle.howToHeading}>Setup</Div>
                    <Img src={setup}/>
                    <Div theme={userDashboardWelcomeStyle.text}>
                        Get started with your Inclusive Guide account by verifying your
                        login details and updating your identity profile.
                    </Div>
                </Div>
                <Div theme={userDashboardWelcomeStyle.search}>
                    <Div theme={userDashboardWelcomeStyle.howToHeading}>Search</Div>
                    <Img src={search}/>
                    <Div theme={userDashboardWelcomeStyle.text}>
                        Search for your favorite places and businesses, or find something new.
                    </Div>
                </Div>
                <Div theme={userDashboardWelcomeStyle.review}>
                    <Div theme={userDashboardWelcomeStyle.howToHeading}>Review</Div>
                    <Img src={review}/>
                    <Div theme={userDashboardWelcomeStyle.text}>
                        Leave a review to share your experience after your visit!
                    </Div>
                </Div>
            </Div>
            <Div theme={userDashboardHowToStyle.banner}>
                <Div theme={userDashboardHowToStyle.bannerInner}>
                    The <strong>Inclusive Score</strong> is generated using your reviews!
                    This score takes into account whether patrons feel <strong>safe</strong>, <strong>welcomed</strong>,
                    and <strong>celebrated</strong>.
                </Div>
            </Div>
            <Div theme={{display: 'flex', flexDirection: 'column'}}>
                <Div theme={userDashboardIconWrapperStyle}>
                    <Div theme={userDashboardSafeIconStyle}>
                        <Icon icon={spa}/>
                    </Div>
                    <Div theme={userDashboardIconTextStyle}>
                        <strong>SAFE</strong> - This is both your physical and emotional safety.
                        Feeling safe includes feeling like you can be your full authentic self and can
                        communicate openly without being discriminated against based on your identity.
                    </Div>
                </Div>
                <Div theme={userDashboardIconWrapperStyle}>
                    <Div theme={userDashboardCelebratedIconStyle}>
                        <Icon icon={doorOpen}/>
                    </Div>
                    <Div theme={userDashboardIconTextStyle}>
                        <strong>WELCOMED</strong> - Not only do you feel safe, but you also feel treated with dignity
                        and respect.
                        Are your needs being met at the same level as everyone else’s?
                    </Div>
                </Div>
                <Div theme={userDashboardIconWrapperStyle}>
                    <Div theme={userDashboardWelcomeIconStyle}>
                        <Icon icon={handHoldingHeart}/>
                    </Div>
                    <Div theme={userDashboardIconTextStyle}>
                        <strong>CELEBRATED</strong> - Do you see yourself represented in the space, the advertising,
                        the products? Did you leave feeling better than when you came in?
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}

export default HowTo
