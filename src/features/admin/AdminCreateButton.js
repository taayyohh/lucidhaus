import {plus}                   from 'config/icons/fa'
import {adminCreateButtonStyle} from 'features/admin/styles'
import React                    from 'react'
import Icon                     from 'shared/Basic/Icon'
import LinkSwitch               from 'shared/Basic/LinkSwitch'

const AdminCreateButton = ({url}) =>
    <LinkSwitch url={url} theme={adminCreateButtonStyle}>
        <Icon icon={plus}/>
    </LinkSwitch>

export default AdminCreateButton