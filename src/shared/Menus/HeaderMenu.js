import React, {
    memo,
    useContext
}                         from 'react'
import {
    useDispatch,
    useSelector
}                  from 'react-redux'
import {itemTotal} from '../../utils/cartHelpers'
import {
    headerMenuAuthStyle,
    headerMenuAuthStyleListItemStyle,
    headerMenuListItemStyle,
    headerMenuListStyle,
    headerMenuStyle
}                  from '../../themes/header'
import Div                from '../Basic/Div'
import LinkSwitch         from '../Basic/LinkSwitch'
import Span               from '../Basic/Span'
import {menuPanelContext} from '../Containers/MenuPanelController'

const HeaderMenu = memo(() => {
    const dispatch = useDispatch()
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)
    const {setPanel} = useContext(menuPanelContext)

    return (
        <Div theme={headerMenuStyle}>
            <Div as="nav" theme={headerMenuListStyle}>
                <LinkSwitch
                    url="/marketplace"
                    theme={headerMenuListItemStyle}>
                    Businesses
                </LinkSwitch>

                <LinkSwitch
                    url="/shop"
                    theme={headerMenuListItemStyle}>
                    Shop
                </LinkSwitch>
                <Div
                    onClick={() => setPanel({name: 'cart-menu-panel'})}
                    theme={headerMenuListItemStyle}>
                    Cart
                    <sup>
                        {itemTotal()}
                    </sup>
                </Div>
            </Div>
            <Div as="nav" theme={headerMenuAuthStyle}>
                {!isAuthenticated && (
                    <>
                        <LinkSwitch
                            url="/signin"
                            theme={headerMenuAuthStyleListItemStyle}>
                            Sign in
                        </LinkSwitch>
                        <LinkSwitch
                            url="/signup"
                            theme={headerMenuAuthStyleListItemStyle}>
                            Sign Up
                        </LinkSwitch>

                    </>
                )}
                {isAuthenticated && (
                    <Span
                        to="/signout"
                        theme={headerMenuAuthStyleListItemStyle}
                        onClick={() => dispatch({type: 'user/signOut'})}>
                        Sign Out
                    </Span>
                )}
                {isAuthenticated && !isAdmin && (
                    <LinkSwitch
                        url="/user/dashboard"
                        theme={headerMenuAuthStyleListItemStyle}>
                        Profile
                    </LinkSwitch>
                )}
                {(isAuthenticated && isAdmin) && (
                    <Div
                        onClick={() => setPanel({name: 'admin-menu-panel'})}
                        theme={headerMenuAuthStyleListItemStyle}
                    >
                        Admin Menu
                    </Div>
                )}
            </Div>
        </Div>

    )
})


export default HeaderMenu