import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import {contentWrapperStyle} from './styles'

const ContentWrapper = ({children, theme}) =>
    <Div theme={{...contentWrapperStyle, ...theme}}>
        {children}
    </Div>

ContentWrapper.defaultProps = {
    theme: {}
}

export default ContentWrapper
