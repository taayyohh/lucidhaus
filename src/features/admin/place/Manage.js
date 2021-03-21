import AdminDashboardWrapper                    from 'features/admin/AdminDashboardWrapper'
import List                                     from 'features/admin/place/List'
import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector}               from 'react-redux'
import {searchContext}                          from 'shared/Containers/SearchController'
import ContentWrapper                           from 'shared/Layout/ContentWrapper'
import DashboardInfo                            from 'shared/Layout/Dashboard/DashboardInfo'

const Manage = () => {
    const {places} = useSelector(state => state.place)
    const {placesIndex} = useContext(searchContext)
    const dispatch = useDispatch()
    const [isIndexed, setIsIndexed] = useState(false)

    useEffect(() => {
        dispatch({type: 'place/getPlaces'})
        placesIndex.saveObjects(places)
            .then(() => setIsIndexed(true))
            .catch(error =>
                dispatch({
                    type: 'site/setNotification',
                    payload: {notification: error}
                })
            )

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Places'}
                    description={'Type & Enter to search. Click to edit.'}
                />
                {isIndexed && (
                    <List places={places}/>
                )}
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
