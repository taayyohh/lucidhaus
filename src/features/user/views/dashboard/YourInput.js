import yourInput                      from 'assets/your-input.png'
import React                          from 'react'
import Div                            from 'shared/Basic/Div'
import Img                                                       from 'shared/Basic/Img'
import {yourInputHeadingWrapperStyle, yourInputInfoWrapperStyle} from './styles'

const YourInput = () => {
    return (
        <Div>
            <Div theme={yourInputHeadingWrapperStyle}>
                <Div><span>Your</span> input matters</Div>
            </Div>

            <Div theme={yourInputInfoWrapperStyle}>
                <Div>
                    <Div theme={yourInputInfoWrapperStyle.heading}>Celebrate your community</Div>
                    <Div>
                        We need people of all identities to start rating businesses
                        so we can celebrate the places that celebrate you!
                        These ratings will be available to the public, allowing individuals to support businesses
                        that align with their values.
                    </Div>
                </Div>
                <Div theme={yourInputInfoWrapperStyle.imageWrapper}>
                    <Img
                        src={yourInput}
                        theme={yourInputInfoWrapperStyle.image}
                    />
                </Div>
            </Div>
        </Div>
    )
}

export default YourInput
