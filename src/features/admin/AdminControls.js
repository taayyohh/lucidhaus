import React      from 'react'
import Div        from '../../Basic/Div'
import H2         from '../../Basic/H2'
import Span       from '../../Basic/Span'
import StyledLink from '../../Basic/StyledLink'
import {
    adminControlPanelInnerStyle,
    adminControlPanelStyle,
    adminCreateButtonStyle,
    adminHeadingStyle
}                 from '../../themes/admin'

const AdminControls = ({data, title, create}) => {

    return (
        <Div theme={adminControlPanelStyle}>
            <Div theme={adminControlPanelInnerStyle}>
                <H2 theme={adminHeadingStyle}>{title}</H2>
                <StyledLink theme={adminCreateButtonStyle} to={create}>
                    Create Business
                </StyledLink>
                <Span>Total: {data.length}</Span>
            </Div>
        </Div>
    )
}

export default AdminControls