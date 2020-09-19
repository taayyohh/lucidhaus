import React   from 'react'
import Div     from '../Basic/Div'
import Content from './Content'
import {useSelector} from "react-redux";
import AdminMenu from "../Menus/AdminMenu";

const Main = ({theme}) => {
    const {isAdmin } = useSelector(state => state.user)

    return (
        <Div theme={theme}>
            {isAdmin && (
                <AdminMenu />
            )}
            <Content/>
        </Div>
    )
}

export default Main