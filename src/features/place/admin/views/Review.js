import {reviewFields, validateReview} from 'features/place/admin/fields/review'
import React                          from 'react'
import {useSelector}                  from 'react-redux'
import Div                            from 'shared/Basic/Div'
import H2                             from 'shared/Basic/H2'
import Form                           from 'shared/Fields/Form'
import {adminFormWrapperStyle}        from 'shared/Layout/Dashboard/admin/styles'

const Review = () => {
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)

    const initialValues = {
        review: '',
        photo: '',
        safe: undefined,
        celebrated: undefined,
        welcome: undefined,
        user: _id,
        _id,
        token,
        slug
    }


    return (
        <>
            <H2>Review Place</H2>
            <Div>
                As you visit businesses, take a few moments to review them here. We aren't only looking for ratings from
                people who experience discrimination; we need allies as well! Ratings from allies are necessary for
                helping us determine if a business was just having an off-day, providing poor customer service to
                everyone, or if there is an identity-based pattern of bias and discrimination.
            </Div>
            <Form
                initialValues={initialValues}
                fields={reviewFields}
                validationSchema={validateReview}
                dispatchAction={'place/addReview'}
                buttonText={'Review'}
                theme={adminFormWrapperStyle}
                enableReinitialize={true}
            />

        </>

    )
}

export default Review
