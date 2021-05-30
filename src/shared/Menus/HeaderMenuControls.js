import {user} from 'config/icons'
import React  from 'react'
import {useSelector}                                 from 'react-redux'
import Div                                           from 'shared/Basic/Div'
import Icon                                          from 'shared/Basic/Icon'
import LinkSwitch                                    from 'shared/Basic/LinkSwitch'
import {headerIconStyle, headerMenuIconWrapperStyle} from 'shared/Layout/styles/header'
import {headerMenuControlWrapperStyle}               from './styles'

const HeaderMenuControls = () => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)

    return (
        <Div theme={headerMenuControlWrapperStyle}>
            <LinkSwitch
                url={
                    isAuthenticated && isAdmin
                        ? '/admin'
                        : isAuthenticated
                        ? '/dashboard'
                        : '/signin'
                }
                theme={headerMenuIconWrapperStyle}
            >
                <Icon
                    icon={user}
                    theme={headerIconStyle}
                />
            </LinkSwitch>
        </Div>

    )
}

export default HeaderMenuControls
