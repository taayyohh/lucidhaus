import {userDashboardMenu}        from 'config/menus/dashboard/user'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper           from 'shared/Layout/Dashboard/DashboardWrapper'
import Div                        from '../../../../shared/Basic/Div'
import Review                     from './Review'

const Reviews = () => {
    const dispatch = useDispatch()
    const {_id, token, reviews, isVerified} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {user} = useSelector(state => state.site)

    useEffect(() => {
        dispatch({type: 'user/getUserReviews', payload: {_id, token}})

    }, [])

    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Your Reviews'}
                    description={"Here are the reviews you've left."}
                />
                {!isVerified && (
                    <Div>In order to leave a review, make sure you verify your email!</Div>
                )}

                {reviews && reviews.map((review) => (
                    <Review
                        key={review._id}
                        review={review}
                    />
                ))}
                
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Reviews
