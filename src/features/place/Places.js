import {placeCardStyle}                         from 'features/place/styles'
import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector}               from 'react-redux'
import Div                                      from 'shared/Basic/Div'
import GenericCard                              from 'shared/Cards/GenericCard'
import {mapContext}                             from 'shared/Containers/MapController'
import {searchContext}                          from 'shared/Containers/SearchController'
import ContentWrapper       from 'shared/Layout/ContentWrapper'
import {isEmpty, slugify}   from 'utils/helpers'
import {placesWrapperStyle} from './styles'

const Places = () => {
    const {boonePlaces, places} = useSelector(state => state.place)
    const dispatch = useDispatch()
    const {booneIndex, searchClient} = useContext(searchContext)
    const {geo, getLocation, coords} = useContext(mapContext)

    useEffect(() => {
        if (!isEmpty(coords)) {
            dispatch({
                type: 'place/getBooneAutoComplete',
                payload: {
                    input: 'donut',
                    longitude: coords.lon,
                    latitude: coords.lat,
                    radius: 10000
                }
            })
        }



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
      //  dispatch({type: 'place/getPlaces'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




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

    const Hit = (props) =>
        <Div>{props}</Div>

    return (
        <ContentWrapper>
            <Div theme={placesWrapperStyle}>

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