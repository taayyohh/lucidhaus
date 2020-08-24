import PropTypes           from 'prop-types'
import styled              from 'styled-components'
import {themer}            from '../utils/themer'

const BulletedList = styled.ul`${props => themer({...props.theme})}`

BulletedList.displayName = 'BulletedList'

BulletedList.propTypes = {
    theme: PropTypes.object,
}

export default BulletedList