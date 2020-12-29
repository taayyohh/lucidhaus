import React             from 'react'
import Div               from 'shared/Basic/Div'
import DashboardMenuItem from 'shared/Menus/DashboardMenuItem'
import {
    dashboardMenuInnerStyle,
    dashboardMenuStyle
}                        from './styles'

const DashboardMenu = ({menu}) =>
    <Div theme={dashboardMenuStyle}>
        <Div theme={dashboardMenuInnerStyle}>
            {menu?.map(item => (
                <DashboardMenuItem
                    key={item.title}
                    item={item}
                />
            ))}
        </Div>
    </Div>

export default DashboardMenu