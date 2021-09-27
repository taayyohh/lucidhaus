import {globe}                                    from 'config/icons'
import React                                      from 'react'
import Div                                        from 'shared/Basic/Div'
import Icon                                       from 'shared/Basic/Icon'
import LinkSwitch                                 from 'shared/Basic/LinkSwitch'
import {placeWebsiteIconStyle, placeWebsiteStyle} from '../styles'

const Website = ({website}) => {
    return (
        <Div theme={{display: 'flex'}}>
            {website && website !== 'undefined' && (
                <LinkSwitch
                    url={website}
                    children={'Website'}
                    theme={placeWebsiteStyle}
                >
                    <Icon
                        icon={globe}
                        theme={placeWebsiteIconStyle}
                    />
                    <Div>Website</Div>
                </LinkSwitch>
            )}
        </Div>
    )
}

export default Website
