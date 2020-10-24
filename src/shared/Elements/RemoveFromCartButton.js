import React                from 'react'
import {useDispatch}        from 'react-redux'
import {genericButtonStyle} from '../../themes/elements'
import Div                  from '../Basic/Div'

const RemoveFromCartButton = ({dispatchAction, productId}) => {
    const dispatch = useDispatch()

    return (
        <Div as="button" theme={genericButtonStyle}
             onClick={() => dispatch({
                 type: dispatchAction,
                 payload: productId
             })}
        >
            Remove Product
        </Div>
    )
}
export default RemoveFromCartButton