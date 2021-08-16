import {userDashboardMenu}        from 'config/menus/dashboard/user'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper           from 'shared/Layout/Dashboard/DashboardWrapper'
import Review                     from './Review'

const Reviews = () => {
    const dispatch = useDispatch()
    const {_id, token, reviews, isVerified} = useSelector(state => state.user)

    useEffect(() => {
        dispatch({type: 'user/getUserReviews', payload: {_id, token}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        url={`/dashboard/reviews/update/${review._id}`}
                    />
                ))}

            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Reviews
