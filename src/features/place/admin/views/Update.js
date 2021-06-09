import {placeField, validatePlace}    from 'features/place/admin/fields'
import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import {searchContext}                from 'shared/Containers/SearchController'
import DangerZone                     from 'shared/Controls/DangerZone'
import Form                           from 'shared/Fields/Form'
import ContentWrapper                 from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper          from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}        from 'shared/Layout/Dashboard/admin/styles'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {place, taxonomy} = useSelector(state => state.place)
    const {name, description, photo, isPublished} = place
    const {placesIndex} = useContext(searchContext)

    const initialValues = {
        name: name,
        description: description,
        photo: photo,
        photoFile: '',
        isPublished: isPublished,
        bathroom: '',
        businessOwner: '',
        communitiesServed: '',
        foodOptions: '',
        languageSpoken: '',
        placeCategory: '',
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

    const {
        bathroom,
        businessOwner,
        communitiesServed,
        foodOptions,
        languageSpoken,
        placeCategory
    } = taxonomy


    useEffect(() => {
        dispatch({
            type: 'user/getUser',
            payload: {
                slug: slug
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const options = [
        {
            name: 'bathroom',
            options: bathroom
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
            name: 'placeCategory',
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
                    fields={placeField}
                    validationSchema={validatePlace}
                    dispatchAction={'place/updatePlace'}
                    formHeading={'Update Place'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                    options={options}
                />
                <DangerZone
                    attemptDestroyAction={'place/attemptDestroyPlace'}
                    destroyAction={'place/destroyPlace'}
                    slug={slug}
                    objectID={place.objectID}
                    index={placesIndex}
                    type={'place'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
