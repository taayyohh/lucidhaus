import React         from 'react'
import {useDispatch} from 'react-redux'
import Div           from 'shared/Basic/Div'
import Icon          from 'shared/Basic/Icon'
import LinkSwitch    from 'shared/Basic/LinkSwitch'
import {
    dashboardMenuInnerStyle,
    dashboardMenuItemStyle,
    dashboardMenuStyle
}                    from './styles'

const DashboardMenu = ({menu}) => {
    const dispatch = useDispatch()

    return (
        <Div theme={dashboardMenuStyle}>
            <Div theme={dashboardMenuInnerStyle}>
                {menu?.map((item, i) => (
                    <LinkSwitch
                        key={i}
                        url={item.url}
                        theme={dashboardMenuItemStyle}
                        onClick={
                            item.dispatchAction
                                ? () => dispatch({type: item.dispatchAction})
                                : null
                        }
                    >
                        {item.icon && (
                            <Icon icon={item.icon}/>
                        )}
                        {item.title}
                    </LinkSwitch>
                ))}
            </Div>
        </Div>
    )
}

export default DashboardMenu