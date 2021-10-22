import logo                                          from 'assets/logo.png'
import React                                         from 'react'
import Div                                           from 'shared/Basic/Div'
import Img                                           from 'shared/Basic/Img'
import LinkSwitch                                    from 'shared/Basic/LinkSwitch'
import {headerLogoLinkStyle, headerLogoWrapperStyle} from './styles/header'

const Logo = () => {
    return (
        <Div theme={headerLogoWrapperStyle}>
            <LinkSwitch url="/" theme={headerLogoLinkStyle}>
                <Img src={logo}/>
            </LinkSwitch>
        </Div>
    )
}

export default Logo
