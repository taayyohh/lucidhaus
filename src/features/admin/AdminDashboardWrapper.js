import {adminDashboardMenu} from 'config/menus'
import PropTypes            from 'prop-types'
import React                from 'react'
import DashboardWrapper     from 'shared/Layout/Dashboard/DashboardWrapper'

const AdminDashboardWrapper = ({children, title, description}) =>
    <DashboardWrapper
        menu={adminDashboardMenu}
        title={title}
        description={description}
    >
        {children}
    </DashboardWrapper>

AdminDashboardWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    title: PropTypes.string,
    description: PropTypes.string
}

export default AdminDashboardWrapper