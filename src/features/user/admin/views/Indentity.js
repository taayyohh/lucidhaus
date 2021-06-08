import {identityField}                from 'features/user/admin/fields/indentity'
import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import {searchContext}                from 'shared/Containers/SearchController'
import Form                           from 'shared/Fields/Form'
import {adminFormWrapperStyle}        from 'shared/Layout/Dashboard/admin/styles'
import {bodyModification}             from '../taxonomy/bodyModification/reducers'
import {methodOfCommunication}        from '../taxonomy/methodOfCommunication/reducers'
import {physicalAppearance}           from '../taxonomy/physicalAppearance/reducers'
import {serviceAnimal}                from '../taxonomy/serviceAnimal/reducers'
import {sexualOrientation}            from '../taxonomy/sexualOrientation/reducers'

const roleSwitch = ({role}) => {
    switch (role) {
        case 0:
            return 'Super Admin'
        case 1:
            return 'Admin'
        case 2:
            return 'User'
        case 3:
            return 'Business'
    }
}

const Identity = () => {
    const dispatch = useDispatch()
    const {_id, token, taxonomy} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {user} = useSelector(state => state.site)
    const {usersIndex} = useContext(searchContext)
    const {
        adaptiveEquipment,
        bodyModification,
        gender,
        language,
        methodOfCommunication,
        physicalAppearance,
        pronoun,
        race,
        serviceAnimal,
        sexualOrientation
    } = taxonomy
    // const {description, avatar, email, ethnicHispanicOrigin, nameMiddle, nameFirst, nameLast, tel, role, type} = user

    const initialValues = {
        adaptiveEquipment: '',
        bodyModification: '',
        blind: '',
        deaf: '',
        dateOfBirth: '',
        gender: '',
        guideAnimal: '',
        languagePrimary: '',
        languageSecondary: '',
        methodOfCommunication: '',
        physicalAppearance: '',
        pronoun: '',
        race: '',
        serviceAnimal: '',
        sexualOrientation: '',
        transgender: '',
        slug,
        _id,
        token,
    }

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
            name: 'adaptiveEquipment',
            options: adaptiveEquipment
        },
        {
            name: 'bodyModification',
            options: bodyModification
        },
        {
            name: 'gender',
            options: gender
        },
        {
            name: 'languagePrimary',
            options: language
        },
        {
            name: 'languageSecondary',
            options: language
        },
        {
            name: 'methodOfCommunication',
            options: methodOfCommunication
        },
        {
            name: 'physicalAppearance',
            options: physicalAppearance
        },
        {
            name: 'pronoun',
            options: pronoun
        },
        {
            name: 'race',
            options: race
        },
        {
            name: 'serviceAnimal',
            options: serviceAnimal
        },
        {
            name: 'sexualOrientation',
            options: sexualOrientation
        },
    ]


    useEffect(() => {
        dispatch({type: 'user/listAdaptiveEquipment'})
        dispatch({type: 'user/listBodyModification'})
        dispatch({type: 'user/listGender'})
        dispatch({type: 'user/listLanguage'})
        dispatch({type: 'user/listMethodOfCommunication'})
        dispatch({type: 'user/listPhysicalAppearance'})
        dispatch({type: 'user/listPronoun'})
        dispatch({type: 'user/listRace'})
        dispatch({type: 'user/listServiceAnimal'})
        dispatch({type: 'user/listSexualOrientation'})

        console.log('tax', taxonomy)


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Form
            initialValues={initialValues}
            fields={identityField}
            // validationSchema={validateUser}
            dispatchAction={'user/updateUser'}
            formHeading={'Update Identity'}
            buttonText={'Update'}
            theme={adminFormWrapperStyle}
            enableReinitialize={true}
            options={options}
        />

    )
}

export default Identity
