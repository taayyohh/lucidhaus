import React                                   from 'react'
import Div                                     from 'shared/Basic/Div'
import RichText                                from 'shared/Basic/RichText'
import S3Img                                   from 'shared/Basic/S3Img'
import {placeReviewStyle, reviewsWrapperStyle} from './styles'

const Reviews = ({reviews}) => {
    return (
        <Div theme={reviewsWrapperStyle}>
            {reviews && reviews.map((review) => (
                <Div key={review.user} theme={placeReviewStyle}>
                    {review.photo && (
                        <S3Img url={review.photo} theme={placeReviewStyle.image}/>
                    )}
                    <RichText>{review.review}</RichText>
                </Div>
            ))}
        </Div>
    )
}

export default Reviews
