import React                                   from 'react'
import Div                                     from 'shared/Basic/Div'
import RichText                                from 'shared/Basic/RichText'
import S3Img                                                                from 'shared/Basic/S3Img'
import {placeReviewDescriptionStyle, placeReviewStyle, reviewsWrapperStyle} from './styles'

const Reviews = ({reviews}) => {
    return (
        <Div theme={reviewsWrapperStyle}>
            {reviews && reviews.map((review) => (
                <Div key={review.user} theme={placeReviewStyle}>
                    {review.photo && (
                        <S3Img url={review.photo} theme={placeReviewStyle.image}/>
                    )}
                    {console.log('user', review.user[0])}
                    <RichText theme={placeReviewDescriptionStyle}>{review.review}</RichText>
                    {/*<Div>{moment()}</Div>*/}
                </Div>
            ))}
        </Div>
    )
}

export default Reviews
