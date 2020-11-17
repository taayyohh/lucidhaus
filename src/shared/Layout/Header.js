import PropTypes        from 'prop-types'
import React            from 'react'
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

const Header = ({theme}) => {
    const isMobile = useSelector(mobileFlag)

    return (
        <Div as="header" theme={{...headerStyle, ...theme}}>
            <Div theme={headerInnerStyle}>
                <LinkSwitch url="/" theme={headerLogoLinkStyle}>
                    H
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

Header.propTypes = {
    theme: PropTypes.object,
}

export default Header