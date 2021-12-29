import List                                     from 'features/shop/admin/product/views/List'
import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector}               from 'react-redux'
import LinkSwitch                               from 'shared/Basic/LinkSwitch'
import {searchContext}                          from 'shared/Containers/SearchController'
import ContentWrapper                           from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper                    from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import DashboardInfo                            from 'shared/Layout/Dashboard/DashboardInfo'
import {userContentWrapperStyle}                from '../../../../user/admin/views/styles'

const Manage = () => {
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
        <ContentWrapper theme={userContentWrapperStyle}>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Shop'}
                    description={'Type & Enter to search. Click to edit.'}
                />
                <LinkSwitch url={'/admin/shop/taxonomy'} children={'Manage Product Taxonomy'}/>
                {isIndexed && (
                    <List shop={shop}/>
                )}
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
