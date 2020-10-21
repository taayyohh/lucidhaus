import moment             from 'moment'
import React, {
    useEffect,
    useState
}                         from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import {
    getStatusValues,
    listOrders,
    updateOrderStatus
}                         from '../../api/apiAdmin'
import Div                from '../../shared/Basic/Div'
import {adminOrderStyle}  from '../../themes/admin'
import {postContentStyle} from '../../themes/layout'

const ManageOrders = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {orders, statusValues} = useSelector(state => state.shop)



    useEffect(() => {
        dispatch({type: 'shop/getOrders', payload: {_id: _id, token: token}})
        dispatch({type: 'shop/getStatusValues', payload: {_id: _id, token: token}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const showInput = (key, value) => (
        <div>
            <div>{key}</div>
            <input
                type="text"
                value={value}
                readOnly
            />
        </div>
    )

    const handleStatusChange = (e, orderId) => {
        updateOrderStatus(_id, token, orderId, e.target.value).then(
            data => {
                if (data.error) {
                    console.log('Status update failed')
                } else {

                }
            }
        )
    }

    const showStatus = o => (
        <div className="form-group">
            <h3 className="mark mb-4">Status: {o.status}</h3>
            <select
                className="form-control"
                onChange={e => handleStatusChange(e, o._id)}
            >
                <option>Update Status</option>
                {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    )


    return (
        <Div theme={postContentStyle()}>
            <h1 className="text-danger display-2">
                Total orders: {orders.length}
            </h1>

            {orders.map((o, oIndex) => {
                return (
                    <div
                        className="mt-5"
                        key={oIndex}
                        style={adminOrderStyle}
                    >
                        <Div>
                            <h3 className="mt-4 mb-4 font-italic">
                                Total products in the order:{' '}
                                {o.products.length}
                            </h3>
                            <h2 className="mb-5">
                                        <span className="bg-primary">
                                            Order ID: {o._id}
                                        </span>
                            </h2>
                            <ul className="list-group mb-2">
                                <li className="list-group-item">
                                    {showStatus(o)}
                                </li>
                                <li className="list-group-item">
                                    Transaction ID: {o.transaction_id}
                                </li>
                                <li className="list-group-item">
                                    Amount: ${o.amount}
                                </li>
                                <li className="list-group-item">
                                    Ordered by: {o.user.name}
                                </li>
                                <li className="list-group-item">
                                    Ordered on:{' '}
                                    {moment(o.createdAt).fromNow()}
                                </li>
                                <li className="list-group-item">
                                    Delivery address: {o.address}
                                </li>
                            </ul>
                        </Div>

                        <Div>


                            {o.products.map((p, pIndex) => (
                                <div
                                    className="mb-4"
                                    key={pIndex}
                                    style={{
                                        padding: '20px',
                                        border: '1px solid indigo'
                                    }}
                                >
                                    {showInput('Product name', p.name)}
                                    {showInput('Product price', p.price)}
                                    {showInput('Product total', p.count)}
                                    {showInput('Product Id', p._id)}
                                </div>
                            ))}
                        </Div>
                    </div>
                )
            })}
        </Div>
    )
}

export default ManageOrders
