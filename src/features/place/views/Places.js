import {placeSearchField}                      from 'features/place/admin/fields/search'
import {placeCardStyle, placesSearchFormStyle} from 'features/place/views/styles'
import React, {useContext, useEffect}          from 'react'
import {useDispatch, useSelector}              from 'react-redux'
import Div                                     from 'shared/Basic/Div'
import GenericCard                             from 'shared/Cards/GenericCard'
import {mapContext}                            from 'shared/Containers/MapController'
import {searchContext}                         from 'shared/Containers/SearchController'
import Form                                    from 'shared/Fields/Form'
import ContentWrapper                          from 'shared/Layout/ContentWrapper'
import {slugify}                               from 'utils/helpers'
import {placesWrapperStyle}                    from './styles'

const Places = () => {
    const {boonePlaces, algoliaPlaces, places} = useSelector(state => state.place)
    const dispatch = useDispatch()
    const {coords} = useContext(mapContext)
    const {placesIndex} = useContext(searchContext)
    const allPlaces = boonePlaces?.data?.concat(algoliaPlaces)
    let filteredBoone = boonePlaces.data

    console.log('iteeeeem', boonePlaces?.data?.filter(item => item.properties))


    useEffect(() => {
        if (!!filteredBoone)
            for (const place of algoliaPlaces) {
                console.log('PLACE', place.booneId)
                filteredBoone = filteredBoone.filter(item => item.properties.id !== place.booneId)
                //filteredBoone?.filter(item => item.properties.id !== place.booneId)
            }

    }, [algoliaPlaces, boonePlaces])


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
            <Div >
                <Form
                    theme={placesSearchFormStyle}
                    initialValues={{input: ''}}
                    fields={placeSearchField}
                    dispatchAction={'place/searchAllPlaces'}
                    formHeading={'Search'}
                    buttonText={'Search'}
                    payload={{
                        longitude: coords.lon,
                        latitude: coords.lat,
                        radius: 10000,
                        index: placesIndex
                    }}
                />

                {/*{console.log('coords', coords)}*/}
                {/*{console.log('boone', boonePlaces.data)}*/}
                {/*{console.log('algolia', algoliaPlaces)}*/}
                {/*{console.log('ALL', allPlaces)}*/}
                {/*{console.log('FIL', filteredBoone)}*/}


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
            </Div>
        </ContentWrapper>
    )
}

export default Places
