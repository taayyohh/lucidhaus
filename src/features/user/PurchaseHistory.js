import {
    purchaseHistoryItemStyle,
    purchaseHistoryStyle
} from 'features/user/styles'
import moment                 from 'moment'
import PropTypes              from 'prop-types'
import React, {useEffect}     from 'react'
import {
    useDispatch,
    useSelector
}                             from 'react-redux'
import Div                    from 'shared/Basic/Div'
import H3                     from 'shared/Basic/H3'

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
            {purchaseHistory.map((h, i) => (
                h.products.map((p, i) =>
                    <Div key={i} theme={purchaseHistoryItemStyle}>
                        <Div>{h.status}</Div>
                        <Div>{h.amount}</Div>
                        <H3>{p.name}</H3>
                        <Div>Product price: ${p.price}</Div>
                        <Div>
                            Purchased date:{' '}
                            {moment(h.createdAt).fromNow()}
                        </Div>
                    </Div>
                )
            ))}
        </Div>
    )
}


PurchaseHistory.propTypes = {
    purchaseHistory: PropTypes.array,
}

export default PurchaseHistory