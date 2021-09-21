import logo                       from 'assets/logo.png'
import PropTypes                  from 'prop-types'
import React                      from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import Img                        from 'shared/Basic/Img'
import LinkSwitch                 from 'shared/Basic/LinkSwitch'
import HeaderMenu                 from 'shared/Menus/HeaderMenu'
import {
    headerInnerStyle,
    headerLogoLinkStyle,
    headerLogoWrapperStyle,
    headerNowPlayingStyle,
    headerStyle,
    headerTopStyle
}                                 from './styles/header'

const Header = ({theme}) => {
    return (
        <Div as="header" theme={{...headerStyle, ...theme}}>
            <Div theme={headerTopStyle}>
                <Div theme={headerTopStyle.inner}>
                    <LinkSwitch
                        url={'/help'}
                        theme={headerTopStyle.link}
                    >
                        Help
                    </LinkSwitch>
                    <LinkSwitch
                        url={'/for-businesses'}
                        theme={headerTopStyle.link}
                    >
                        For Businesses
                    </LinkSwitch>
                </Div>
            </Div>
            <Div theme={headerInnerStyle}>
                <Div theme={headerNowPlayingStyle}>
                    <Div theme={headerLogoWrapperStyle}>
                        <LinkSwitch url="/" theme={headerLogoLinkStyle}>
                            <Img src={logo}/>
                        </LinkSwitch>
                    </Div>
                </Div>
                <HeaderMenu/>
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
