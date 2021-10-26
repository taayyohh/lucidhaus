import React            from 'react'
import Div              from '../Basic/Div'
import {placeCardStyle} from './styles'

const PlaceCard = ({name, address, city, state, isActive, theme}) => {
    return (
        <Div theme={{...placeCardStyle, ...theme}}>
            <Div>{name}</Div>
            <Div>{address}</Div>
            <Div>{city}</Div>
            <Div>{state}</Div>
        </Div>
    )
}

PlaceCard.defaultProps = {
    theme: {}
}

export default PlaceCard
