import AdminDashboardWrapper        from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {placeFields, validatePlace} from 'features/place/admin/fields'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Form                       from 'shared/Fields/Form'
import ContentWrapper               from 'shared/Layout/ContentWrapper'

const Create = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {taxonomy} = useSelector(state => state.place)

    const initialValues = {
        _id: _id,
        token: token,
        accessibleDoorway: '',
        audioAvailable: null,
        address1: '',
        address2: '',
        city: '',
        zip: '',
        country: '',
        state: '',
        latitude: null,
        longitude: null,
        bathrooms: [],
        businessOwner: [],
        braille: null,
        brickAndMortar: null,
        categories: [],
        communitiesServed: [],
        description: '',
        foodOptions: [],
        isPublished: null,
        isRestaurant: null,
        languageSpoken: [],
        largeAdaptiveEquipment: null,
        name: '',
        onlyAccessibleByStairs: null,
        photo: '',
        photoFile: '',
        publicTransportation: null,
        signLanguageAccessible: null,
        website: '',
        wheelchairElevator: null,
        wheelchairParking: null,
        wheelchairRamps: null,
        wheelchairRestroom: null
    }

    const {
        bathrooms,
        businessOwner,
        communitiesServed,
        foodOptions,
        languageSpoken,
        placeCategory
    } = taxonomy




    const options = [
        {
            name: 'bathrooms',
            options: bathrooms
        },
        {
            name: 'businessOwner',
            options: businessOwner
        },
        {
            name: 'communitiesServed',
            options: communitiesServed
        },
        {
            name: 'foodOptions',
            options: foodOptions
        },
        {
            name: 'languageSpoken',
            options: languageSpoken
        },
        {
            name: 'categories',
            options: placeCategory
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
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={placeFields}
                    validationSchema={validatePlace}
                    dispatchAction={'place/createPlace'}
                    formHeading={'Create Place'}
                    buttonText={'Create'}
                    options={options}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
