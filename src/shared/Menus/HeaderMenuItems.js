import React                     from 'react'
import {absolute}                from '../../utils/themer'
import Div                       from '../Basic/Div'
import LinkSwitch                from '../Basic/LinkSwitch'
import {headerMenuListItemStyle} from './styles'

const HeaderMenuItems = () =>
    <>
        <LinkSwitch
            url="/posts"
            theme={headerMenuListItemStyle}
        >
            Posts
        </LinkSwitch>
        <LinkSwitch
            url="/shop"
            theme={headerMenuListItemStyle}
        >
            Shop
        </LinkSwitch>
    </>

export default HeaderMenuItems