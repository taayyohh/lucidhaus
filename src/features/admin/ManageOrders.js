import React, {useEffect}       from 'react'
import {
    useDispatch,
    useSelector
}                               from 'react-redux'
import Div                      from '../../shared/Basic/Div'
import H2                       from '../../shared/Basic/H2'
import {adminOrderWrapperStyle} from '../../themes/admin'
import {postContentStyle} from '../../themes/layout'
import OrderCard          from '../../shared/Elements/OrderCard'

const ManageOrders = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {orders, updatedOrder} = useSelector(state => state.shop)

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
        <Div theme={postContentStyle()}>
            <H2>
                Total orders: {orders.length}
            </H2>

            <Div theme={adminOrderWrapperStyle}>
                {orders && orders.map(o =>
                    <OrderCard
                        key={o._id}
                        o={o}
                    />
                )}
            </Div>

        </Div>
    )
}

export default ManageOrders
