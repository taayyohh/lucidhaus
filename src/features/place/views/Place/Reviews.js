import {flag}                       from 'config/icons'
import dayjs                        from 'dayjs'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector}   from 'react-redux'
import Div                          from 'shared/Basic/Div'
import Icon                         from 'shared/Basic/Icon'
import RichText                     from 'shared/Basic/RichText'
import S3Img                        from 'shared/Basic/S3Img'
import {
    placeFlaggedTextStyle,
    placeReviewBlurStyle,
    placeReviewDescriptionStyle,
    placeReviewedByStyle,
    placeReviewLikertStyle,
    placeReviewReportIconStyle,
    placeReviewReportWrapperStyle,
    placeReviewStyle,
    placeReviewUserAvatarStyle,
    placeReviewUserInfoStyle,
    placeReviewUserNameStyle,
    reviewsWrapperStyle
}                                   from '../styles'

const Reviews = ({reviewIds, userFlaggedReviews, placeSlug}) => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {reviews} = useSelector(state => state.place)
    const [filteredArray, setFilteredArray] = useState()
    const [openReportPrompt, setOpenReportPromp] = useState(false)

    useEffect(() => {
        for (const review of reviewIds) {
            dispatch({type: 'place/getReview', payload: {_id, token, review}})
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reviewIds])

    useEffect(() => {
        if (!!reviews)
            setFilteredArray([...reviews].sort((a, b) => (b.updated > a.updated) ? 1 : ((a.updated > b.updated) ? -1 : 0)))

    }, [reviews])


    return (
        <Div theme={reviewsWrapperStyle}>
            {filteredArray && filteredArray.map((review) => {
                    const isFlagged = userFlaggedReviews.filter(item => item === review.id).length > 0

                    return (
                        <Div
                            key={review.updated}
                            theme={placeReviewStyle}
                        >
                            <Div theme={placeReviewUserInfoStyle}>
                                <S3Img url={review.reviewerAvatar} theme={placeReviewUserAvatarStyle}/>
                                {review.reviewerName && (
                                    <Div theme={placeReviewUserNameStyle}>{review.reviewerName}</Div>
                                )}
                            </Div>
                            <Div>
                                <Div theme={placeReviewedByStyle}>Reviewed
                                    on <span>{dayjs(review.updated).format('MMMM DD, YYYY')}</span></Div>
                                <RichText theme={placeReviewDescriptionStyle}>{review.review}</RichText>
                                <Div theme={placeReviewLikertStyle}>
                                    <Div><strong>Safe:</strong> {review.safe[0]}</Div>
                                    <Div><strong>Welcome:</strong> {review.welcome[0]}</Div>
                                    <Div><strong>Celebrated:</strong> {review.celebrated[0]}</Div>
                                </Div>
                                {review.photo && (
                                    <S3Img url={review.photo} theme={placeReviewStyle.image}/>
                                )}
                            </Div>

                            {!isFlagged && (
                                <Div
                                    theme={placeReviewReportWrapperStyle}
                                    // onClick={() => dispatch({
                                    //     type: 'user/flagReview',
                                    //     payload: {
                                    //         reviewId: review._id,
                                    //         placeSlug,
                                    //         _id,
                                    //         token
                                    //     }
                                    // })}

                                >
                                    <Icon
                                        theme={placeReviewReportIconStyle}
                                        icon={flag}
                                    />
                                    <Div>Report</Div>
                                </Div>

                            )}
                            {isFlagged && (
                                <>
                                    <Div theme={placeFlaggedTextStyle}>
                                        You have flagged this Review. It has been submitted to our admins for review.
                                    </Div>
                                    <Div theme={placeReviewBlurStyle}/>

                                </>
                            )}
                        </Div>
                    )
                }
            )}
        </Div>
    )
}

export default Reviews
