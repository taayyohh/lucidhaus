import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import AdminShop             from 'features/admin/AdminShop'
import React, {
    useContext,
    useEffect
}                            from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import {searchContext}       from 'shared/Containers/SearchController'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'

const ManageShop = () => {
    const {shop} = useSelector(state => state.shop)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()
    const {productsIndex} = useContext(searchContext)

    useEffect(() => {
        console.log('shop', shop)
        if (shop.length > 0)
            productsIndex.saveObjects(shop)
                .then(({objectIDs}) => {

                })
                .catch(err => {
                    console.log(err)
                })

    }, [shop])

    useEffect(() => {
        dispatch({type: 'shop/getShop'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])


    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Shop'}
                    description={'Click to edit.'}
                />
                <AdminShop shop={shop}/>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageShop
