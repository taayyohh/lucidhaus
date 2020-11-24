import PropTypes              from 'prop-types'
import React                  from 'react'
import {parseHtml}            from '../../utils/parseHtml'
import {richTextDefaultStyle} from '../Layout/styles/typography'
import Div                    from './Div'

const RichText = ({theme, children, ...props}) => children ?
    <Div theme={{...richTextDefaultStyle, ...theme}} {...props}>{parseHtml(children)}</Div> : null

RichText.displayName = 'RichText'

RichText.propTypes = {
    children: PropTypes.string,
    theme: PropTypes.object,
}

RichText.defaultProps = {
    children: '',
    theme: {},
}

export default RichText