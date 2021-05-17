import {adminDashboardMenu} from 'config/menus/dashboardAdmin'
import React, {useContext}  from 'react'
import {useSelector}        from 'react-redux'
import Div                  from 'shared/Basic/Div'
import {mapContext}         from 'shared/Containers/MapController'
import ContentWrapper       from 'shared/Layout/ContentWrapper'
import DashboardInfo        from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper     from 'shared/Layout/Dashboard/DashboardWrapper'

const AdminDashboard = () => {
    const {name, tel} = useSelector(state => state.user)
    const {geo, getLocation, coords} = useContext(mapContext)
    // /geocoding/v5/{endpoint}/{longitude},{latitude}.json

    return (
        <ContentWrapper>
            <DashboardWrapper menu={adminDashboardMenu}>
                <DashboardInfo
                    heading={`Hey, ${name}`}
                    description={`${tel}`}
                />
                <Div theme={{display: 'flex', flexDirection: 'column'}}>
                    <Div>Long: {coords?.lon}</Div>
                    <Div>Lat: {coords?.lat}</Div>
                </Div>
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default AdminDashboard
