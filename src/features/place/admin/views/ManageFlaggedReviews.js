import Review                     from 'features/user/admin/views/Review'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import {adminContentWrapperStyle} from '../../../../shared/Layout/styles'

const Manage = () => {
    const {flaggedReviews} = useSelector(state => state.place)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'place/getFlaggedReviews'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={adminContentWrapperStyle}>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Flagged Reviews'}
                    // description={'Type & Enter to search. Click to edit.'}
                />

                <Div theme={{display: 'flex', flexDirection: 'column'}}>
                    {flaggedReviews && flaggedReviews.map((review) => (
                        <Review
                            key={review._id}
                            review={review}
                            url={`/dashboard/reviews/update/${review._id}`}
                        />
                    ))}
                </Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
