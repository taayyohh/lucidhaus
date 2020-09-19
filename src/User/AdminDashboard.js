import React from 'react'
import Div from '../Basic/Div'
import H3 from '../Basic/H3'
import Li from '../Basic/Li'
import Ul from '../Basic/Ul'
import {adminDashboardStyle} from '../themes/admin'
import {useSelector} from "react-redux";

const AdminDashboard = () => {
    const {name, email, isAdmin} = useSelector(state => state.user)


    return (
        <Div theme={adminDashboardStyle}>
            <H3 theme={adminDashboardStyle.heading}>Hey, {name}</H3>
            <Ul>
                <Li>{email}</Li>
                <Li>{isAdmin ? 'Admin' : 'Registerd User'}</Li>
            </Ul>
        </Div>
    )
}

export default AdminDashboard