import styled    from 'styled-components/macro'
import PropTypes from 'prop-types'
import {themer}  from '../utils/themer'

const Span = styled.span`${props => themer(props.theme)}`

Span.propTypes = {
    theme: PropTypes.object
}

Span.defaultProps = {
    theme: {}
}

export default Span