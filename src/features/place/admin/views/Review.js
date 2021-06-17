import {reviewFields, validateReview} from 'features/place/admin/fields/review'
import React                          from 'react'
import {useSelector}                  from 'react-redux'
import Form                           from 'shared/Fields/Form'
import {adminFormWrapperStyle}        from 'shared/Layout/Dashboard/admin/styles'

const Review = () => {
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)

    const initialValues = {
        review: '',
        photo: '',
        user: _id,
        _id,
        token,
        slug
    }


    return (
        <Form
            initialValues={initialValues}
            fields={reviewFields}
            validationSchema={validateReview}
            dispatchAction={'place/addReview'}
            formHeading={'Review Place'}
            buttonText={'Review'}
            theme={adminFormWrapperStyle}
            enableReinitialize={true}
        />
    )
}

export default Review
