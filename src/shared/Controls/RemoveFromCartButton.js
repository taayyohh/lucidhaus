import {trashAlt}                  from 'config/icons/fa'
import React                       from 'react'
import {useDispatch}               from 'react-redux'
import Div                         from 'shared/Basic/Div'
import Icon                        from 'shared/Basic/Icon'
import {removeFromCartButtonStyle} from 'shared/Controls/styles'

const RemoveFromCartButton = ({productId}) => {
    const dispatch = useDispatch()

    return (
        <Div
            as="button"
            theme={removeFromCartButtonStyle}
            onClick={() => dispatch({
                type: 'shop/removeFromCart',
                payload: productId
            })}
        >
            <Icon icon={trashAlt}/>
        </Div>
    )
}
export default RemoveFromCartButton