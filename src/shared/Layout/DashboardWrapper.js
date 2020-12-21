import React         from 'react'
import Div           from 'shared/Basic/Div'
import DashboardMenu from 'shared/Menus/DashboardMenu'
import {
    dashboardContentInnerStyle,
    dashboardContentStyle,
    dashboardStyle
}                    from './styles/dashboard'

const DashboardWrapper = ({menu, children}) => {
    return (
        <Div theme={dashboardStyle}>
            <DashboardMenu menu={menu}/>
            <Div theme={dashboardContentStyle}>
                <Div theme={dashboardContentInnerStyle}>
                    {children}
                </Div>
            </Div>
        </Div>
    )
}

export default DashboardWrapper