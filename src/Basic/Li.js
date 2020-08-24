import PropTypes from 'prop-types'
import styled    from 'styled-components/macro'
import {themer}  from '../utils/themer'

const Li = styled.li`${props => themer(props.theme)}`

Li.propTypes = {
    theme: PropTypes.object,
}

Li.defaultProps = {
    theme: {},
}

export default Li