import React                   from 'react'
import Div                     from 'shared/Basic/Div'
import {adminMenuStyle}        from 'shared/Layout/Dashboard/admin/styles'
import Search                                                                       from 'shared/Layout/Search'
import {searchMenuHeadingStyle, searchMenuInnerWrapperStyle, searchMenuSearchStyle} from './styles'

const SearchPanel = () =>
    <Div theme={adminMenuStyle}>
        <Div theme={searchMenuInnerWrapperStyle}>
            <Div theme={searchMenuHeadingStyle}>
                What ya lookin' for?
            </Div>
            <Search theme={searchMenuSearchStyle}/>
        </Div>
    </Div>

export default SearchPanel
