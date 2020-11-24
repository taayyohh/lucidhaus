import React                from 'react'
import {useDispatch}        from 'react-redux'
import Div                  from '../Basic/Div'
import {genericButtonStyle} from './styles'

const RemoveFromCartButton = ({productId}) => {
    const dispatch = useDispatch()

    return (
        <Div as="button" theme={genericButtonStyle}
             onClick={() => dispatch({
                 type: 'shop/removeFromCart',
                 payload: productId
             })}
        >
            Remove Product
        </Div>
    )
}
export default RemoveFromCartButton