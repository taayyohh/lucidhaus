import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import Div           from '../Basic/Div'
import {footerStyle} from '../themes/footer'

const Footer = memo(({theme}) =>
    <Div as="footer" theme={{...footerStyle, ...theme}}>
        <Div theme={footerStyle.inner}>
            Footer
        </Div>
    </Div>
)

Footer.propTypes = {
    theme: PropTypes.object,
}

Footer.defaultProps = {
    theme: {
        inner: {}
    },
}

export default Footer