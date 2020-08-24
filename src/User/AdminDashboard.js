import React                 from 'react'
import {isAuthenticated}     from '../api/apiAuth'
import Div                   from '../Basic/Div'
import H3                    from '../Basic/H3'
import Li                    from '../Basic/Li'
import Ul                    from '../Basic/Ul'
import {adminDashboardStyle} from '../themes/admin'

const AdminDashboard = () => {
    const {user: {name, email, role}} = isAuthenticated()


    return (
        <Div theme={adminDashboardStyle}>
            <H3 theme={adminDashboardStyle.heading}>Hey, {name}</H3>
            <Ul>
                <Li>{email}</Li>
                <Li>{role === 1 ? 'Admin' : 'Registerd User'}</Li>
            </Ul>
        </Div>
    )
}

export default AdminDashboard