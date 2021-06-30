import {instagram, twitter}                                                  from 'config/icons'
import {siteDisplayName, siteInstagramUrl, siteTwitterUrl}                   from 'config/variables'
import moment                                                                from 'moment'
import PropTypes                                                             from 'prop-types'
import React                                                                 from 'react'
import Div                                                                   from 'shared/Basic/Div'
import Icon                                                                  from 'shared/Basic/Icon'
import LinkSwitch                                                            from 'shared/Basic/LinkSwitch'
import {footerContactStyle, footerIconStyle, footerSocialStyle, footerStyle} from './styles/footer'

const Footer = ({theme}) =>
    <Div as="footer" theme={{...footerStyle, ...theme}}>
        <Div theme={footerStyle.inner}>
            <Div theme={footerStyle.innerLinksWrapper}>
                <span>&copy; {moment().format('YYYY')} {siteDisplayName}</span>
                <Div theme={footerStyle.linksWrapper}>
                    <LinkSwitch
                        url={'https://inclusive-guide.s3.us-east-2.amazonaws.com/assets/Inclusive+Journeys+Privacy+Policy+-+4824-7519-7925+5.pdf'}
                        children={'Privacy Policy '}
                    />
                    <LinkSwitch
                        url={'https://inclusive-guide.s3.us-east-2.amazonaws.com/assets/Inclusive+Journeys+Website+Terms+of+Service+-+4817-1972-0421+4.pdf'}
                        children={'Terms of Service'}
                    />
                    <LinkSwitch
                        theme={footerStyle.feedback}
                        url={'https://docs.google.com/forms/d/1jVOQmYLDvdTEiGICDmZY9wmSmKirNo1oYNZxO-UjylE/edit?ts=60c78b0f'}
                        children={'Leave us Feedback!'}
                    />
                </Div>
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
