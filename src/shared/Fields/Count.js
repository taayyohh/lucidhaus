import {
    minusCircle,
    plusCircle
}            from 'config/icons'
import React from 'react'
import {useDispatch} from 'react-redux'
import Div           from 'shared/Basic/Div'
import Icon          from 'shared/Basic/Icon'
import {
    countControlNumberStyle,
    countControlStyle,
    countFieldStyle
}                    from './styles'

const Count = ({formik, name}) => {
    const dispatch = useDispatch()
    const adjust = (adj) => {
        if (formik.values[name] + (adj ? 1 : -1) < 1) {
            dispatch({
                type: 'shop/removeFromCart',
                payload: formik.initialValues.productId
            })
        } else {
            (async () => {
                await formik.setFieldValue(name, formik.values[name] + (adj ? 1 : -1))
                await formik.submitForm()
            })()
        }
    }

    return (
        <Div theme={countFieldStyle}>
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
            <Div theme={countControlNumberStyle}>
                {formik.values[name]}
            </Div>
        </Div>
    )
}

export default Count
