import {colorPalette}     from 'config/styles'
import dayjs              from 'dayjs'
import React              from 'react'
import Div                from 'shared/Basic/Div'
import LinkSwitch         from 'shared/Basic/LinkSwitch'
import RichText           from 'shared/Basic/RichText'
import {genericCardStyle} from 'shared/Cards/styles'
import {flexStart}        from 'utils/themer'

const Review = ({review, url}) => {
    return (
        <Div theme={{...genericCardStyle, marginBottom: 50}}>
            <RichText>{review.review}</RichText>
            <Div>Safe: {review.safe[0]}</Div>
            <Div>Celebrated: {review.celebrated[0]}</Div>
            <Div>Welcome: {review.welcome[0]}</Div>
            <Div>{dayjs(review.updated).format('MM/DD/YYYY')}</Div>
            <LinkSwitch url={`/places/${review.placeSlug}`}>{review.placeName}</LinkSwitch>
            <LinkSwitch
                url={url} children={'Edit'}
                theme={{
                    alignSelf: flexStart,
                    padding: '10px 20px',
                    background: colorPalette.forestGreen,
                    borderRadius: '5px',
                    textDecoration: 'none',
                    color: '#fff',
                    hover: {
                        background: colorPalette.darkHoneyYellow,
                        color: '#fff'
                    }
                }}
            />
        </Div>
    )
}

export default Review
