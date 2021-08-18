import dayjs                        from 'dayjs'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector}   from 'react-redux'
import Div
                                                                                                    from 'shared/Basic/Div'
import RichText
                                                                                                    from 'shared/Basic/RichText'
import S3Img
                                                                                                    from 'shared/Basic/S3Img'
import {placeReviewDescriptionStyle, placeReviewLikertStyle, placeReviewStyle, reviewsWrapperStyle} from './styles'

const Reviews = ({reviewIds}) => {
    const {_id, token} = useSelector(state => state.user)
    const {reviews} = useSelector(state => state.place)
    const [filteredArray, setFilteredArray] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        for (const review of reviewIds) {
            dispatch({type: 'place/getReview', payload: {_id, token, review}})
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reviewIds])

    useEffect(() => {
        if(!!reviews)
            setFilteredArray([...reviews].sort((a, b) => (b.updated > a.updated) ? 1 : ((a.updated > b.updated) ? -1 : 0)))

    }, [reviews])


    return (
        <Div theme={reviewsWrapperStyle}>
            {filteredArray && filteredArray.map((review) => (
                <Div key={review.updated} theme={placeReviewStyle}>
                    {review.photo && (
                        <S3Img url={review.photo} theme={placeReviewStyle.image}/>
                    )}
                    <RichText theme={placeReviewDescriptionStyle}>{review.review}</RichText>
                    <Div theme={placeReviewLikertStyle}>
                        <Div><strong>Safe:</strong> {review.safe}</Div>
                        <Div><strong>Celebrated:</strong> {review.celebrated}</Div>
                        <Div><strong>Welcome:</strong> {review.welcome}</Div>
                    </Div>
                    <Div>{dayjs(review.updated).format('MM/DD/YYYY')}</Div>
                </Div>
            ))}
        </Div>
    )
}

export default Reviews
