import React                     from 'react'
import {fullContentWrapperStyle} from 'shared/Layout/styles'
import {contentWrapperStyle}     from './styles'
import Div                       from 'shared/Basic/Div'

const FullContentWrapper = ({children}) =>
    <Div theme={fullContentWrapperStyle}>
        {children}
    </Div>

export default FullContentWrapper