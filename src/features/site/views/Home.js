import React          from 'react'
import Div            from 'shared/Basic/Div'
import ContentWrapper from 'shared/Layout/ContentWrapper'
import LinkSwitch     from '../../../shared/Basic/LinkSwitch'
import S3Img          from '../../../shared/Basic/S3Img'
import {
    homeImageStyle,
    homeImageWrapperStyle,
    homeQuoteStyle,
    homeSignupButtonStyle,
    homeSignupImageStyle,
    homeSignupImageWrapperStyle,
    homeSignupQuoteStyle,
    homeSignupQuoteWrapperStyle,
    homeSignupWrapperStyle,
    homeSpacerStyle
}                     from './styles'

const Home = () => {

    return (
        <ContentWrapper theme={{width: '100%', margin: 0}}>
            <Div theme={homeImageWrapperStyle}>
                <Div theme={homeImageStyle}/>
            </Div>
            <Div theme={homeQuoteStyle}>
                <Div>Celebrating the places that celebrate <span>You</span></Div>
            </Div>
            <Div theme={homeSpacerStyle}/>
            <Div theme={homeSignupWrapperStyle}>
                <Div theme={homeSignupQuoteWrapperStyle}>
                    <Div theme={homeSignupQuoteStyle}>
                        The Inclusive Guide works with input and feedback from individuals like you!
                        Every person that signs up provides valuable insights that we are using to build
                        and evolve the Guild in real time. Don’t miss out, sign up below to create your account!
                    </Div>
                    <LinkSwitch
                        url={'/signup'}
                        theme={homeSignupButtonStyle}
                    >
                        Sign Up Now!
                    </LinkSwitch>
                </Div>
                <Div theme={homeSignupImageWrapperStyle}>
                    <S3Img
                        theme={homeSignupImageStyle}
                        url={'assets/ij-home-2.jpg'}
                    />
                </Div>
            </Div>
        </ContentWrapper>
    )
}

export default Home
