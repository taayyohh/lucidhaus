import {siteDisplayName} from 'config'
import {
    instagram,
    twitter
}                        from 'config/icons/fa'
import moment            from 'moment'
import PropTypes         from 'prop-types'
import React             from 'react'
import Div               from 'shared/Basic/Div'
import Icon              from 'shared/Basic/Icon'
import {footerStyle}     from './styles/footer'

const Footer = ({theme}) =>
    <Div as="footer" theme={{...footerStyle, ...theme}}>
        <Div theme={footerStyle.inner}>
            <Div>
                &copy; {moment().format('YYYY')} {siteDisplayName}
            </Div>
            <Div>
                <Icon icon={twitter}/>
                <Icon icon={instagram}/>
            </Div>
        </Div>

    </Div>


Footer.propTypes = {
    theme: PropTypes.object,
}

Footer.defaultProps = {
    theme: {}
}

export default Footer