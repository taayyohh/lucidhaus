import logo                     from 'assets/logo.svg'
import PropTypes                from 'prop-types'
import React                    from 'react'
import Div                      from 'shared/Basic/Div'
import Img                      from 'shared/Basic/Img'
import LinkSwitch               from 'shared/Basic/LinkSwitch'
import {headerLogoWrapperStyle} from 'shared/Layout/styles/header'
import HeaderMenu               from '../Menus/HeaderMenu'
import {
    headerInnerStyle,
    headerLogoLinkStyle,
    headerStyle
}                               from './styles/header'


const Header = ({theme}) =>
    <Div as="header" theme={{...headerStyle, ...theme}}>
        <Div theme={headerInnerStyle}>
            <Div theme={headerLogoWrapperStyle}>
                <LinkSwitch url="/" theme={headerLogoLinkStyle}>
                    <Img src={logo}/>
                </LinkSwitch>
            </Div>
            <HeaderMenu/>
        </Div>
    </Div>


Header.defaultProps = {
    theme: {},
}

Header.propTypes = {
    theme: PropTypes.object,
}

export default Header