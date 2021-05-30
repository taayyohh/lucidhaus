import {
    cartTitleStyle,
    checkoutSectionStyle
}                from 'features/shop/views/styles'
import PropTypes from 'prop-types'
import React     from 'react'
import Div       from 'shared/Basic/Div'
import H2        from 'shared/Basic/H2'

const CheckoutSection = ({children, title}) =>
    <Div theme={checkoutSectionStyle}>
        <H2 theme={cartTitleStyle}>{title}</H2>
        {children}
    </Div>

CheckoutSection.propTypes = {
    title: PropTypes.string,
}

export default CheckoutSection
