import React                   from 'react'
import Div                     from 'shared/Basic/Div'
import {adminMenuStyle}        from 'shared/Layout/Dashboard/admin/styles'
import Search                  from 'shared/Layout/Search'
import {searchMenuSearchStyle} from './styles'

const SearchMenu = () =>
    <Div theme={adminMenuStyle}>
        <Div theme={adminMenuStyle.list}>
            <Search theme={searchMenuSearchStyle}/>
        </Div>
    </Div>

export default SearchMenu
