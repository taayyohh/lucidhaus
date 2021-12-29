import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector}               from 'react-redux'
import {searchContext}                          from 'shared/Containers/SearchController'
import ContentWrapper                           from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper                    from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import DashboardInfo                            from 'shared/Layout/Dashboard/DashboardInfo'
import List                                     from './List'
import {userContentWrapperStyle}                from './styles'

const Manage = () => {
    const {users} = useSelector(state => state.user)
    const {usersIndex} = useContext(searchContext)
    const dispatch = useDispatch()
    const [isIndexed, setIsIndexed] = useState(false)

    useEffect(() => {
        dispatch({type: 'user/getUsers'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (users?.length > 0) {
            usersIndex.saveObjects(users)
                .then(() => setIsIndexed(true))
                .catch(error =>
                    dispatch({
                        type: 'site/setNotification',
                        payload: {notification: error}
                    })
                )
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users])

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={`Manage Users - ${users.length} Total`}
                    description={'Type & Enter to search. Click to edit.'}
                />
                {/*<LinkSwitch url={'/admin/users/taxonomy'} children={'Taxonomy'}/>*/}
                {isIndexed && (
                    <List users={users}/>
                )}
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
