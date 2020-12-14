import React                     from 'react'
import LinkSwitch                from 'shared/Basic/LinkSwitch'
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