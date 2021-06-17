import React                                                                    from 'react'
import Div                                                                      from 'shared/Basic/Div'
import ContentWrapper                                                           from 'shared/Layout/ContentWrapper'
import {homeImageStyle, homeImageWrapperStyle, homeQuoteStyle, homeSpacerStyle} from './styles'

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
            <Div>
                <Div>
                    <Div>
                        The Inclusive Guide only works with input and feedback from individuals like you!
                        Every person that signs up provides valuable insights that we are using to build
                        and evolve the IG in real time. Don’t miss out, click below to create your account!
                    </Div>
                    <Div>Sign Up Now</Div>
                </Div>
                <Div>

                </Div>
            </Div>
        </ContentWrapper>
    )
}

export default Home
