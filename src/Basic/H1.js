import PropTypes from 'prop-types'
import styled    from 'styled-components/macro'
import {themer}  from '../utils/themer'

const H1 = styled.h1`${props => themer(props.theme)}`

H1.propTypes = {
    theme: PropTypes.object
}

H1.defaultProps = {
    theme: {}
}

export default H1