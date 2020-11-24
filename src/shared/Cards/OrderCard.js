import moment                  from 'moment'
import React                   from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import Div                     from '../Basic/Div'
import {orderCardWrapperStyle} from '../Controls/styles'

const OrderCard = ({o}) => {
    const dispatch = useDispatch()
    const {statusValues} = useSelector(state => state.shop)
    const {_id, token} = useSelector(state => state.user)

    const handleStatusChange = (e, orderId) =>
        dispatch({
            type: 'shop/updateStatusValue',
            payload: {
                _id: _id,
                token: token,
                orderId: orderId,
                status: e.target.value
            }
        })

    const showStatus = o =>
        <Div>
            <Div>Status: {o.status}</Div>
            <select
                onChange={e => handleStatusChange(e, o._id)}
                defaultValue={o.status}
            >
                {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </Div>


    return (
        <Div theme={orderCardWrapperStyle}>
            <Div>
                <Div>{showStatus(o)}</Div>
                <Div>
                    Total products in the order:{' '}
                    {o.products.length}
                </Div>
                <Div>Order ID: {o._id}</Div>
                <Div>Transaction ID: {o._id}</Div>
                <Div>Amount: ${o.amount}</Div>
                <Div>Ordered by: {o.user.name}</Div>
                <Div>Ordered on:{' '} {moment(o.createdAt).fromNow()}</Div>
                <Div>Delivery address: {o.address}</Div>
            </Div>

            <Div>
                {o.products.map(p => (
                    <Div key={p._id}>
                        <Div>Name: {p.name}</Div>
                        <Div>Price: {p.price}</Div>
                        <Div>Count: {p.count}</Div>
                        <Div>id: {p._id}</Div>
                    </Div>
                ))}
            </Div>
        </Div>
    )
}

export default OrderCard