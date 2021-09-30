import React                                                                       from 'react'
import {useDispatch, useSelector}                                                  from 'react-redux'
import Div                                                                         from 'shared/Basic/Div'
import LinkSwitch                                                                  from 'shared/Basic/LinkSwitch'
import MotionDiv                                                                   from 'shared/Basic/MotionDiv'
import {dashboardActiveIndicator, dashboardItemTitleStyle, dashboardMenuItemStyle} from 'shared/Menus/styles'

const DashboardMenuItem = ({item}) => {
    const dispatch = useDispatch()
    const {url} = useSelector(state => state.site)
    const itemUrl = item?.url?.split('/').filter(u => u.length !== 0)
    const isActive = ({url, itemUrl}) => {
        if (!!itemUrl)
            switch (url.length) {
                case 1:
                    return itemUrl.length === 1 && itemUrl[0] === url[0]
                case 2:
                    return (itemUrl.length === 2 && (itemUrl[1] === url[1])) || (item && !!item?.active?.find((i) => i === url[1]))
                case 3:
                    return itemUrl[2] === url[2]
                case 4:
                    return itemUrl[1] === url[1] && itemUrl.length === 2
                default:
                    return false
            }
    }

    return (
        <LinkSwitch
            url={item.url}
            theme={dashboardMenuItemStyle(isActive({url, itemUrl}))}
            onClick={
                item.dispatchAction
                    ? () => dispatch({type: item.dispatchAction})
                    : null
            }
        >
            <Div theme={dashboardItemTitleStyle}>
                {item.title}
            </Div>
            {isActive({url, itemUrl}) && (
                <MotionDiv
                    layoutId={'dashboard-active'}
                    theme={dashboardActiveIndicator}
                />
            )}
        </LinkSwitch>
    )
}

export default DashboardMenuItem
