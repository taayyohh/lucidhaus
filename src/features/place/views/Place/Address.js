import {mapMarker}         from 'config/icons'
import React               from 'react'
import Div                 from 'shared/Basic/Div'
import Icon                from 'shared/Basic/Icon'
import {isEmpty}           from 'utils/themer'
import {placeAddressStyle} from '../styles'


const Address = ({address1, address2, boonePlace, city, state, zip}) => {
    return (
        <Div>
            <Div theme={placeAddressStyle}>
                <Div>
                    <Icon icon={mapMarker}/>
                </Div>
                <Div theme={placeAddressStyle.address}>
                    {(!!address1 && address1) || (!isEmpty(boonePlace) && boonePlace.locations?.[0].address1)}
                    {(!!address1 ? ', ' : '')}
                    {(!!address2 && address2 !== 'undefined') ? address2 : ''}
                    {(!!address2 && address2 !== 'undefined') ? ', ' : ''}
                    {(!!city && city) || (!isEmpty(boonePlace) && boonePlace.locations[0].city)}
                    {(!!city ? ', ' : '')}
                    {(!!state && state) || (!isEmpty(boonePlace) && boonePlace.locations[0].state)}
                    {' '}
                    {(!!zip && zip !== 'null' && zip) || (!isEmpty(boonePlace) && !!boonePlace.locations ? boonePlace.locations[0].postal_code : '')}
                    {' '}
                    {/*{!!country && country}*/}
                </Div>


            </Div>
        </Div>
    )
}

export default Address
