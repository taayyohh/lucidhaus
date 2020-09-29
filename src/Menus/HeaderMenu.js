import React, {useContext} from 'react'
import Div from '../Basic/Div'
import Ul from '../Basic/Div'
import Span from '../Basic/Span'
import StyledLink from '../Basic/StyledLink'
import {menuPanelContext} from '../Containers/MenuPanelController'
import {itemTotal} from '../Shop/cartHelpers'
import {headerMenu, headerMenuAuth} from '../themes/header'
import {useDispatch, useSelector} from "react-redux";


// const isActive = (history, path) => history.location.pathname === path

const HeaderMenu = () => {
    const dispatch = useDispatch()
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)
    const {setPanel} = useContext(menuPanelContext)


    return (

        <Div theme={headerMenu}>
            <Ul theme={headerMenu.list}>
                <li>
                    <StyledLink
                        to="/businesses"
                        theme={{...headerMenu.listItem}}>
                        Businesses
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        to="/shop"
                        theme={{...headerMenu.listItem}}>
                        Shop
                    </StyledLink>
                </li>
                <li>
                    <Div
                        onClick={() => setPanel({name: 'cart-menu-panel'})}
                        theme={{...headerMenu.listItem}}>
                        Cart
                        <sup>
                            {itemTotal()}
                        </sup>
                    </Div>
                </li>
            </Ul>
            <Div theme={headerMenuAuth}>
                <Ul theme={headerMenuAuth.list}>
                    {!isAuthenticated && (
                        <>
                            <li>
                                <StyledLink
                                    to="/signin"
                                    theme={headerMenuAuth.listItem}>
                                    Sign in
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink
                                    to="/signup"
                                    theme={headerMenuAuth.listItem}>
                                    Sign Up
                                </StyledLink>
                            </li>
                        </>
                    )}
                    {isAuthenticated && (
                        <li>
                            <Span
                                to="/signout"
                                theme={headerMenuAuth.listItem}
                                onClick={() => dispatch({type: 'user/signOut'})}>
                                Sign Out
                            </Span>
                        </li>
                    )}
                    {isAuthenticated && !isAdmin && (
                        <li>
                            <StyledLink
                                to="/user/dashboard"
                                theme={headerMenuAuth.listItem}>
                                Profile
                            </StyledLink>
                        </li>
                    )}
                    {isAuthenticated && isAdmin && (
                        <li>
                            <StyledLink
                                to="/admin/dashboard"
                                theme={headerMenuAuth.listItem}>
                                Dashboard
                            </StyledLink>
                        </li>
                    )}
                    {(isAuthenticated && isAdmin) && (
                        <li>
                            <Div
                                onClick={() => setPanel({name: 'admin-menu-panel'})}
                                theme={headerMenuAuth.listItem}
                            >
                                Admin Menu
                            </Div>
                        </li>
                    )}


                </Ul>
            </Div>
        </Div>

    )
}


export default HeaderMenu