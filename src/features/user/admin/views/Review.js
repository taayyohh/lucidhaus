import dayjs              from 'dayjs'
import React              from 'react'
import Div                from 'shared/Basic/Div'
import LinkSwitch         from 'shared/Basic/LinkSwitch'
import RichText           from 'shared/Basic/RichText'
import {genericCardStyle} from 'shared/Cards/styles'

const Review = ({review}) => {
    return (
        <Div theme={{...genericCardStyle, marginBottom: 50}}>
            <RichText>{review.review}</RichText>
            <Div>Safe: {review.safe}</Div>
            <Div>Celebrated: {review.celebrated}</Div>
            <Div>Welcome: {review.welcome}</Div>
            <Div>{dayjs(review.updated).format('MM/DD/YYYY')}</Div>
            <LinkSwitch url={`/places/${review.placeSlug}`}>{review.placeName}</LinkSwitch>
        </Div>
    )
}

export default Review
