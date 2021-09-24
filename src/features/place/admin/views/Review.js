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
    reviewHelperTextStyle,
    reviewLeaveWrapperStyle
}                                     from '../../views/styles'

const Review = () => {
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {place} = useSelector(state => state.place)

    const initialValues = {
        review: '',
        photo: '',
        safe: undefined,
        celebrated: undefined,
        welcome: undefined,
        user: _id,
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
                {/*<Div theme={reviewHelperTextStyle}>*/}
                {/*    As you visit businesses, take a few moments to review them here. We aren't only looking for ratings*/}
                {/*    from*/}
                {/*    people who experience discrimination; we need allies as well! Ratings from allies are necessary for*/}
                {/*    helping us determine if a business was just having an off-day, providing poor customer service to*/}
                {/*    everyone, or if there is an identity-based pattern of bias and discrimination.*/}
                {/*</Div>*/}
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
