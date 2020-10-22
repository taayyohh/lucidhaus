import moment            from 'moment'
import React, {
    useEffect,
    useState
}                        from 'react'
import {isAuthenticated} from '../api/apiAuth'
import Div               from '../shared/Basic/Div'
import Ul                from '../shared/Basic/Ul'
import Content           from '../shared/Layout/Content'
import {adminOrderStyle} from '../themes/admin'
import {
    getStatusValues,
    listOrders,
    updateOrderStatus
}                        from '../api/apiAdmin'


const Orders = () => {
    const [orders, setOrder] = useState([])
    const [statusValues, setStatusValues] = useState([])

    const {user, token} = isAuthenticated()

    const loadOrders = () => {
        listOrders(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setOrder(data)
            }
        })
    }

    const loadStatusValues = () => {
        getStatusValues(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setStatusValues(data)
            }
        })
    }

    useEffect(() => {
        loadOrders()
        loadStatusValues()
    }, [])

    const showOrdersLength = orders => {
        if (orders.length > 0) {
            return (
                <h1>Total Orders: {orders.length}</h1>
            )
        } else {
            return <h1>NO Orders</h1>
        }
    }

    const showInput = (key, value) => (
        <Div>
            <Div>
                <Div>{key}</Div>
            </Div>
            <input
                type="text"
                value={value}
                readOnly/>
        </Div>
    )

    const handleStatusChange = (e, orderId) => {
        updateOrderStatus(user._id, token, orderId, e.target.value).then(data => {
            if (data.error) {
                console.log('Status update failed')
            } else {
                loadOrders()
            }
        })
    }

    const showStatus = (o) => (
        <Div>
            <h3>Status : {o.status}</h3>
            <select onChange={(e) => handleStatusChange(e, o._id)}>
                <option>Update Status</option>
                {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </Div>
    )

    return (
            <Div theme={{margin: '0 auto', width: '70%'}}>
                {showOrdersLength(orders)}
                {orders.map((o, oIndex) => {
                    return (
                        <Div key={oIndex} theme={adminOrderStyle}>
                            <Div>
                                <h2>
                                    Order Id: {o._id}
                                </h2>
                                <Ul>
                                    <li>{showStatus(o)}</li>
                                    <li>Transaction ID: {o.transaction_id}</li>
                                    <li>Amount: {o.amount}</li>
                                    <li>Ordered By: {o.user.name}</li>
                                    <li>Ordered On: {moment(o.createdAt).fromNow()}</li>
                                    <li>Delivery Adress: {o.address}</li>
                                </Ul>
                            </Div>

                            <Div>
                                <h3>
                                    Total products in the order: {o.products.length}
                                </h3>
                                {o.products.map((p, pIndex) => (
                                    <Div key={pIndex}>
                                        {showInput('Product name', p.name)}
                                        {showInput('Product price', p.price)}
                                        {showInput('Product total', p.count)}
                                        {showInput('Product Id', p._id)}
                                    </Div>
                                ))}
                            </Div>

                        </Div>
                    )
                })}
            </Div>
    )
}

export default Orders