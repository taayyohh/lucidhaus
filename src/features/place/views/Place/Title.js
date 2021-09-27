import React             from 'react'
import Div               from 'shared/Basic/Div'
import MotionDiv         from '../../../../shared/Basic/MotionDiv'
import {placeTitleStyle} from '../styles'

const Title = ({boonePlace, name}) => {
    return (
        <Div theme={{display: 'flex', flexDirection: 'column'}}>
            {(boonePlace.name || name) && (
                <MotionDiv theme={placeTitleStyle}>
                    {boonePlace?.name || name}
                </MotionDiv>
            )}
        </Div>
    )
}

export default Title
