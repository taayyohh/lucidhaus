import React      from 'react'
import {
    useDispatch,
    useSelector
}                 from 'react-redux'
import Div        from 'shared/Basic/Div'
import Icon       from 'shared/Basic/Icon'
import LinkSwitch from 'shared/Basic/LinkSwitch'
import MotionDiv  from 'shared/Basic/MotionDiv'
import {
    dashboardActiveIndicator,
    dashboardIconWrapperStyle,
    dashboardItemTitleStyle,
    dashboardMenuInnerStyle,
    dashboardMenuItemStyle,
    dashboardMenuStyle
}                 from './styles'

const DashboardMenu = ({menu}) => {
    const dispatch = useDispatch()
    const {slug} = useSelector(state => state.site)

    return (
        <Div theme={dashboardMenuStyle}>
            <Div theme={dashboardMenuInnerStyle}>
                {menu?.map((item, i) => (
                    <LinkSwitch
                        key={i}
                        url={item.url}
                        theme={dashboardMenuItemStyle(item?.url?.includes(slug))}
                        onClick={
                            item.dispatchAction
                                ? () => dispatch({type: item.dispatchAction})
                                : null
                        }
                    >
                        {item.icon && (
                            <Div theme={dashboardIconWrapperStyle}>
                                <Icon icon={item.icon}/>
                            </Div>
                        )}
                        <Div theme={dashboardItemTitleStyle}>
                            {item.title}
                        </Div>
                        {!!item?.url?.includes(slug) && (
                            <MotionDiv layoutId={'dashboard-active'} theme={dashboardActiveIndicator}/>
                        )}
                    </LinkSwitch>
                ))}
            </Div>
        </Div>
    )
}

export default DashboardMenu