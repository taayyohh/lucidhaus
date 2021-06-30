import {userDashboardMenu}        from 'config/menus/dashboard/user'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper           from 'shared/Layout/Dashboard/DashboardWrapper'
import Review                     from './Review'

const Reviews = () => {
    const dispatch = useDispatch()
    const {_id, token, reviews} = useSelector(state => state.user)
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
                {reviews && reviews.map((review) => (
                    <Review
                        key={review._id}
                        review={review}
                    />
                ))}

                {/*<Div theme={reviewsWrapperStyle}>*/}
                {/*    {reviews && reviews.map((review) => (*/}
                {/*        <Div key={review.updated} theme={placeReviewStyle}>*/}
                {/*            {review.photo && (*/}
                {/*                <S3Img url={review.photo} theme={placeReviewStyle.image}/>*/}
                {/*            )}*/}
                {/*            <RichText theme={placeReviewDescriptionStyle}>{review.review}</RichText>*/}
                {/*            <Div>{dayjs(review.updated).format('MM/DD/YYYY')}</Div>*/}
                {/*        </Div>*/}
                {/*    ))}*/}
                {/*</Div>*/}
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Reviews
