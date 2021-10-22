import React                                                                       from 'react'
import {useDispatch, useSelector}                                                  from 'react-redux'
import Div                                                                         from 'shared/Basic/Div'
import LinkSwitch                                                                  from 'shared/Basic/LinkSwitch'
import MotionDiv                                                                   from 'shared/Basic/MotionDiv'
import {dashboardActiveIndicator, dashboardItemTitleStyle, dashboardMenuItemStyle} from 'shared/Menus/styles'
import {globalMenuIsActive}                                                        from './helpers'

const DashboardMenuItem = ({item}) => {
    const dispatch = useDispatch()
    const {url} = useSelector(state => state.site)

    return (
        <LinkSwitch
            url={item.url}
            theme={dashboardMenuItemStyle(globalMenuIsActive({item, url}))}
            onClick={
                item.dispatchAction
                    ? () => dispatch({type: item.dispatchAction})
                    : null
            }
        >
            <Div theme={dashboardItemTitleStyle}>
                {item.title}
            </Div>
            {(globalMenuIsActive({item, url})) && (
                <MotionDiv
                    layoutId={'dashboard-active'}
                    theme={dashboardActiveIndicator}
                />
            )}
        </LinkSwitch>
    )
}

export default DashboardMenuItem
