import {
    minusCircle,
    plusCircle
}                          from 'config/icons/fa'
import React               from 'react'
import {useDispatch}       from 'react-redux'
import Div                 from 'shared/Basic/Div'
import Icon                from 'shared/Basic/Icon'
import {countControlStyle} from './styles'

const CountField = ({formik, name}) => {
    const dispatch = useDispatch()
    const adjust = (adj) => {
        if (formik.values[name] + (adj ? 1 : -1) < 1) {
            dispatch({
                type: 'shop/removeFromCart',
                payload: formik.initialValues.productId
            })
        } else {
            dispatch({
                type: 'shop/updateProductQuantity',
                payload: {
                    productId: formik.initialValues.productId,
                    count: formik.values[name] + (adj ? 1 : -1)
                }
            })
        }
    }

    return (
        <Div theme={{display: 'flex'}}>
            <Div theme={countControlStyle}>
                {formik.values.count}
            </Div>
            <Icon
                icon={plusCircle}
                onClick={() => adjust(1)}
                theme={countControlStyle}
            />
            <Icon
                icon={minusCircle}
                onClick={() => adjust(0)}
                theme={countControlStyle}
            />
        </Div>
    )
}

export default CountField