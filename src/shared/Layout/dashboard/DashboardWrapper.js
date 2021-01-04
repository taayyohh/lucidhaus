import React            from 'react'
import Div              from 'shared/Basic/Div'
import DashboardContent from 'shared/Layout/dashboard/DashboardContent'
import DashboardMenu    from 'shared/Menus/DashboardMenu'
import {dashboardStyle} from 'shared/Layout/dashboard/styles'

const DashboardWrapper = ({menu, children}) =>
    <Div theme={dashboardStyle}>
        <DashboardMenu menu={menu}/>
        <DashboardContent content={children}/>
    </Div>

export default DashboardWrapper