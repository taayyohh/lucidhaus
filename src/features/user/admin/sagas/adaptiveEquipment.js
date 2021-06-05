import {takeEvery} from '@redux-saga/core/effects'

export function* createAdaptiveEquipment({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const adaptiveEquipment = new FormData()
    adaptiveEquipment.set('name', name)
    //  place.set('description', description)

    console.log('name', name)
}

export function* watchCreateAdaptiveEquipment() {
    yield takeEvery('admin/createAdaptiveEquipment', createAdaptiveEquipment)
}
