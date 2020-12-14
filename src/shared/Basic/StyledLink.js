import PropTypes          from 'prop-types'
import {Link}             from 'react-router-dom'
import styled             from 'styled-components'
import {themer}           from 'utils/themer'
import {defaultLinkStyle} from 'shared/Layout/styles/typography'

const StyledLink = styled(Link)`${props => themer({...defaultLinkStyle, ...props.theme})}`

StyledLink.displayName = 'StyledLink'

StyledLink.propTypes = {
    theme: PropTypes.object,
}

export default StyledLink