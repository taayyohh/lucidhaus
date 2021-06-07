import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import LinkSwitch                 from 'shared/Basic/LinkSwitch'
import BreadCrumb                 from 'features/user/admin/views/Breadcrumb'
import Create                     from './Create'

const ManageBodyModifications = () => {
    const dispatch = useDispatch()
    const {bodyModification} = useSelector(state => state.user.taxonomy)
    const {slug} = useSelector(state => state.site)

    useEffect(() => {
        dispatch({type: 'user/listBodyModification'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Body Modification Taxonomy'}
                    description={'Click to edit.'}
                />

                <BreadCrumb />
                <Div theme={{display: 'flex'}}>
                    {bodyModification?.length > 0 && (
                        <Div>
                            Total: {bodyModification?.length}
                            <Div>
                                {bodyModification?.map((item) => (
                                    <LinkSwitch
                                        theme={{display: 'block'}}
                                        url={`${slug}/update/${item.slug}`}
                                        key={item._id}
                                    >
                                        {item.name}
                                    </LinkSwitch>
                                ))}
                            </Div>
                        </Div>
                    )}
                    <Create/>
                </Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageBodyModifications
