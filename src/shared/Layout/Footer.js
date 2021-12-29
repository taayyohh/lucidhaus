<<<<<<< HEAD
import {instagram, twitter}                                                  from 'config/icons'
import {siteDisplayName, siteInstagramUrl, siteTwitterUrl}                   from 'config/variables'
import moment                                                                from 'moment'
import PropTypes                                                             from 'prop-types'
import React                                                                 from 'react'
import Div                                                                   from 'shared/Basic/Div'
import Icon                                                                  from 'shared/Basic/Icon'
import LinkSwitch                                                            from 'shared/Basic/LinkSwitch'
import Span                                                                  from 'shared/Basic/Span'
import {footerContactStyle, footerIconStyle, footerSocialStyle, footerStyle} from './styles/footer'
=======
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
import Subscribe            from 'shared/Layout/Mailchimp'
import {footerBuiltByStyle} from 'shared/Layout/styles/footer'
import {
    footerContactStyle,
    footerIconStyle,
    footerSocialStyle,
    footerStyle
}                           from './styles/footer'
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb

const Footer = ({theme}) =>
    <Div as="footer" theme={{...footerStyle, ...theme}}>
        <Div theme={footerStyle.inner}>
            <Div theme={footerStyle.innerLinksWrapper}>
                <Span theme={footerStyle.copy}>&copy; {moment().format('YYYY')} {siteDisplayName}</Span>
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
<<<<<<< HEAD
=======
                <Subscribe/>
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb
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
