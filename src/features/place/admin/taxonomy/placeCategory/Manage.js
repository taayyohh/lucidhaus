import BreadCrumb                 from 'features/place/admin/views/Breadcrumb'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import LinkSwitch                 from 'shared/Basic/LinkSwitch'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import {adminContentWrapperStyle} from 'shared/Layout/styles'
import Create                     from './Create'

const ManagePlaceCategory = () => {
    const dispatch = useDispatch()
    const {placeCategory} = useSelector(state => state.place.taxonomy)
    const {slug} = useSelector(state => state.site)

    useEffect(() => {
        dispatch({type: 'place/listPlaceCategory'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={adminContentWrapperStyle}>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Place Taxonomy'}
                    description={'Click to edit.'}
                />
                <BreadCrumb/>
                <Div theme={{display: 'flex'}}>
                    {placeCategory?.length > 0 && (
                        <Div>
                            Total: {placeCategory?.length}
                            <Div>
                                {placeCategory?.map((item) => (
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

export default ManagePlaceCategory
