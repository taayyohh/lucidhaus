import {placeSearchField}             from 'features/place/admin/fields/search'
import {placeCardStyle}               from 'features/place/views/styles'
import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import Div                            from 'shared/Basic/Div'
import GenericCard                    from 'shared/Cards/GenericCard'
import {mapContext}                   from 'shared/Containers/MapController'
import Form                           from 'shared/Fields/Form'
import ContentWrapper                 from 'shared/Layout/ContentWrapper'
import {slugify}                      from 'utils/helpers'
import {placesWrapperStyle}           from './styles'

const Places = () => {
    const {boonePlaces, places} = useSelector(state => state.place)
    const dispatch = useDispatch()
    const {coords} = useContext(mapContext)

    useEffect(() => {
        // if (!isEmpty(coords)) {
        //     dispatch({
        //         type: 'place/getBooneAutoComplete',
        //         payload: {
        //             input: 'bakery',
        //             longitude: coords.lon,
        //             latitude: coords.lat,
        //             radius: 10000
        //         }
        //     })
        // }


        // if(!!booneIndex)
        //     booneIndex.saveObjects(boonePlaces)
        //         .then(() => setIsIndexed(true))
        //         .catch(error =>
        //             dispatch({
        //                 type: 'site/setNotification',
        //                 payload: {notification: error}
        //             })
        //         )

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coords])


    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'Places',
                description: 'The places description'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [places])


    return (
        <ContentWrapper>
            <Div theme={placesWrapperStyle}>
                <Form
                    initialValues={{input: ''}}
                    fields={placeSearchField}
                    dispatchAction={'place/getBooneAutoComplete'}
                    formHeading={'Search'}
                    buttonText={'Search'}
                    payload={{
                        longitude: coords.lon,
                        latitude: coords.lat,
                        radius: 10000
                    }}
                />

                {boonePlaces && boonePlaces?.data?.map(
                    boonePlace => {
                        const slug = `${slugify(boonePlace.properties.name)}-${slugify(boonePlace.properties.address)}-${boonePlace.properties.id}`

                        return (
                            <GenericCard
                                key={slug}
                                slug={`places/${slug}`}
                                name={boonePlace.properties.name}
                                photo={boonePlace.photo}
                                theme={placeCardStyle}
                            />
                        )
                    }
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Places
