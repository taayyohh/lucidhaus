import React                from 'react'
import {useDispatch}        from 'react-redux'
import Div                  from 'shared/Basic/Div'
import {genericButtonStyle} from './styles'

const AddToCartButton = ({product}) => {
    const dispatch = useDispatch()
    //const {setPanel} = useContext(menuPanelContext)

    return (
        <Div
            as="button"
            theme={genericButtonStyle}
            onClick={() => {
                dispatch({type: 'shop/addToCart', payload: product})
                //  setPanel('cart-menu-panel')
            }}
        >
            Add to cart
        </Div>
    )
}

export default AddToCartButton