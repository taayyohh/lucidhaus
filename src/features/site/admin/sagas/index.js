/* WATCHERS */

import {push}                        from 'connected-react-router'
import {call, put, takeLatest}       from 'redux-saga/effects'
import {deleteBathroom}              from '../../../place/admin/taxonomy/bathroom/services'
import {deleteBusinessOwner}         from '../../../place/admin/taxonomy/businessOwner/services'
import {deleteCommunitiesServed}     from '../../../place/admin/taxonomy/communitiesServed/services'
import {deleteFoodOptions}           from '../../../place/admin/taxonomy/foodOptions/services'
import {deleteLanguageSpoken}        from '../../../place/admin/taxonomy/languageSpoken/services'
import {deletePlaceCategory}         from '../../../place/admin/taxonomy/placeCategory/services'
import {deleteAdaptiveEquipment}     from '../../../user/admin/taxonomy/adaptiveEquipment/services'
import {deleteBodyModification}      from '../../../user/admin/taxonomy/bodyModification/services'
import {deleteGender}                from '../../../user/admin/taxonomy/gender/services'
import {deleteLanguage}              from '../../../user/admin/taxonomy/language/services'
import {deleteMethodOfCommunication} from '../../../user/admin/taxonomy/methodOfCommunication/services'
import {deletePhysicalAppearance}    from '../../../user/admin/taxonomy/physicalAppearance/services'
import {deletePronoun}               from '../../../user/admin/taxonomy/pronoun/services'
import {deleteRace}                  from '../../../user/admin/taxonomy/race/services'
import {deleteServiceAnimal}         from '../../../user/admin/taxonomy/serviceAnimal/services'
import {deleteSexualOrientation}     from '../../../user/admin/taxonomy/sexualOrientation/services'

export function* attemptDestroyEntity({payload}) {
    yield put({type: 'site/confirmDestroyEntity', payload: payload})
}

export function* destroyEntity({payload}) {
    const deleteSwitch = () => {
        switch (payload.type) {
            case 'adaptive-equipment':
                return deleteAdaptiveEquipment
            case 'body-modification':
                return deleteBodyModification
            case 'gender':
                return deleteGender
            case 'language':
                return deleteLanguage
            case 'method-of-communication':
                return deleteMethodOfCommunication
            case 'physical-appearance':
                return deletePhysicalAppearance
            case 'pronoun':
                return deletePronoun
            case 'race':
                return deleteRace
            case 'service-animal':
                return deleteServiceAnimal
            case 'sexual-orientation':
                return deleteSexualOrientation
            case 'bathroom':
                return deleteBathroom
            case 'business-owner':
                return deleteBusinessOwner
            case 'communities-served':
                return deleteCommunitiesServed
            case 'food-options':
                return deleteFoodOptions
            case 'language-spoken':
                return deleteLanguageSpoken
            case 'place-category':
                return deletePlaceCategory
            default:
                return null
        }
    }
    const destroyed = yield call(deleteSwitch(), payload)
    // const {objectID} = payload

    if (!destroyed.error) {
        yield put({type: 'site/destroyEntitySuccess'})
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'Deleted Successfully',
                theme: 'green'
            }
        })

        // yield put({type: 'shop/destroyProductSuccess', payload: {objectID}})
        // yield put({type: 'shop/getShop'})
        yield put(push('/admin/'))
    } else {
        yield put({type: 'admin/destroyProductFailure'})
    }
}

export function* watchAttemptDestroyEntity() {
    yield takeLatest('site/attemptDestroyEntity', attemptDestroyEntity)
}

export function* watchDestroyEntity() {
    yield takeLatest('site/destroyEntity', destroyEntity)
}
