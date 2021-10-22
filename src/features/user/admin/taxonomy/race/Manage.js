import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import AdminDashboardWrapper      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import LinkSwitch                 from 'shared/Basic/LinkSwitch'
import BreadCrumb                 from 'features/user/admin/views/Breadcrumb'
import {adminContentWrapperStyle} from 'shared/Layout/styles'
import Create                     from './Create'

const ManageRace = () => {
    const dispatch = useDispatch()
    const {race} = useSelector(state => state.user.taxonomy)
    const {slug} = useSelector(state => state.site)

    useEffect(() => {
        dispatch({type: 'user/listRace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={adminContentWrapperStyle}>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Race Taxonomy'}
                    description={'Click to edit.'}
                />
                <BreadCrumb/>
                <Div theme={{display: 'flex'}}>
                    {race?.length > 0 && (
                        <Div>
                            Total: {race?.length}
                            <Div>
                                {race?.map((item) => (
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

export default ManageRace
