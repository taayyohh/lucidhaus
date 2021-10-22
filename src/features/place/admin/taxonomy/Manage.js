import React, {useEffect}         from 'react'
import {useSelector}              from 'react-redux'
import Div                        from 'shared/Basic/Div'
import LinkSwitch                 from 'shared/Basic/LinkSwitch'
import DeletePrompt               from 'shared/Controls/DeletePrompt'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import {adminContentWrapperStyle} from 'shared/Layout/styles'

const Manage = () => {
    const {confirmDelete} = useSelector(state => state.site)
    const TAX_PATH = '/admin/place/taxonomy'

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])


    return (
        <ContentWrapper theme={adminContentWrapperStyle}>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Place Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div theme={{display: 'flex', flexDirection: 'column'}}>
                    <LinkSwitch url={`${TAX_PATH}/bathroom`}>
                        Bathrooms
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/business-owner`}>
                        Business Owner
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/communities-served`}>
                        Communities Served
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/food-options`}>
                        Food Options
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/language-spoken`}>
                        Languages Spoken
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/place-category`}>
                        Place Category
                    </LinkSwitch>
                </Div>


                <DeletePrompt destroyAction={'admin/destroyProductCategory'}/>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
