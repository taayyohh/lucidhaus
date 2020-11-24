import React                from 'react'
import {useDispatch}        from 'react-redux'
import Div                  from '../Basic/Div'
import {genericButtonStyle} from './styles'

const AddToCartButton = ({product, dispatchAction}) => {
    const dispatch = useDispatch()

    return (
        <Div
            as="button"
            theme={genericButtonStyle}
            onClick={() => {
                dispatch({type: dispatchAction, payload: product})
            }}
        >
            Add to cart
        </Div>
    )
}

export default AddToCartButton