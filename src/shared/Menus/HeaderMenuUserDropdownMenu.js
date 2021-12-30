import {userDashboardMenu}        from 'config/menus/dashboard/user'
import {globals}                  from 'config/styles'
import React, {useRef}            from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import MotionDiv                  from 'shared/Basic/MotionDiv'
import Span                       from 'shared/Basic/Span'
import useOutsideAlerter          from 'utils/clickOutside'
import HeaderDashboardMenu        from './HeaderDashboardMenu'
import {
    headerAccountMenuDropdownInnerWrapperStyle,
    headerAccountMenuDropdownWrapperStyle,
    headerAccountMenuLinkStyle
}                                 from './styles'

const HeaderMenuUserDropdownMenu = () => {
    const dispatch = useDispatch()
    const {closeHeaderMenuDropdown} = useSelector(state => state.site)
    const menuRef = useRef(null)
    const variants = {
        initial: {
            height: 0,
            border: 'none'
        },
        open: {
            height: 'auto',
            border: `1px solid ${globals.colors.borderColor}`
        }
    }

    useOutsideAlerter(menuRef, {type: 'site/closeHeaderMenuDropdown', payload: true})

    return (
        <MotionDiv
            intial={{height: 0}}
            animate={closeHeaderMenuDropdown === false ? 'open' : 'initial'}
            exit={'initial'}
            variants={variants}
            theme={headerAccountMenuDropdownWrapperStyle}
            ref={menuRef}
        >
            <Div theme={headerAccountMenuDropdownInnerWrapperStyle}>
                <HeaderDashboardMenu
                    // menu={isAdmin ? adminDashboardMenu : userDashboardMenu}
                    menu={userDashboardMenu}

                />
                <Span
                    theme={{...headerAccountMenuLinkStyle, ...headerAccountMenuLinkStyle.signOut}}
                    onClick={() => dispatch({type: 'user/signOut'})}
                >
                    Sign Out
                </Span>
            </Div>
        </MotionDiv>
    )
}

export default HeaderMenuUserDropdownMenu
