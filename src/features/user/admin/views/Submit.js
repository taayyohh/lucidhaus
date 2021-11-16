import {userDashboardMenu}                               from 'config/menus/dashboard/user'
import React, {useContext, useEffect}                    from 'react'
import {useDispatch, useSelector}                        from 'react-redux'
import Div                                               from 'shared/Basic/Div'
import {menuPanelContext}                                from 'shared/Containers/MenuPanelController'
import ContentWrapper                                    from 'shared/Layout/ContentWrapper'
import DashboardInfo                                     from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper                                  from 'shared/Layout/Dashboard/DashboardWrapper'
import PlaceCard                                         from '../../../../shared/Cards/Place'
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
                <DashboardInfo
                    heading={'Submit a Place'}
                    description={"Don't see a place you know on the Guide? Submit a Place here."}
                />
                <Div>
                    <Div theme={{marginBottom: [20, .7, 20]}}>
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


                    <Div>Submitted Places</Div>
                    {pendingPlaces && pendingPlaces.map((place) =>
                        <PlaceCard name={place.name} />

                    )}
                </Div>
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Submit
