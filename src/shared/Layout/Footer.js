import {
    siteDisplayName,
    siteInstagramUrl,
    siteTwitterUrl
}                 from 'config'
import {
    instagram,
    twitter
}                           from 'config/icons/fa'
import moment               from 'moment'
import PropTypes            from 'prop-types'
import React                from 'react'
import Div                  from 'shared/Basic/Div'
import Icon                 from 'shared/Basic/Icon'
import LinkSwitch           from 'shared/Basic/LinkSwitch'
import Span                 from 'shared/Basic/Span'
import Mailchimp            from 'shared/Layout/Mailchimp'
import {footerBuiltByStyle} from 'shared/Layout/styles/footer'
import {
    footerContactStyle,
    footerIconStyle,
    footerSocialStyle,
    footerStyle
}                           from './styles/footer'

const Footer = ({theme}) =>
    <Div as="footer" theme={{...footerStyle, ...theme}}>
        <Div theme={footerStyle.inner}>
            <Div>
                &copy; {moment().format('YYYY')} {siteDisplayName}
                <Span theme={footerBuiltByStyle}>built by <LinkSwitch url={'/artists/theo-mode'}>th&eacute;o</LinkSwitch></Span>
            </Div>
            <Div theme={footerContactStyle}>
                <Div theme={footerSocialStyle}>
                    <LinkSwitch url={siteTwitterUrl}>
                        <Icon icon={twitter} theme={footerIconStyle}/>
                    </LinkSwitch>
                    <LinkSwitch url={siteInstagramUrl}>
                        <Icon icon={instagram} theme={footerIconStyle}/>
                    </LinkSwitch>
                </Div>
                <Mailchimp/>
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