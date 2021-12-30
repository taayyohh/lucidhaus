import {
    orderInfoHeadingStyle, orderInfoTextStyle, orderProductListHeadingStyle, orderProductListStyle,
    purchaseHistoryItemStyle, purchaseHistoryOrderInnerStyle,
    purchaseHistoryOrderStyle,
    purchaseHistoryStyle
} from 'features/user/views/styles'
import moment                                                                      from 'moment'
import PropTypes                                        from 'prop-types'
import React, {useEffect}                               from 'react'
import {useDispatch, useSelector}                       from 'react-redux'
import Div                                              from 'shared/Basic/Div'
import H3                                               from 'shared/Basic/H3'

const PurchaseHistory = () => {
    const {token, _id, purchaseHistory} = useSelector(state => state.user)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch({
            type: 'user/getPurchaseHistory',
            payload: {
                _id: _id,
                token: token
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id, token])

    return (
        <Div theme={purchaseHistoryStyle}>
            {purchaseHistory && purchaseHistory?.map((h, i) => (
                <Div theme={purchaseHistoryOrderStyle} key={h.transactionId}>
                    <Div theme={purchaseHistoryOrderInnerStyle}>
                        <Div>
                            <Div theme={orderInfoHeadingStyle}>Order Number</Div>
                            <Div theme={orderInfoTextStyle}>{h.transactionId}</Div>
                        </Div>
                        <Div>
                            <Div theme={orderInfoHeadingStyle}>Order Total:</Div>
                            <Div theme={orderInfoTextStyle}>{h.amount} <span>USD</span></Div>
                        </Div>
                        <Div>
                            <Div theme={orderInfoHeadingStyle}>Order Status:</Div>
                            <Div theme={orderInfoTextStyle}>{h.status}</Div>
                        </Div>
                    </Div>
                    <Div theme={orderProductListStyle}>
                        <Div theme={orderProductListHeadingStyle}>Your Item{h.products.length > 1 ? 's' : ''}</Div>
                        {
                            h.products.map((p, i) =>
                                <Div key={i} theme={purchaseHistoryItemStyle}>
                                    <Div>
                                        <H3>{p.name}</H3>
                                        <Div>Product price: ${p.price}</Div>
                                        <Div>Quantity: {p.count}</Div>
                                    </Div>

                                    <Div>
                                        Purchased date:{' '}
                                        {moment(h.createdAt).fromNow()}
                                    </Div>
                                </Div>
                            )
                        }
                    </Div>

                </Div>

            ))}
        </Div>
    )
}


PurchaseHistory.propTypes = {
    purchaseHistory: PropTypes.array,
}

export default PurchaseHistory
