import {reviewFields, validateReview}                                    from 'features/place/admin/fields/review'
import {reviewFormHeadingStyle, reviewFormStyle, reviewFormWrapperStyle} from 'features/place/views/styles'
import React, {useEffect}                                                from 'react'
import {useDispatch, useSelector}                                        from 'react-redux'
import Div                                                               from 'shared/Basic/Div'
import H2                                                                from 'shared/Basic/H2'
import Form                                                              from 'shared/Fields/Form'
import {userDashboardMenu}                                               from '../../../../config/menus/dashboard/user'
import {colorPalette}                                                    from '../../../../config/styles'
import Span                                                              from '../../../../shared/Basic/Span'
import ContentWrapper                                                    from '../../../../shared/Layout/ContentWrapper'
import DashboardInfo
                                                                         from '../../../../shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper
                                                                         from '../../../../shared/Layout/Dashboard/DashboardWrapper'

const UpdateReview = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {reviews} = useSelector(state => state.place)

    useEffect(() => {
        if (!!slug)
            dispatch({
                type: 'place/getReview',
                payload: {
                    _id,
                    token,
                    review: slug
                }
            })

    }, [slug])

    const initialValues = {
        review: reviews[0]?.review,
        photo: reviews[0]?.photo,
        safe: reviews[0]?.safe,
        celebrated: reviews[0]?.celebrated,
        welcome: reviews[0]?.welcome,
        user: _id,
        placeId: reviews[0]?._id,
        placeName: reviews[0]?.placeName,
        placeSlug: reviews[0]?.placeSlug,
        id: reviews[0]?.id,
        _id,
        token,
        slug: reviews[0]?.placeSlug,
    }

    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Your Reviews'}
                    description={"Here are the reviews you've left."}
                />
                <Div theme={reviewFormWrapperStyle}>
                    <H2 theme={reviewFormHeadingStyle}>Update Your of Review: <Span theme={{color: colorPalette.seaGreen}}>{reviews[0]?.placeName}</Span></H2>
                    <Form
                        initialValues={initialValues}
                        fields={reviewFields}
                        validationSchema={validateReview}
                        dispatchAction={'place/updateReview'}
                        buttonText={'Update Review'}
                        theme={reviewFormStyle}
                        enableReinitialize={true}
                    />
                </Div>
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default UpdateReview
