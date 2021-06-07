import {plus}                   from 'config/icons'
import {adminCreateButtonStyle} from 'shared/Layout/Dashboard/admin/styles'
import React                    from 'react'
import Icon                     from 'shared/Basic/Icon'
import LinkSwitch               from 'shared/Basic/LinkSwitch'

const AdminCreateButton = ({url}) =>
    <LinkSwitch url={url} theme={adminCreateButtonStyle}>
        <Icon icon={plus}/>
    </LinkSwitch>

export default AdminCreateButton
