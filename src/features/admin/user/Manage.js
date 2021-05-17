import AdminDashboardWrapper      from 'features/admin/AdminDashboardWrapper'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'

const Manage = () => {
    const {users} = useSelector(state => state.user)
    // const {placesIndex} = useContext(searchContext)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'user/getUsers'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const roleKey = (key) => {
        switch(key) {
            case 0:
                return 'User'
            case 1:
                return 'Admin'

        }
    }



    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Users'}
                    description={'Type & Enter to search. Click to edit.'}
                />
                {users.length > 0 && (
                    <Div>
                        {users.map((user) => (
                            <Div>
                                <Div>Name: {user.name}</Div>
                                <Div>Verified Phone No: {user.tel}</Div>
                                <Div>Role: {roleKey(user.role)}</Div>
                            </Div>
                        ))}
                    </Div>
                )}
                {/*{isIndexed && (*/}
                {/*    <List places={places}/>*/}
                {/*)}*/}
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
