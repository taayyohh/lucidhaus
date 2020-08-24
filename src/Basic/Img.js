import PropTypes     from 'prop-types'
import React, {memo} from 'react'
import styled        from 'styled-components/macro'
import {themer}      from '../utils/themer'

const Image = styled.img`${props => themer(props.theme)}`

/**
 *   You can supply the image object, or you can define the individual parameters.
 */
const Img = memo(({image, theme, alt, src, placeholder, ...props}) =>
    <Image
        src={src || image.url || placeholder}
        alt={alt || image.alt}
        width={props.width || image.width}
        height={props.height || image.height}
        theme={theme}
        {...props}
    />
)

Img.propTypes = {
    alt: PropTypes.string,
    image: PropTypes.object,
    placeholder: PropTypes.string,
    src: PropTypes.string,
    theme: PropTypes.object,
}

Img.defaultProps = {
    alt: '',
    image: {},
    placeholder: '',
    theme: {},
}

Img.displayName = 'Img'

export default Img