import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import LinkSwitch                 from 'shared/Basic/LinkSwitch'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import {adminContentWrapperStyle} from './styles'

const Manage = () => {
    const {places, pendingPlaces} = useSelector(state => state.place)
    // const {placesIndex} = useContext(searchContext)
    const dispatch = useDispatch()
    // const [isIndexed, setIsIndexed] = useState(false)

    useEffect(() => {
        dispatch({type: 'place/getPendingPlaces'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // if (places?.length > 0)
        //     placesIndex.saveObjects(places)
        //         .then(() => setIsIndexed(true))
        //         .catch(error =>
        //             dispatch({
        //                 type: 'site/setNotification',
        //                 payload: {notification: error}
        //             })
        //         )

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [places])

    return (
        <ContentWrapper theme={adminContentWrapperStyle}>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Pending Places'}
                    description={'Type & Enter to search. Click to edit.'}
                />

                <Div theme={{display: 'flex', flexDirection: 'column'}}>
                    {pendingPlaces && pendingPlaces.map((place) => (
                        <LinkSwitch
                            key={place.slug}
                            url={`/admin/places/update/${place.slug}`}
                        >
                            {place.name}
                        </LinkSwitch>
                    ))}

                </Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
