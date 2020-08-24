import PropTypes            from 'prop-types'
import React                from 'react'
import ReactGA              from 'react-ga'
import Anchor               from '../Basic/Anchor'
import {getFilenameFromUrl} from '../utils/url'

const ExternalLink = ({url, onClick, target, ...props}) => {
    let onClickOverride = getFilenameFromUrl(url).includes('.')
        ? () => ReactGA.event({
            category: 'File',
            action: 'Download',
            label: url
        })
        : null

    return (
        <Anchor
            {...props}
            rel="noopener noreferrer"
            target={target || '_blank'}
            onClick={onClick || onClickOverride}
            href={url}
        />
    )
}

ExternalLink.propTypes = {
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    target: PropTypes.string
}

export default ExternalLink