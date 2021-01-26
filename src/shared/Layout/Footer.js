import {
    siteDisplayName,
    siteInstagramUrl,
    siteTwitterUrl
} from 'config'
import {
    instagram,
    twitter
} from 'config/icons/fa'
import moment            from 'moment'
import PropTypes         from 'prop-types'
import React             from 'react'
import Div               from 'shared/Basic/Div'
import Icon              from 'shared/Basic/Icon'
import LinkSwitch        from 'shared/Basic/LinkSwitch'
import {footerStyle}     from './styles/footer'

const Footer = ({theme}) =>
    <Div as="footer" theme={{...footerStyle, ...theme}}>
        <Div theme={footerStyle.inner}>
            <Div>
                &copy; {moment().format('YYYY')} {siteDisplayName}
            </Div>
            <Div>
                <LinkSwitch url={siteTwitterUrl}>
                    <Icon icon={twitter}/>
                </LinkSwitch>
                <LinkSwitch url={siteInstagramUrl}>
                    <Icon icon={instagram}/>
                </LinkSwitch>
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