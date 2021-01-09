import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import AdminShop             from 'features/admin/AdminShop'
import React, {
    useContext,
    useEffect,
    useState
}                            from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import {searchContext}       from 'shared/Containers/SearchController'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import DashboardInfo         from 'shared/Layout/dashboard/DashboardInfo'

const ManageShop = () => {
    const {shop} = useSelector(state => state.shop)
    const {productsIndex} = useContext(searchContext)
    const dispatch = useDispatch()
    const [isIndexed, setIsIndexed] = useState(false)

    useEffect(() => {
        dispatch({type: 'shop/getShop'})
        productsIndex.saveObjects(shop)
            .then(() => setIsIndexed(true))
            .catch(error =>
                dispatch({
                    type: 'site/setNotification',
                    payload: {notification: error}
                })
            )

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Shop'}
                    description={'Search to find. Click to edit.'}
                />
                {isIndexed && (
                    <AdminShop shop={shop}/>
                )}
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageShop
