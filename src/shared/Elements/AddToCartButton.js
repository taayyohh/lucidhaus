import React                from 'react'
import {useDispatch}        from 'react-redux'
import {genericButtonStyle} from '../../themes/elements'
import Div                  from '../Basic/Div'

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