import {doorOpen, handHoldingHeart, spa} from 'config/icons'
import dayjs                             from 'dayjs'
import React, {useEffect, useState}      from 'react'
import {useDispatch, useSelector}        from 'react-redux'
import Div                               from 'shared/Basic/Div'
import Icon                              from 'shared/Basic/Icon'
import RichText                          from 'shared/Basic/RichText'
import S3Img                             from 'shared/Basic/S3Img'
import {
    placeLikertItemWrapperStyle,
    placeReviewDescriptionStyle,
    placeReviewDisclaimerStyle,
    placeReviewedByStyle,
    placeReviewIconWrapperStyle,
    placeReviewLikertStyle,
    placeReviewScaleInnerStyle,
    placeReviewScaleStyle,
    placeReviewStyle,
    placeReviewUserAvatarStyle,
    placeReviewUserInfoStyle,
    placeReviewUserNameStyle,
    reviewsWrapperStyle
}                                        from '../styles'
import Report                            from './Report'

const Reviews = ({reviewIds, userFlaggedReviews}) => {
    const dispatch = useDispatch()
    const {_id, token, isAuthenticated} = useSelector(state => state.user)
    const {reviews} = useSelector(state => state.place)
    const [filteredArray, setFilteredArray] = useState()

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
                    const isFlagged = userFlaggedReviews.filter(item => item === review._id).length > 0

                    return (
                        <Div key={review._id}>
                            {(!isFlagged && (
                                <Div
                                    theme={placeReviewStyle}
                                >
                                    <Div theme={placeReviewUserInfoStyle}>
                                        {(review?.reviewerAvatar && (
                                            <S3Img url={review.reviewerAvatar} theme={placeReviewUserAvatarStyle}/>
                                        )) || (
                                            <Div theme={placeReviewUserAvatarStyle}/>
                                        )}
                                        {review.reviewerName && (
                                            <Div theme={placeReviewUserNameStyle}>{review.reviewerName}</Div>
                                        )}
                                    </Div>
                                    <Div theme={{width: '100%'}}>
                                        <Div theme={placeReviewedByStyle}>
                                            <span>
                                                {dayjs(review.updated).format('MMMM DD, YYYY')}
                                            </span>
                                        </Div>
                                        <RichText theme={placeReviewDescriptionStyle}>{review.review}</RichText>
                                        <Div theme={placeReviewLikertStyle}>
                                            <Div theme={placeLikertItemWrapperStyle}>
                                                <Div theme={placeReviewIconWrapperStyle}>
                                                    <Icon icon={spa}/>
                                                    <strong>Safe</strong>
                                                </Div>
                                                <Div theme={placeReviewScaleStyle}>
                                                    <Div theme={placeReviewScaleInnerStyle(review.safe[1])}/>
                                                </Div>
                                            </Div>
                                            <Div theme={placeLikertItemWrapperStyle}>
                                                <Div theme={placeReviewIconWrapperStyle}>
                                                    <Icon icon={doorOpen}/>
                                                    <strong>Welcome</strong>
                                                </Div>
                                                <Div theme={placeReviewScaleStyle}>
                                                    <Div theme={placeReviewScaleInnerStyle(review.welcome[1])}/>
                                                </Div>
                                            </Div>
                                            <Div theme={placeLikertItemWrapperStyle}>
                                                <Div theme={placeReviewIconWrapperStyle}>
                                                    <Icon icon={handHoldingHeart}/>
                                                    <strong>Celebrated</strong>
                                                </Div>
                                                <Div theme={placeReviewScaleStyle}>
                                                    <Div theme={placeReviewScaleInnerStyle(review.celebrated[1])}/>
                                                </Div>
                                            </Div>
                                        </Div>
                                        {review.photo && (
                                            <S3Img url={review.photo} theme={placeReviewStyle.image}/>
                                        )}
                                        <Div theme={placeReviewDisclaimerStyle}>
                                            This review is the subjective opinion of an InclusiveGuide member and not of
                                            LucidHaus &#174;.
                                        </Div>
                                    </Div>
                                    {!isFlagged && isAuthenticated && (
                                        <Report review={review}/>
                                    )}
                                </Div>
                            )) || null}
                        </Div>
                    )
                }
            )}
        </Div>
    )
}

export default Reviews
