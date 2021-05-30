import AdminDashboardWrapper    from 'features/admin/views/AdminDashboardWrapper'
import List                     from 'features/shop/admin/order/views/List'
import {
    orderStatusActiveIndicatorStyle,
    orderStatusFilterStyle,
    orderStatusFilterWrapperStyle
}                               from 'features/admin/views/styles'
import React, {
    useContext,
    useEffect,
    useState
}                               from 'react'
import {
    useDispatch,
    useSelector
}                               from 'react-redux'
import Div                      from 'shared/Basic/Div'
import MotionDiv                from 'shared/Basic/MotionDiv'
import {searchContext}          from 'shared/Containers/SearchController'
import ContentWrapper           from 'shared/Layout/ContentWrapper'
import DashboardInfo            from 'shared/Layout/Dashboard/DashboardInfo'
import {adminOrderWrapperStyle} from 'features/admin/views/styles'

const Manage = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {orders, updatedOrder} = useSelector(state => state.shop)
    const [orderStatusFilter, setOrderStatusFilter] = useState('Pending')
    const filters = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
    const {ordersIndex} = useContext(searchContext)

    useEffect(() => {
        if (orders.length > 0)
            ordersIndex.saveObjects(orders)
                .then(({objectIDs}) => {

                })
                .catch(error => {
                    console.log(error)
                })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orders])

    useEffect(() => {
        dispatch({
            type: 'shop/getStatusValues',
            payload: {
                _id: _id,
                token: token
            }
        })
        dispatch({
            type: 'shop/getOrders',
            payload: {
                _id: _id,
                token: token
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'shop/getOrders',
            payload: {
                _id: _id,
                token: token
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedOrder])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Orders'}
                    description={'Update and track the status of our orders.'}
                />

                <Div theme={orderStatusFilterWrapperStyle}>
                    {filters.map((filter) =>
                        <Div
                            key={filter}
                            onClick={() => setOrderStatusFilter(filter)}
                            theme={orderStatusFilterStyle(filter === orderStatusFilter)}
                        >
                            {filter}
                            {filter === orderStatusFilter && (
                                <MotionDiv
                                    layoutId={'activeOrderFilterIndicator'}
                                    theme={orderStatusActiveIndicatorStyle}
                                />
                            )}
                        </Div>
                    )}
                </Div>

                <Div theme={adminOrderWrapperStyle}>
                    {orders && orders.map((o, i) => o.status === orderStatusFilter && (
                            <List
                                key={i}
                                order={o}
                            />
                        )
                    )}
                </Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
