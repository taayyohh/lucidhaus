import React               from 'react'
import H2                      from 'shared/Basic/H2'
import {dashboardHeadingStyle} from 'shared/Layout/Dashboard/styles'

const DashboardHeading = ({children}) =>
    <H2 theme={dashboardHeadingStyle}>{children}</H2>
export default DashboardHeading