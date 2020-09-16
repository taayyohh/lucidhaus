import React   from 'react'
import Div     from '../Basic/Div'
import Content from './Content'

const Main = ({theme}) => {
    return (
        <Div theme={theme}>
            {/*{isAdmin() && (*/}
            {/*    <AdminMenu />*/}
            {/*)}*/}
            <Content/>
        </Div>
    )
}

export default Main