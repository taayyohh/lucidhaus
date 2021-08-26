import logo                       from 'assets/logo.png'
import PropTypes                  from 'prop-types'
import React                      from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import Img                        from 'shared/Basic/Img'
import LinkSwitch                 from 'shared/Basic/LinkSwitch'
import Span                       from 'shared/Basic/Span'
import HeaderMenu                 from 'shared/Menus/HeaderMenu'
import HeaderMenuControls         from 'shared/Menus/HeaderMenuControls'
import {
    headerInnerStyle,
    headerLogoLinkStyle,
    headerLogoWrapperStyle,
    headerNowPlayingStyle,
    headerStyle,
    headerTopStyle
}                                 from './styles/header'

const Header = ({theme}) => {
    const {isAuthenticated} = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <Div as="header" theme={{...headerStyle, ...theme}}>
            <Div theme={headerTopStyle}>
                <Div theme={headerTopStyle.inner}>
                    {(isAuthenticated && (
                        <Span
                            theme={headerTopStyle.link}
                            onClick={() => dispatch({type: 'user/signOut'})}
                        >
                            Sign Out
                        </Span>
                    )) || (
                        <LinkSwitch
                            url={'/signin'}
                            theme={headerTopStyle.link}
                        >
                            Signin
                        </LinkSwitch>
                    )}
                    {!isAuthenticated && (
                        <LinkSwitch
                            url={'/signup'}
                            theme={headerTopStyle.signUp}
                        >
                            Sign Up
                        </LinkSwitch>
                    )}
                    <HeaderMenuControls/>
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
