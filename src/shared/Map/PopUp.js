import React                                     from 'react'
import {BrowserRouter}                           from 'react-router-dom';
import Div                                       from 'shared/Basic/Div'
import LinkSwitch                                from 'shared/Basic/LinkSwitch'
import {mapPopUpAddressStyle, mapPopUpNameStyle} from './styles'


const PopUp = ({currentFeature}) => {
    return (
        <Div>
            <BrowserRouter>
                <Div>
                    <LinkSwitch
                        url={`/places/${currentFeature?.properties?.slug}`}
                        theme={mapPopUpNameStyle}
                    >
                        {currentFeature?.properties?.name}
                    </LinkSwitch>
                    <Div theme={mapPopUpAddressStyle}>{currentFeature?.properties?.address}</Div>
                </Div>
            </BrowserRouter>

        </Div>
    )
}

export default PopUp
