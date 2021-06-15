import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import {searchContext}                from 'shared/Containers/SearchController'
import Form                           from 'shared/Fields/Form'
import {adminFormWrapperStyle}        from 'shared/Layout/Dashboard/admin/styles'
import {reviewFields, validateReview} from '../fields/review'

const Review = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {place, taxonomy} = useSelector(state => state.place)
    const {placesIndex} = useContext(searchContext)

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
