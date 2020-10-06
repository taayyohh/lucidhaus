import React            from 'react'
import {useSelector}    from 'react-redux'
import Div              from '../Basic/Div'
import StyledLink       from '../Basic/StyledLink'
import {mobileFlag}     from '../features/site/siteSlice'
import HeaderMenu       from '../Menus/HeaderMenu'
import MobileHeaderMenu from '../Menus/MobileHeaderMenu'
import {
    headerInnerStyle,
    headerLogoLinkStyle,
    headerStyle
}                       from '../themes/header'

const Header = ({theme}) => {
    const isMobile = useSelector(mobileFlag)

    return (
        <Div as="header" theme={{...headerStyle, ...theme}}>
            <Div theme={{...headerInnerStyle, ...theme.innerStyle}}>
                <StyledLink to="/" theme={{...headerLogoLinkStyle, ...theme.logoLink}}>
                    IJ
                </StyledLink>
                {(!isMobile && (
                    <HeaderMenu/>
                )) || (
                    <MobileHeaderMenu/>
                )}

            </Div>
        </Div>
    )
}



Header.defaultProps = {
    theme: {},
}

export default Header