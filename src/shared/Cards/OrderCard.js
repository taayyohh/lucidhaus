import {shoppingBag}           from 'config/icons/fa'
import {AnimatePresence}       from 'framer-motion'
import moment                  from 'moment'
import React                   from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import Div                     from 'shared/Basic/Div'
import Icon                    from 'shared/Basic/Icon'
import MotionDiv               from 'shared/Basic/MotionDiv'
import {
    orderCardProductsStyle,
    orderDetailInnerStyle,
    orderDetailStyle,
    orderDetailWrapperStyle
}                              from 'shared/Controls/styles'
import {
    fadeIn,
    fadeOut,
    nOpacity
}                              from 'shared/Layout/styles/animations'
import {flex}                  from 'utils/themer'
import {orderCardWrapperStyle} from '../Controls/styles'

const OrderCard = ({o, theme}) => {
    const dispatch = useDispatch()
    const {statusValues} = useSelector(state => state.shop)
    const {_id, token} = useSelector(state => state.user)
    const {address, address2, amount, city, company, country, email, phone, state, zip, createdAt, user, products} = o
    const parts = [address, address2, city, state, zip, country, company]
    const filteredParts = parts.filter(v => !!v)
    const formattedAddress = filteredParts.join(', ')

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
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <Div theme={{...orderCardWrapperStyle, ...theme}}>
                    <Div>
                        <Div theme={orderDetailWrapperStyle}>
                            <Div theme={orderDetailInnerStyle}>
                                <Div>Order Total</Div>
                                <Div theme={orderDetailStyle}>${amount}</Div>
                            </Div>

                            <Div theme={orderDetailInnerStyle}>
                                <Div>Ordered on</Div>
                                <Div theme={orderDetailStyle}>{moment(createdAt).fromNow()}</Div>
                            </Div>

                            <Div theme={orderDetailInnerStyle}>
                                <Div>Total Items</Div>
                                <Div theme={orderDetailStyle}>{products?.length}</Div>
                            </Div>


                            <Div theme={orderDetailInnerStyle}>
                                <Div>Delivery address</Div>
                                <Div theme={orderDetailStyle}>{formattedAddress}</Div>
                            </Div>

                            <Div theme={orderDetailInnerStyle}>
                                <Div>Ordered by</Div>
                                <Div theme={orderDetailStyle}>{!!user ? user?.name : 'Guest'}</Div>
                            </Div>



                            <Div theme={orderDetailInnerStyle}>
                                <Div>Email</Div>
                                <Div theme={orderDetailStyle}>{email}</Div>
                            </Div>

                            <Div theme={orderDetailInnerStyle}>
                                <Div>Phone</Div>
                                <Div theme={orderDetailStyle}>{phone}</Div>
                            </Div>

                            <Div theme={orderDetailInnerStyle}>
                                <Div>Update Status</Div>
                                <Div theme={orderDetailStyle}>{showStatus(o)}</Div>
                            </Div>
                        </Div>


                    </Div>

                    <Div theme={{marginTop: 30}}>
                        <Div theme={{
                            paddingBottom: 15,
                            marginBottom: 20,
                            borderBottom: '1px solid #cdcdcd',
                            display: flex,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Icon icon={shoppingBag}/>
                        </Div>
                        <Div theme={orderCardProductsStyle}>
                            {products?.map(p => (
                                <Div key={p.name}>
                                    <Div>{p.name}</Div>
                                    <Div>{p.price} USD</Div>
                                    <Div>Quantity: {p.count}</Div>
                                </Div>
                            ))}
                        </Div>

                    </Div>
                </Div>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default OrderCard