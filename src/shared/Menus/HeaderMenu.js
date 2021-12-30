import {shoppingCart}                                                 from 'config/icons'
import {headerMenu}                                                   from 'config/menus/header'
import {mobileFlag}                                                   from 'features/site/slice'
import React, {useContext}                                            from 'react'
import {useSelector}                                                  from 'react-redux'
import Div                                                            from 'shared/Basic/Div'
import Icon                                                           from 'shared/Basic/Icon'
import MotionDiv                                                      from 'shared/Basic/MotionDiv'
import {menuPanelContext}                                             from 'shared/Containers/MenuPanelController'
import {cartNumberStyle, headerIconStyle, headerMenuIconWrapperStyle} from 'shared/Layout/styles/header'
import MenuPanels                                                     from 'shared/Menus/MenuPanel'
import {transparent}                                                  from 'utils/themer'
import HeaderMenuControls                                             from './HeaderMenuControls'
import HeaderMenuItems                                                from './HeaderMenuItems'
import MenuToggle                                                     from './MenuToggle'
import {headerMenuStyle, menuToggleStyle}                             from './styles'

const HeaderMenu = () => {
    const {setPanel, currentPanel} = useContext(menuPanelContext)
    const isMobile = useSelector(mobileFlag)
    const {cart} = useSelector(state => state.shop)


    return (
        <Div theme={headerMenuStyle}>
            {(!isMobile && (
                <>
                    <HeaderMenuItems items={headerMenu}/>
                    <HeaderMenuControls/>
                </>
            )) || (
                <>
                    <Div
                        onClick={() => setPanel('cart-menu-panel')}
                        theme={headerMenuIconWrapperStyle}
                    >
                        <Icon
                            icon={shoppingCart}
                            theme={headerIconStyle}
                        />
                        <MotionDiv
                            as={'sup'}
                            theme={cart.length > 0
                                ? {...cartNumberStyle}
                                : {
                                    ...cartNumberStyle,
                                    color: transparent,
                                    backgroundColor: transparent
                                }
                            }
                            children={cart.length}
                        />
                    </Div>
                    <MenuToggle
                        theme={menuToggleStyle}
                        onClick={
                            () => setPanel(
                                !currentPanel
                                    ? 'mobile-header-menu-panel'
                                    : null
                            )}
                    />

                    {/*<Div*/}
                    {/*    theme={headerSearchWrapperStyle}*/}
                    {/*    onClick={*/}
                    {/*        () => setPanel(*/}
                    {/*            !currentPanel*/}
                    {/*                ? 'search-menu'*/}
                    {/*                : null*/}
                    {/*        )}*/}
                    {/*>*/}
                    {/*    <Icon*/}
                    {/*        icon={search}*/}
                    {/*        theme={headerSearchIconStyle}*/}
                    {/*    />*/}
                    {/*</Div>*/}
                </>
            )}
            <MenuPanels/>
        </Div>
    )
}

export default HeaderMenu
