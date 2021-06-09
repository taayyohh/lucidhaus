import {identityFields}   from 'features/user/admin/fields/indentity'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Form                       from 'shared/Fields/Form'
import {adminFormWrapperStyle}    from 'shared/Layout/Dashboard/admin/styles'

const Identity = () => {
    const dispatch = useDispatch()
    const {_id, token, taxonomy, user} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {identity} = user

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
        adaptiveEquipment: identity?.adaptiveEquipment,
        bodyModification: identity?.bodyModification,
        blind: identity?.blind,
        deaf: identity?.deaf,
        dateOfBirth: '',
        gender: identity?.gender,
        guideAnimal: identity?.guideAnimal,
        languagePrimary: identity?.languagePrimary,
        languageSecondary: identity?.languageSecondary,
        methodOfCommunication: identity?.methodOfCommunication,
        physicalAppearance: identity?.physicalAppearance,
        pronoun: identity?.pronoun,
        race: identity?.race,
        serviceAnimal: identity?.serviceAnimal,
        sexualOrientation: identity?.sexualOrientation,
        transgender: identity?.transgender,
        identity: true,
        slug,
        _id,
        token,
    }
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


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Form
            initialValues={initialValues}
            fields={identityFields}
            // validationSchema={validateUser}
            dispatchAction={'user/updateUserIdentity'}
            formHeading={'Update Identity'}
            buttonText={'Update'}
            theme={adminFormWrapperStyle}
            enableReinitialize={true}
            options={options}
        />

    )
}

export default Identity
