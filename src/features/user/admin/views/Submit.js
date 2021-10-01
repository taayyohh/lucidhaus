import {userDashboardMenu}            from 'config/menus/dashboard/user'
import {LeaveAReviewButtonStyle}      from 'features/place/views/Place/styles'
import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import Div                            from 'shared/Basic/Div'
import {menuPanelContext}             from 'shared/Containers/MenuPanelController'
import ContentWrapper                 from 'shared/Layout/ContentWrapper'
import DashboardWrapper                                  from 'shared/Layout/Dashboard/DashboardWrapper'
import {submitPlaceButtonStyle, userContentWrapperStyle} from './styles'

const Submit = () => {
    const dispatch = useDispatch()
    const {user, pendingPlaces} = useSelector(state => state.user)
    const {setPanel, currentPanel} = useContext(menuPanelContext)


    useEffect(() => {
        dispatch({type: 'place/listCommunitiesServed'})
        dispatch({type: 'place/listPlaceCategory'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        user?.pendingPlaceSubmissions?.forEach(_id => {
            dispatch({
                type: 'site/getEntityById',
                payload: {
                    entityId: _id,
                    path: 'pending-place',
                    feature: 'user',
                }
            })
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <DashboardWrapper menu={userDashboardMenu}>
                <Div>
                    <Div>
                        <Div
                            theme={submitPlaceButtonStyle}
                            onClick={() => setPanel(
                                !currentPanel
                                    ? 'submit-a-place'
                                    : null
                            )}
                        >
                            Submit A Place
                        </Div>
                    </Div>


                    Pending Submissions
                    {pendingPlaces && pendingPlaces.map((place) =>
                        <Div key={place._id}>
                            <Div>{place.name}</Div>
                            <Div>{place.isPendingSubmission ? 'Pending' : 'Submitted'}</Div>
                        </Div>
                    )}
                </Div>
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Submit
