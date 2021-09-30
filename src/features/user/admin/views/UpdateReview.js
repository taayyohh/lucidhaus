import {userDashboardMenu}                                               from 'config/menus/dashboard/user'
import {colorPalette}                                                    from 'config/styles'
import {reviewAdminFields, reviewFields, validateReview}                 from 'features/place/admin/fields/review'
import {reviewFormHeadingStyle, reviewFormStyle, reviewFormWrapperStyle} from 'features/place/views/styles'
import React, {useEffect, useState}                                      from 'react'
import {useDispatch, useSelector}                                        from 'react-redux'
import Div                                                               from 'shared/Basic/Div'
import H2                                                                from 'shared/Basic/H2'
import Span                                                              from 'shared/Basic/Span'
import DangerZone                                                        from 'shared/Controls/DangerZone'
import Form                                                              from 'shared/Fields/Form'
import ContentWrapper                                                    from 'shared/Layout/ContentWrapper'
import DashboardInfo                                                     from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper                                                  from 'shared/Layout/Dashboard/DashboardWrapper'
import {adminDashboardMenu}                                              from '../../../../config/menus/dashboard/admin'
import LinkSwitch                                                        from '../../../../shared/Basic/LinkSwitch'
import {userContentWrapperStyle}                                         from './styles'

const UpdateReview = () => {
    const dispatch = useDispatch()
    const {_id, token, isAdmin, nameFirst, avatar} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {reviews} = useSelector(state => state.place)
    const [currentReview, setCurrentReview] = useState({})

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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    useEffect(() => {
        setCurrentReview(reviews[reviews.length - 1])

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reviews])

    const initialValues = {
        review: currentReview?.review,
        reviewerName: nameFirst,
        reviewerAvatar: avatar,
        photo: currentReview?.photo,
        safe: currentReview?.safe,
        celebrated: currentReview?.celebrated,
        welcome: currentReview?.welcome,
        user: _id,
        placeId: currentReview?._id,
        placeName: currentReview?.placeName,
        placeSlug: currentReview?.placeSlug,
        isFlagged: currentReview?.isFlagged,
        flaggedBy: currentReview?.flaggedBy,
        id: currentReview?.id,
        _id,
        token,
        slug: currentReview?.placeSlug,
    }

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <DashboardWrapper menu={isAdmin ? adminDashboardMenu : userDashboardMenu}>
                <DashboardInfo
                    heading={'Update Review'}
                    description={"Here are the reviews you've left."}
                />
                <Div theme={reviewFormWrapperStyle}>
                    <H2 theme={reviewFormHeadingStyle}>Update Your Review of: <Span
                        theme={{color: colorPalette.seaGreen}}>
                        <LinkSwitch url={`/places/${currentReview?.placeSlug}`}>
                            {currentReview?.placeName}
                        </LinkSwitch>
                    </Span></H2>
                    <Form
                        initialValues={initialValues}
                        fields={isAdmin ? reviewAdminFields : reviewFields}
                        validationSchema={validateReview}
                        dispatchAction={'place/updateReview'}
                        buttonText={'Update Review'}
                        theme={reviewFormStyle}
                        enableReinitialize={true}
                    />
                    <DangerZone
                        attemptDestroyAction={'site/attemptDestroyEntity'}
                        destroyAction={'site/destroyEntity'}
                        slug={slug}
                        type={'review'}
                    />
                </Div>
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default UpdateReview
