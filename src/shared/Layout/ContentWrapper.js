import React                 from 'react'
import Div                   from 'shared/Basic/Div'
import {contentWrapperStyle} from './styles'

const ContentWrapper = ({children, theme}) =>
    <Div theme={{...contentWrapperStyle, ...theme}}>
        {children}
    </Div>

ContentWrapper.defaultProps = {
<<<<<<< HEAD
    theme: {}
=======
    theme: {},
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb
}

export default ContentWrapper
