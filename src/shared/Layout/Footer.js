import moment        from 'moment'
import PropTypes     from 'prop-types'
import React         from 'react'
import {footerStyle} from '../../themes/footer'
import Div           from '../Basic/Div'

const Footer = ({theme}) =>
    <Div as="footer" theme={{...footerStyle, ...theme}}>
        <Div theme={footerStyle.inner}>
            &copy; {moment().format('YYYY')} InclusiveJourneys
        </Div>
    </Div>


Footer.propTypes = {
    theme: PropTypes.object,
}

Footer.defaultProps = {
    theme: {}
}

export default Footer