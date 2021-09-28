import React                                                      from 'react'
import {useSelector}                                              from 'react-redux'
import Div                                                        from 'shared/Basic/Div'
import {inclusiveScoreStyle, scoreCircleStyle, scoreWrapperStyle} from './styles'

const Rating = ({}) => {
    const {
        place,
        reviews,
    } = useSelector(state => state.place)

    const {averageSafe, averageCelebrated, averageWelcome, inclusiveScore} = place


    return (
        <Div theme={{display: 'flex'}}>
            {inclusiveScore > 0 && (
                <Div theme={{display: 'flex', marginBottom: [30, .7, 30]}}>

                    <Div theme={scoreWrapperStyle}>
                        Inclusive Score:
                        <Div theme={{...scoreCircleStyle, ...inclusiveScoreStyle}}>{inclusiveScore}</Div>
                    </Div>
                    <Div theme={scoreWrapperStyle}>Safe: <Div theme={scoreCircleStyle}>{averageSafe}</Div></Div>
                    <Div theme={scoreWrapperStyle}>Welcome: <Div theme={scoreCircleStyle}>{averageWelcome}</Div></Div>
                    <Div theme={scoreWrapperStyle}>Celebrated: <Div
                        theme={scoreCircleStyle}>{averageCelebrated}</Div></Div>

                    <Div theme={scoreWrapperStyle}>Total Reviews: <Div
                        theme={scoreCircleStyle}>{reviews.length}</Div></Div>
                </Div>
            )}

        </Div>
    )
}

export default Rating
