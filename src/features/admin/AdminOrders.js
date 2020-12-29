import React     from 'react'
import OrderCard from 'shared/Cards/OrderCard'

const AdminOrders = ({order}) => {
    return (
        <OrderCard
            key={order._id}
            o={order}
        />
    )
}

export default AdminOrders