import {colorPalette}     from 'config/styles'
import dayjs              from 'dayjs'
import React              from 'react'
import Div                from 'shared/Basic/Div'
import LinkSwitch         from 'shared/Basic/LinkSwitch'
import RichText           from 'shared/Basic/RichText'
import {flexStart}        from 'utils/themer'
import {adminReviewStyle} from './styles'

const Review = ({review, url}) => {
    return (
        <LinkSwitch url={url} theme={adminReviewStyle}>
            {/*<RichText>{review.review}</RichText>*/}
            <Div theme={adminReviewStyle.top}>
                <Div theme={adminReviewStyle.name}>{review.placeName}</Div>
                <Div>{dayjs(review.updated).format('MMMM DD, YYYY')}</Div>
            </Div>


            {/*LinkSwitch url={`/places/${review.placeSlug}`}*/}
            <Div><strong>Safe</strong>: {review.safe[0]}</Div>
            <Div><strong>Celebrated</strong>: {review.celebrated[0]}</Div>
            <Div><strong>Welcome</strong>: {review.welcome[0]}</Div>
        </LinkSwitch>
    )
}

export default Review
