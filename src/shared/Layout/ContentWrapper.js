import React                 from 'react'
import Img                   from '../Basic/Img'
import {contentWrapperStyle} from './styles'
import Div                   from 'shared/Basic/Div'

const ContentWrapper = ({children, theme}) =>
    <Div theme={{...contentWrapperStyle, ...theme}}>
        {children}
    </Div>

ContentWrapper.defaultProps = {
    theme: {}
}

export default ContentWrapper
