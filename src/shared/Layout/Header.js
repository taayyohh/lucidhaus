import PropTypes        from 'prop-types'
import React, {memo}    from 'react'
import {useSelector}    from 'react-redux'
import {mobileFlag}     from '../../features/site/siteSlice'
import {
    headerInnerStyle,
    headerLogoLinkStyle,
    headerStyle
}                       from '../../themes/header'
import Div              from '../Basic/Div'
import LinkSwitch       from '../Basic/LinkSwitch'
import HeaderMenu       from '../Menus/HeaderMenu'
import MobileHeaderMenu from '../Menus/MobileHeaderMenu'

const Header = memo(({theme}) => {
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
})


Header.defaultProps = {
    theme: {},
}

Header.propTypes = {
    theme: PropTypes.object,
}

export default Header