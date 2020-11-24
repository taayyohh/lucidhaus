import React                 from 'react'
import {contentWrapperStyle} from './styles'
import Div                   from '../Basic/Div'

const ContentWrapper = ({children}) =>
    <Div theme={contentWrapperStyle}>
        {children}
    </Div>

export default ContentWrapper