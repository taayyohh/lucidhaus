import React            from 'react'
import Div              from 'shared/Basic/Div'
import DashboardContent from 'shared/Layout/Dashboard/DashboardContent'
import {dashboardStyle} from 'shared/Layout/Dashboard/styles'
import DashboardMenu    from 'shared/Menus/DashboardMenu'

const DashboardWrapper = ({menu, children}) =>
    <Div theme={dashboardStyle}>
        <DashboardMenu menu={menu}/>
        <DashboardContent content={children}/>
    </Div>

export default DashboardWrapper