import React         from 'react'
import MotionDiv     from '../Basic/MotionDiv'
import StyledLink    from '../Basic/StyledLink'
import HeaderMenu    from '../Menus/HeaderMenu'
import {headerInnerStyle, headerLogoLinkStyle, headerStyle} from '../themes/header'
import Div from "../Basic/Div";

const Header = ({theme}) =>
    <Div as="header" theme={{...headerStyle, ...theme}}>
        <Div theme={{...headerInnerStyle, ...theme.innerStyle}}>
            <StyledLink to="/" theme={{...headerLogoLinkStyle, ...theme.logoLink}}>
                IJ
            </StyledLink>
            <HeaderMenu/>
        </Div>
    </Div>


Header.defaultProps = {
    theme: {},
}

export default Header