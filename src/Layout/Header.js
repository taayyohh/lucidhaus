import React         from 'react'
import MotionDiv     from '../Basic/MotionDiv'
import StyledLink    from '../Basic/StyledLink'
import HeaderMenu    from '../Menus/HeaderMenu'
import {headerStyle} from '../themes/header'

const Header = ({theme}) =>
    <MotionDiv as="header" theme={{...headerStyle, ...theme}} exit={'exit'}>
        <StyledLink to="/" theme={{...headerStyle.logoLink}}>
            IJ
        </StyledLink>
        <HeaderMenu/>
    </MotionDiv>


Header.defaultProps = {
    theme: {},
}

export default Header