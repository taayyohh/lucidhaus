import React from 'react'
import Div   from 'shared/Basic/Div'
import {
    dashboardContentInnerStyle,
    dashboardContentStyle
}            from './styles/dashboard'

const DashboardContent = ({content}) =>
    <Div theme={dashboardContentStyle}>
        <Div theme={dashboardContentInnerStyle}>
            {content}
        </Div>
    </Div>

export default DashboardContent