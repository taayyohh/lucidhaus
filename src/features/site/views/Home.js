import React          from 'react'
import {useSelector}  from 'react-redux'
import Div            from 'shared/Basic/Div'
import LinkSwitch     from 'shared/Basic/LinkSwitch'
import S3Img          from 'shared/Basic/S3Img'
import ContentWrapper from 'shared/Layout/ContentWrapper'
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
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)

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
                        Join us on the <em>Inclusive Guide</em> to review and share the places that
                        foster welcoming spaces and celebrate all identities!
                        Your input provides valuable insights to help us
                        build and evolve the Guide in real time.
                        {!isAuthenticated && !isAdmin && (
                            <Div>Click below to join us today!</Div>
                        )}
                    </Div>
                    {!isAuthenticated && !isAdmin && (
                        <LinkSwitch
                            url={'/signup'}
                            theme={homeSignupButtonStyle}
                        >
                            Create Account
                        </LinkSwitch>
                    )}
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
