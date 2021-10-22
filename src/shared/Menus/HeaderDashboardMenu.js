import React                        from 'react'
import {useDispatch, useSelector}   from 'react-redux'
import Div                          from 'shared/Basic/Div'
import LinkSwitch                   from 'shared/Basic/LinkSwitch'
import {globalMenuIsActive}         from './helpers'
import {headerAccountMenuLinkStyle} from './styles'

const HeaderDashboardMenu = ({menu}) => {
    const dispatch = useDispatch()
    const {url} = useSelector(state => state.site)

    return (
        <Div theme={{display: 'flex', flexDirection: 'column'}}>
            {menu && menu.map((item) =>
                <LinkSwitch
                    key={item.url}
                    url={item.url}
                    theme={headerAccountMenuLinkStyle(globalMenuIsActive({item, url}))}
                    onClick={() => dispatch({type: 'site/closeHeaderMenuDropdown', payload: true})}
                >
                    {item.title}
                </LinkSwitch>
            )}

        </Div>
    )
}

export default HeaderDashboardMenu
