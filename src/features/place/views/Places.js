import {placeSearchField}                      from 'features/place/admin/fields/search'
import {placeCardStyle, placesSearchFormStyle}  from 'features/place/views/styles'
import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector}               from 'react-redux'
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
    const [allPlaces, setAllPlaces] = useState([])
    let boonePlacesData = []

    useEffect(() => {
        const algoliaIds = algoliaPlaces.map(p => p.booneId)
        if(!!boonePlaces?.data) {
            boonePlacesData = [...boonePlaces?.data]
            boonePlacesData.forEach(place => {
                if(algoliaIds.includes(place.properties?.id)) {
                   boonePlacesData.splice(boonePlaces.data.indexOf(place), 1)
                }
            })
        }
        setAllPlaces([...boonePlacesData.concat(algoliaPlaces)])
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
            <Div>
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

                <Div theme={placesWrapperStyle}>
                    {allPlaces.length > 0 && allPlaces.map((place) => {
                        if(!!place.properties) {
                            const slug = `${slugify(place.properties.name)}-${slugify(place.properties.address)}-${place.properties.id}`

                            return (
                                <GenericCard
                                    key={slug}
                                    slug={`places/${slug}`}
                                    name={place.properties.name}
                                    photo={place.photo}
                                    theme={placeCardStyle}
                                />
                            )
                        } else {
                            return (
                                <GenericCard
                                    key={place.slug}
                                    slug={`places/${place.slug}`}
                                    name={place.name}
                                    photo={place.photo}
                                    theme={placeCardStyle}
                                />
                            )
                        }
                    })}
                </Div>
            </Div>
        </ContentWrapper>
    )
}

export default Places
