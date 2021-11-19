import React                                                               from 'react'
import {BrowserRouter}                                                     from 'react-router-dom';
import Div                                                                 from 'shared/Basic/Div'
import LinkSwitch                                                          from 'shared/Basic/LinkSwitch'
import {excerpt}                                                           from 'utils/helpers'
import {mapPopUpAddressStyle, mapPopUpDescriptionStyle, mapPopUpNameStyle} from './styles'


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
                    {!!currentFeature?.properties?.description && (
                        <Div theme={mapPopUpDescriptionStyle}>
                            {excerpt(currentFeature?.properties?.description, 35)}
                        </Div>
                    )}

                </Div>
            </BrowserRouter>

        </Div>
    )
}

export default PopUp
