import React                       from 'react'
import Div                         from 'shared/Basic/Div'
import {dashboardDescriptionStyle} from 'shared/Layout/Dashboard/styles'

const DashboardDescription = ({children}) =>
    <Div theme={dashboardDescriptionStyle}>{children}</Div>

export default DashboardDescription
