import React from 'react'
import {headerMenuAuth} from "../themes/header";
import Div from "../Basic/Div";
import {adminMenuToggleStyle} from "../themes/admin";

const AdminMenuToggle = ({setPanel}) =>
    <Div
        onClick={() => setPanel({name: 'admin-menu-panel'})}
        theme={adminMenuToggleStyle}
    >
        Admin Menu
    </Div>

export default AdminMenuToggle