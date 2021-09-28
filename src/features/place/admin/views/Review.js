import {reviewFields, validateReview} from 'features/place/admin/fields/review'
import React                          from 'react'
import {useSelector}                  from 'react-redux'
import Div                            from 'shared/Basic/Div'
import H2                             from 'shared/Basic/H2'
import Form                           from 'shared/Fields/Form'
import {
    reviewFormHeadingStyle,
    reviewFormStyle,
    reviewFormWrapperStyle,
    reviewLeaveWrapperStyle
}                                     from '../../views/styles'

const Review = () => {
    const {_id, token, nameFirst} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {place} = useSelector(state => state.place)

    const initialValues = {
        review: '',
        photo: '',
        safe: undefined,
        celebrated: undefined,
        welcome: undefined,
        user: _id,
        reviewerName: nameFirst,
        placeId: place._id,
        placeName: place.name,
        placeSlug: place.slug,
        _id,
        token,
        slug,
    }

    return (
        <Div theme={reviewFormWrapperStyle}>
            <Div theme={reviewLeaveWrapperStyle}>
                <H2 theme={reviewFormHeadingStyle}>Leave a Review</H2>
            </Div>
            <Form
                initialValues={initialValues}
                fields={reviewFields}
                validationSchema={validateReview}
                dispatchAction={'place/addReview'}
                buttonText={'Submit'}
                theme={reviewFormStyle}
                enableReinitialize={true}
            />
        </Div>
    )
}

export default Review
