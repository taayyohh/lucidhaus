import React, {useContext} from 'react'
import {
    useDispatch,
    useSelector
}                          from 'react-redux'
import Div                 from '../Basic/Div'
import Span                from '../Basic/Span'
import StyledLink          from '../Basic/StyledLink'
import {menuPanelContext}  from '../Containers/MenuPanelController'
import {itemTotal}         from '../Shop/cartHelpers'
import {
    headerMenuAuthStyle,
    headerMenuAuthStyleListItemStyle,
    headerMenuListItemStyle,
    headerMenuListStyle,
    headerMenuStyle
} from '../themes/header'

const HeaderMenu = () => {
    const dispatch = useDispatch()
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)
    const {setPanel} = useContext(menuPanelContext)


    return (
        <Div theme={headerMenuStyle}>
            <Div as="nav" theme={headerMenuListStyle}>
                <StyledLink
                    to="/marketplace"
                    theme={headerMenuListItemStyle}>
                    Businesses
                </StyledLink>

                <StyledLink
                    to="/shop"
                    theme={headerMenuListItemStyle}>
                    Shop
                </StyledLink>
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
                        <StyledLink
                            to="/signin"
                            theme={headerMenuAuthStyleListItemStyle}>
                            Sign in
                        </StyledLink>
                        <StyledLink
                            to="/signup"
                            theme={headerMenuAuthStyleListItemStyle}>
                            Sign Up
                        </StyledLink>

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
                    <StyledLink
                        to="/user/dashboard"
                        theme={headerMenuAuthStyleListItemStyle}>
                        Profile
                    </StyledLink>
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
}


export default HeaderMenu