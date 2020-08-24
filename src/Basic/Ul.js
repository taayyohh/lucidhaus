import PropTypes from 'prop-types'
import styled    from 'styled-components/macro'
import {themer}  from '../utils/themer'

const Ul = styled.ul`${props => themer(props.theme)}`

Ul.propTypes = {
    theme: PropTypes.object,
}

Ul.defaultProps = {
    theme: {},
}

export default Ul