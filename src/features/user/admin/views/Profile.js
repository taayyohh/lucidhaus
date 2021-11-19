import {userDashboardMenu}        from 'config/menus/dashboard/user'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardWrapper           from 'shared/Layout/Dashboard/DashboardWrapper'
import Identity                   from './Indentity'
import {userContentWrapperStyle}  from './styles'

const Profile = () => {
    const dispatch = useDispatch()
    const {slug, _id, token, user} = useSelector(state => state.user)

    useEffect(() => {
        if (!!slug)
            dispatch({
                type: 'user/getUser',
                payload: {
                    slug: slug,
                    _id: _id,
                    token: token
                }
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <DashboardWrapper menu={userDashboardMenu}>
                {slug && user?._id?.length > 0 && (
                    <Identity slug={slug}/>
                )}
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Profile
