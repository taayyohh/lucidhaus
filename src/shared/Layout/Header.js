import PropTypes  from 'prop-types'
import React      from 'react'
import Div        from '../Basic/Div'
import LinkSwitch from '../Basic/LinkSwitch'
import HeaderMenu from '../Menus/HeaderMenu'
import {
    headerInnerStyle,
    headerLogoLinkStyle,
    headerStyle
}                 from './styles/header'

const Header = ({theme}) =>
    <Div as="header" theme={{...headerStyle, ...theme}}>
        <Div theme={headerInnerStyle}>
            <LinkSwitch url="/" theme={headerLogoLinkStyle}>
                H
            </LinkSwitch>
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