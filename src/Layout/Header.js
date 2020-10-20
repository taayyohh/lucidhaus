import React            from 'react'
import {useSelector} from 'react-redux'
import Div           from '../shared/Basic/Div'
import LinkSwitch    from '../shared/Basic/LinkSwitch'
import {mobileFlag}     from '../features/site/siteSlice'
import HeaderMenu       from '../shared/Menus/HeaderMenu'
import MobileHeaderMenu from '../shared/Menus/MobileHeaderMenu'
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
                <LinkSwitch url="/" theme={{...headerLogoLinkStyle, ...theme.logoLink}}>
                    IJ
                </LinkSwitch>
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