import {headerMenu}     from 'config/menus/header'
import React            from 'react'
import Div              from 'shared/Basic/Div'
import {adminMenuStyle} from 'shared/Layout/Dashboard/admin/styles'
import HeaderMenuItems  from './HeaderMenuItems'

const MobileHeaderMenu = () =>
    <Div theme={adminMenuStyle}>
        <Div theme={adminMenuStyle.list}>
            <HeaderMenuItems items={headerMenu}/>
        </Div>
    </Div>

export default MobileHeaderMenu
