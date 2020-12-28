import React from 'react'
import Div from 'shared/Basic/Div'
import {
    dashboardContentInnerStyle,
    dashboardContentStyle
}          from 'shared/Layout/Dashboard/styles'

const DashboardContent = ({content}) =>
    <Div theme={dashboardContentStyle}>
        <Div theme={dashboardContentInnerStyle}>
            {content}
        </Div>
    </Div>

export default DashboardContent