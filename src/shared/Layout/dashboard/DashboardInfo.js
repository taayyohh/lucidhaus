import React                from 'react'
import Div                  from 'shared/Basic/Div'
import DashboardDescription from './DashboardDescription'
import DashboardHeading     from './DashboardHeading'
import {dashboardInfoStyle} from './styles'

const DashboardInfo = ({heading, description}) =>
    <Div theme={dashboardInfoStyle}>
        <DashboardHeading children={heading}/>
        <DashboardDescription children={description}/>
    </Div>

export default DashboardInfo