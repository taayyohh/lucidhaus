import React       from 'react'
import {
    isAuthenticated,
    signout
}                  from '../api/apiAuth'
import Div         from '../Basic/Div'
import Ul          from '../Basic/Div'
import Span        from '../Basic/Span'
import StyledLink  from '../Basic/StyledLink'
import {history}   from '../redux/store'
import {itemTotal} from '../Shop/cartHelpers'
import {
    headerMenu,
    headerMenuAuth
}                  from '../themes/header'
import {useSelector} from "react-redux";


// const isActive = (history, path) => history.location.pathname === path

const HeaderMenu = () => {
    const {isAuthenticated, isAdmin} = useSelector(state => state.user)

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
                    <StyledLink
                        to="/cart"
                        theme={{...headerMenu.listItem}}>
                        Cart
                        <sup>
                            {itemTotal()}
                        </sup>
                    </StyledLink>
                </li>
            </Ul>
            <Div theme={headerMenuAuth}>
                <Ul theme={headerMenuAuth.list}>
                    {!isAuthenticated && ( //// should be implemented with Redux
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
                                onClick={() => signout(() => {
                                    history.push('/')

                                })}>
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

                </Ul>
            </Div>
        </Div>

    )
}


export default HeaderMenu