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
import DashboardInfo         from 'shared/Layout/Dashboard/DashboardInfo'

const ManageShop = () => {
    const {shop} = useSelector(state => state.shop)
    const {productsIndex} = useContext(searchContext)
    const dispatch = useDispatch()

    const [isIndexed, setIsIndexed] = useState(false)


    useEffect(() => {
        console.log('byees')
        dispatch({type: 'shop/getShop'})
        productsIndex.saveObjects(shop)
            .then(({objectIDs}) => {
                console.log('DONE')
                setIsIndexed(true)
            })
            .catch(err => {
                console.log(err)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Shop'}
                    description={'Click to edit.'}
                />
                {isIndexed && (
                    <AdminShop shop={shop}/>
                )}
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageShop
