import React from 'react'
import Div   from 'shared/Basic/Div'
import {
    placeCardInclusiveScoreInfoStyle,
    placeCardInclusiveScoreStyle,
    placeCardInclusiveScoreTextStyle, placeCardInclusiveScoreWrapperStyle,
    placeCardRatingScaleInnerStyle,
    placeCardRatingScaleStyle,
    placeCardRatingsIconWrapperStyle,
    placeCardRatingsItemStyle, placeCardRatingsWrapperStyle
}            from './styles'

const InclusiveScore = ({inclusiveScore, safe, welcome, celebrated}) => {
    return (
        <Div theme={{...placeCardInclusiveScoreInfoStyle}}>
            <Div theme={{...placeCardInclusiveScoreWrapperStyle}}>
                <Div theme={{...placeCardInclusiveScoreStyle}}>
                    {inclusiveScore}
                </Div>
                <Div theme={{...placeCardInclusiveScoreTextStyle}}>Inclusive Score</Div>
            </Div>
            <Div theme={placeCardRatingsWrapperStyle}>
                <Div theme={placeCardRatingsItemStyle}>
                    <Div theme={placeCardRatingScaleStyle}>
                        <Div theme={placeCardRatingScaleInnerStyle(safe)}/>
                    </Div>
                    <Div theme={placeCardRatingsIconWrapperStyle}>
                        Safe
                    </Div>
                </Div>
                <Div theme={placeCardRatingsItemStyle}>
                    <Div theme={placeCardRatingScaleStyle}>
                        <Div theme={placeCardRatingScaleInnerStyle(welcome)}/>
                    </Div>
                    <Div theme={placeCardRatingsIconWrapperStyle}>
                        Welcome
                    </Div>
                </Div>
                <Div theme={placeCardRatingsItemStyle}>
                    <Div theme={placeCardRatingScaleStyle}>
                        <Div theme={placeCardRatingScaleInnerStyle(celebrated)}/>
                    </Div>
                    <Div theme={placeCardRatingsIconWrapperStyle}>
                        Celebrated
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}

export default InclusiveScore
