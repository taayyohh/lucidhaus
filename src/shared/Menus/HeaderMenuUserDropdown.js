import {chevronDown}                                                                                     from 'config/icons'
import React, {useState}          from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div
                                  from 'shared/Basic/Div'
import Icon
                                                                                                         from 'shared/Basic/Icon'
import MotionDiv
                                                                                                         from 'shared/Basic/MotionDiv'
import {headerIconStyle}                                                                                 from 'shared/Layout/styles/header'
import {adminDashboardMenu}                                                                              from '../../config/menus/dashboard/admin'
import {userDashboardMenu}                                                                               from '../../config/menus/dashboard/user'
import {globals}                                                                                         from '../../config/styles'
import Span
                                                                                                         from '../Basic/Span'
import HeaderDashboardMenu
                                                                                                         from './HeaderDashboardMenu'
import {headerAccountMenuButtonStyle, headerAccountMenuDropdownWrapperStyle, headerAccountMenuLinkStyle} from './styles'

const HeaderMenuUserDropdown = ({nameFirst}) => {
    const {isAdmin} = useSelector(state => state.user)
    const [isOpen, setIsOpen] = useState()
    const dispatch = useDispatch()

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

    return (
        <Div
            theme={headerAccountMenuButtonStyle}
            onClick={() => setIsOpen(flag => !flag)}
        >
            {`Hi, ${nameFirst}`}
            <Icon
                icon={chevronDown}
                theme={headerIconStyle}
            />
            <MotionDiv
                intial={{height: 0}}
                animate={isOpen ? 'open' : 'initial'}
                variants={variants}
                theme={headerAccountMenuDropdownWrapperStyle}
            >
                <Div theme={{display: 'flex', padding: '20px', flexDirection: 'column', width: '100%'}}>
                    <HeaderDashboardMenu
                        menu={isAdmin ? adminDashboardMenu : userDashboardMenu}
                    />
                    <Span
                        theme={{...headerAccountMenuLinkStyle, ...headerAccountMenuLinkStyle.signOut}}
                        onClick={() => dispatch({type: 'user/signOut'})}
                    >
                        Sign Out
                    </Span>
                </Div>


            </MotionDiv>
        </Div>
    )
}

export default HeaderMenuUserDropdown
