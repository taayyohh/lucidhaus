import React                        from 'react'
import Div                          from 'shared/Basic/Div'
import LinkSwitch                   from 'shared/Basic/LinkSwitch'
import {headerAccountMenuLinkStyle} from './styles'

const HeaderDashboardMenu = ({menu}) => {
    return (
        <Div theme={{display: 'flex', flexDirection: 'column'}}>
            {menu && menu.map((item) =>
                <LinkSwitch
                    key={item.url}
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
