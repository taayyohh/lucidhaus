import {placeFields, validatePlace}   from 'features/place/admin/fields'
import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import Span                           from 'shared/Basic/Span'
import {searchContext}                from 'shared/Containers/SearchController'
import DangerZone                     from 'shared/Controls/DangerZone'
import Form                           from 'shared/Fields/Form'
import ContentWrapper                 from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper          from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}        from 'shared/Layout/Dashboard/admin/styles'
import {adminContentWrapperStyle}     from 'shared/Layout/styles'
import {pendingFields}                from '../fields/pending'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {place, taxonomy} = useSelector(state => state.place)
    const {placesIndex} = useContext(searchContext)
    const {
        accessibleDoorway,
        audioAvailable,
        bathrooms,
        businessOwner,
        braille,
        brickAndMortar,
        categories,
        communitiesServed,
        description,
        foodOptions,
        isPendingSubmission,
        isPublished,
        isRestaurant,
        languageSpoken,
        largeAdaptiveEquipment,
        name,
        onlyAccessibleByStairs,
        photo,
        publicTransportation,
        signLanguageAccessible,
        submittedBy,
        website,
        wheelchairElevator,
        wheelchairParking,
        wheelchairRamps,
        wheelchairRestroom,
        type
    } = place

    const initialValues = {
        accessibleDoorway: accessibleDoorway,
        audioAvailable: audioAvailable,
        address1: place.geojson?.[0]?.properties?.address,
        address2: place.geojson?.[0]?.properties?.address2,
        city: place.geojson?.[0]?.properties?.city,
        zip: place.geojson?.[0]?.properties?.postalCode,
        country: place.geojson?.[0]?.properties?.country,
        state: place.geojson?.[0]?.properties?.state,
        longitude: place.geojson?.[0]?.geometry?.coordinates?.[0],
        latitude: place.geojson?.[0]?.geometry?.coordinates?.[1],
        bathrooms: bathrooms || [],
        businessOwner: businessOwner || [],
        braille: braille,
        brickAndMortar: brickAndMortar,
        categories: categories || [],
        communitiesServed: communitiesServed || [],
        description: description,
        foodOptions: foodOptions || [],
        isPendingSubmission: isPendingSubmission,
        isPublished: isPublished,
        isRestaurant: isRestaurant,
        languageSpoken: languageSpoken || [],
        largeAdaptiveEquipment: largeAdaptiveEquipment,
        name: name,
        onlyAccessibleByStairs: onlyAccessibleByStairs,
        photo: photo,
        photoFile: '',
        publicTransportation: publicTransportation,
        signLanguageAccessible: signLanguageAccessible,
        submittedBy: submittedBy,
        website: website,
        wheelchairElevator: wheelchairElevator,
        wheelchairParking: wheelchairParking,
        wheelchairRamps: wheelchairRamps,
        wheelchairRestroom: wheelchairRestroom,
        slug,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'place/getPlace',
            payload: {
                slug: slug
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!place?.isPendingSubmission && !!place?.objectID) {
            // console.log('place', placesIndex.saveObjects(place))
            console.log('place', place)
            // placesIndex.saveObjects(place)
            //     .then(() => {
            //         dispatch({
            //             type: 'place/indexPlaceSuccess'
            //         })
            //     })
            //     .catch(error =>
            //         dispatch({
            //             type: 'site/setNotification',
            //             payload: {notification: error}
            //         })
            //     )
        }


    }, [place])


    const options = [
        {
            name: 'bathrooms',
            options: taxonomy.bathrooms
        },
        {
            name: 'businessOwner',
            options: taxonomy.businessOwner
        },
        {
            name: 'communitiesServed',
            options: taxonomy.communitiesServed
        },
        {
            name: 'foodOptions',
            options: taxonomy.foodOptions
        },
        {
            name: 'languageSpoken',
            options: taxonomy.languageSpoken
        },
        {
            name: 'categories',
            options: taxonomy.placeCategory
        }
    ]


    useEffect(() => {
        dispatch({type: 'place/listBathroom'})
        dispatch({type: 'place/listBusinessOwner'})
        dispatch({type: 'place/listCommunitiesServed'})
        dispatch({type: 'place/listFoodOptions'})
        dispatch({type: 'place/listLanguageSpoken'})
        dispatch({type: 'place/listPlaceCategory'})


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={adminContentWrapperStyle}>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={isPendingSubmission ? pendingFields : placeFields}
                    validationSchema={validatePlace}
                    dispatchAction={'place/updatePlace'}
                    formHeading={`Update ${name}`}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                    options={options}
                />
                <DangerZone
                    attemptDestroyAction={'site/attemptDestroyEntity'}
                    destroyAction={'site/destroyEntity'}
                    slug={slug}
                    type={type}
                    objectID={place.objectID}
                    index={placesIndex}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
