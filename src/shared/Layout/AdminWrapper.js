import React               from 'react'
import {adminWrapperStyle} from 'features/admin/styles'
import Div                 from 'shared/Basic/Div'

const AdminWrapper = ({children}) =>
    <Div theme={adminWrapperStyle}>
        {children}
    </Div>

export default AdminWrapper