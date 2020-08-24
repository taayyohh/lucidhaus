import React     from 'react'
import Div       from '../Basic/Div'
import AdminMenu from '../Menus/AdminMenu'
import {isAdmin} from '../utils/flags'
import Content   from './Content'

const Main = ({theme}) => {
    return (
        <Div theme={theme}>
            {isAdmin() && (
                <AdminMenu />
            )}
            <Content />
        </Div>
    )
}

export default Main