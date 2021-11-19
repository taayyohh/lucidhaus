import PropTypes                                       from 'prop-types'
import React                                           from 'react'
import Div                                             from 'shared/Basic/Div'
import LinkSwitch                                      from 'shared/Basic/LinkSwitch'
import HeaderMenu                                      from 'shared/Menus/HeaderMenu'
import Logo                                            from './Logo'
import {headerInnerStyle, headerStyle, headerTopStyle} from './styles/header'

const Header = ({theme}) => {
    return (
        <Div as="header" theme={{...headerStyle, ...theme}}>
            <Div theme={headerTopStyle}>
                <Div theme={headerTopStyle.inner}>
                    <LinkSwitch
                        url={'/about'}
                        theme={headerTopStyle.link}
                    >
                        About
                    </LinkSwitch>
                    <LinkSwitch
                        url={'/faq'}
                        theme={headerTopStyle.link}
                    >
                        FAQ
                    </LinkSwitch>
                    {/*<LinkSwitch*/}
                    {/*    url={'/for-businesses'}*/}
                    {/*    theme={headerTopStyle.link}*/}
                    {/*>*/}
                    {/*    For Businesses*/}
                    {/*</LinkSwitch>*/}
                </Div>
            </Div>
            <Div theme={headerInnerStyle}>
                <Logo/>
                <HeaderMenu/>
            </Div>
        </Div>
    )
}

Header.defaultProps = {
    theme: {}
}

Header.propTypes = {
    theme: PropTypes.object
}

export default Header
