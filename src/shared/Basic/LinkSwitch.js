import PropTypes       from 'prop-types'
import React, {memo}   from 'react'
import {isString}      from '../../utils/helpers'
import mouseOverDetect from '../../utils/mouseOverDetect'
import validURL        from '../../utils/validURL'
import Anchor          from './Anchor'
import ExternalLink    from './ExternalLink'
import NavigationLink  from './NavigationLink'
import Span            from './Span'
import StyledLink      from './StyledLink'

/**
 * LinkSwitch determines if a provided URL is an internal or external link.
 * The Link component supplied by react-router is not designed to handle external links.
 * If the link is external, LinkSwitch returns a normal anchor tag instead of the router Link component
 */

const LinkSwitch = memo(({children, className, data, onClick, onFocus, theme, title, type, url, target, download, ...props}) => {

    if (!url || !isString(url) || url.trim() === '#')
        return <Span
            children={children}
            className={`${className} ${props.isActive ? 'active' : ''}`}
            onClick={onClick ? e => onClick(data, e) : null}
            theme={theme}
            title={title}
            type={type}
            {...props}
        />

    // Convert local absolute URLs to relative URLs
    url = url.trim().replace(process.env.REACT_APP_SITE_URL, '')

    // Display normal anchor tag for external URL
    if (validURL.test(url) || download)
        return <ExternalLink
            children={children}
            className={className}
            url={url}
            theme={theme}
            title={title}
            onClick={onClick}
            target={target}
            download={download}
            {...props}
        />

    // Handle mail and tel links
    if (/mailto:.*/.test(url) || /tel:.*/.test(url))
        return <Anchor
            children={children}
            href={url}
            theme={theme}
            title={title}
        />

    // Use NavLink when linking a menu item
    if (type === 'nav')
        return <NavigationLink
            children={children}
            className={className}
            data={data}
            mouseOverDetect={mouseOverDetect}
            onClick={onClick}
            onFocus={onFocus}
            theme={theme}
            title={title}
            url={url}
            {...props}
        />

    // All relative URLs use the Link component
    return <StyledLink
        children={children}
        className={className}
        // onMouseOut={() => mouseOverDetect.clear()}
        // onMouseOver={() => mouseOverDetect(getPathnameFromUrl(url), getQueryStringFromUrl(url))}
        onClick={onClick}
        onFocus={onFocus}
        theme={theme}
        title={title}
        to={url}
        {...props}
    />
})

LinkSwitch.displayName = 'LinkSwitch'

LinkSwitch.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    theme: PropTypes.object,
    title: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
    download: PropTypes.string
}

LinkSwitch.defaultProps = {
    theme: {},
    type: '',
}

export default LinkSwitch