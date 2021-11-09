import List                                     from 'features/place/admin/views/List'
import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector}               from 'react-redux'
import LinkSwitch                               from 'shared/Basic/LinkSwitch'
import {searchContext}                          from 'shared/Containers/SearchController'
import ContentWrapper                           from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper                    from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import DashboardInfo                            from 'shared/Layout/Dashboard/DashboardInfo'
import {adminContentWrapperStyle}               from 'shared/Layout/styles'

const Manage = () => {
    const {places} = useSelector(state => state.place)
    const {placesIndex} = useContext(searchContext)
    const dispatch = useDispatch()
    const [isIndexed, setIsIndexed] = useState(false)

    useEffect(() => {
        dispatch({type: 'place/getPlaces'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (places?.length > 0) {
            const reduced = places.reduce(function (accumulator = [], currentValue) {
                if (!currentValue.isPendingSubmission)
                    accumulator.push(currentValue)

                return accumulator
            }, [])

            placesIndex.saveObjects(reduced)
                .then(() => setIsIndexed(true))
                .catch(error =>
                    dispatch({
                        type: 'site/setNotification',
                        payload: {notification: error}
                    })
                )
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [places])

    return (
        <ContentWrapper theme={adminContentWrapperStyle}>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Places'}
                    description={'Type & Enter to search. Click to edit.'}
                />
                <LinkSwitch url={'/admin/place/taxonomy'} children={'Taxonomy'}/>

                {isIndexed && (
                    <List/>
                )}
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
