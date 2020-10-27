import React      from 'react'
import {
    adminControlPanelInnerStyle,
    adminControlPanelStyle,
    adminCreateButtonStyle,
    adminHeadingStyle
}                 from '../../themes/admin'
import Div        from '../Basic/Div'
import H2         from '../Basic/H2'
import LinkSwitch from '../Basic/LinkSwitch'
import Span       from '../Basic/Span'

const AdminControls = ({data, title, create}) => {

    return (
        <Div theme={adminControlPanelStyle}>
            <Div theme={adminControlPanelInnerStyle}>
                <H2 theme={adminHeadingStyle}>Manage {title}</H2>
                <LinkSwitch theme={adminCreateButtonStyle} url={create}>
                    Create {title}
                </LinkSwitch>
                <Span>Total: {data.length}</Span>
            </Div>
        </Div>
    )
}

export default AdminControls