import React                        from 'react'
import Div                          from '../Basic/Div'
import LinkSwitch                   from '../Basic/LinkSwitch'
import {headerAccountMenuLinkStyle} from './styles'

const HeaderDashboardMenu = ({menu}) => {
    return (
        <Div theme={{display: 'flex', flexDirection: 'column'}}>
            {menu && menu.map((item) =>
                <LinkSwitch
                    url={item.url}
                    theme={headerAccountMenuLinkStyle}
                >
                    {item.title}
                </LinkSwitch>
            )}

        </Div>
    )
}

export default HeaderDashboardMenu
