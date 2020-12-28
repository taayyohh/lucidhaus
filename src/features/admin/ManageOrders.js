import {
    orderStatusActiveIndicatorStyle,
    orderStatusFilterStyle,
    orderStatusFilterWrapperStyle
} from 'features/admin/styles'
import React, {
    useEffect,
    useState
}                               from 'react'
import {
    useDispatch,
    useSelector
}                               from 'react-redux'
import Div                      from 'shared/Basic/Div'
import MotionDiv                from 'shared/Basic/MotionDiv'
import OrderCard             from 'shared/Cards/OrderCard'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import ContentWrapper           from 'shared/Layout/ContentWrapper'
import DashboardInfo            from 'shared/Layout/Dashboard/DashboardInfo'
import {adminOrderWrapperStyle} from './styles'

const ManageOrders = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {orders, updatedOrder} = useSelector(state => state.shop)
    const [orderStatusFilter, setOrderStatusFilter] = useState('Not processed')
    const filters = ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

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
                    description={'Click to edit.'}
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
                    {orders && orders.map(o => o.status === orderStatusFilter && (
                            <OrderCard
                                key={o._id}
                                o={o}
                            />
                        )
                    )}
                </Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default ManageOrders
