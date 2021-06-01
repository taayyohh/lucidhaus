import AdminDashboardWrapper      from 'features/admin/views/AdminDashboardWrapper'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import LinkSwitch                 from 'shared/Basic/LinkSwitch'
import DeletePrompt               from 'shared/Controls/DeletePrompt'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'

const Manage = () => {
    const {productCategories} = useSelector(state => state.shop)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()
    const TAX_PATH = '/admin/users/taxonomy'


    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])


    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage User Taxonomy'}
                    description={'Click to edit.'}
                />

                <Div theme={{display: 'flex', flexDirection: 'column'}}>
                    <LinkSwitch url={`${TAX_PATH}/adaptive-equipment`}>
                        Adaptive Equipment
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/body-modifications`}>
                        Body Modifications
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/gender`}>
                        Gender
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/language`}>
                        Language
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/methods-of-communication`}>
                        Methods of Communication
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/physical-appearance`}>
                        Physical Appearance
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/pronoun`}>
                        Pronoun
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/race`}>
                        Race
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/service-animal`}>
                        Service Animal
                    </LinkSwitch>
                    <LinkSwitch url={`${TAX_PATH}/sexual-orientation`}>
                        Sexual Orientation
                    </LinkSwitch>
                </Div>

                <DeletePrompt destroyAction={'admin/destroyProductCategory'}/>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
