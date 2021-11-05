import React                                     from 'react'
import {BrowserRouter}                           from 'react-router-dom';
import Div                                       from 'shared/Basic/Div'
import LinkSwitch                                from 'shared/Basic/LinkSwitch'
import InclusiveScore                            from 'shared/Cards/Place/InclusiveScore'
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
                {/*{currentFeature?.properties?.inclusiveScore > 0 && (*/}
                {/*    <InclusiveScore*/}
                {/*        safe={currentFeature?.properties?.averageSafe}*/}
                {/*        celebrated={currentFeature?.properties?.averageCelebrated}*/}
                {/*        welcome={currentFeature?.properties?.averageWelcome}*/}
                {/*        inclusiveScore={currentFeature?.properties?.inclusiveScore}*/}
                {/*    />*/}
                {/*)}*/}
            </BrowserRouter>

        </Div>
    )
}

export default PopUp
