import React                     from 'react'
import Div                       from 'shared/Basic/Div'
import {fullContentWrapperStyle} from 'shared/Layout/styles'

const FullContentWrapper = ({children}) =>
    <Div theme={fullContentWrapperStyle}>
        {children}
    </Div>

export default FullContentWrapper