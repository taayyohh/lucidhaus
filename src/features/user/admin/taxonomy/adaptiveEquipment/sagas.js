import {takeEvery}                                      from '@redux-saga/core/effects'
import {getAdaptiveEquipment, getAdaptiveEquipmentList} from 'features/user/admin/taxonomy/adaptiveEquipment/services'
import {call, put}                                      from 'redux-saga/effects'
import {createEntity, updateEntity}                     from 'utils/abstractions/crud'
import {setFormData}                                    from 'utils/abstractions/setFormData'

export function* createAdaptiveEquipment({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const adaptiveEquipment = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(adaptiveEquipment, field)

    const createdAdaptiveEquipment = yield call(createEntity, {
        _id: _id,
        token: token,
        body: adaptiveEquipment,
        slug: 'adaptive-equipment'
    })
    if (!createdAdaptiveEquipment.error) {
        yield put({type: 'user/listAdaptiveEquipment'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'user/createAdaptiveEquipmentFailure', payload})

    }
}

export function* listAdaptiveEquipment() {
    try {
        const payload = yield call(getAdaptiveEquipmentList)
        if (!payload.error) {
            yield put({type: 'user/listAdaptiveEquipmentSuccess', payload})
        } else {
            yield put({type: 'user/listAdaptiveEquipmentFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/listAdaptiveEquipmentFailure', error})
    }
}

export function* getAdaptiveEquipmentDetail({payload}) {
    try {
        const adaptiveEquipment = yield call(getAdaptiveEquipment, payload)
        if (!adaptiveEquipment.error) {
            yield put({type: 'user/getAdaptiveEquipmentSuccess', payload: adaptiveEquipment})
        } else {
            yield put({type: 'user/getAdaptiveEquipmentFailure', payload: adaptiveEquipment})
        }
    } catch (error) {
        yield put({type: 'user/getAdaptiveEquipmentFailure', payload: error})
    }
}

export function* updateAdaptiveEquipmentDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const adaptiveEquipment = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(adaptiveEquipment, field)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'adaptive-equipment',
            body: adaptiveEquipment,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updateAdaptiveEquipmentSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated AdaptiveEquipment',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updateAdaptiveEquipmentFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateAdaptiveEquipmentFailure'})
    }
}


export function* watchCreateAdaptiveEquipment() {
    yield takeEvery('user/createAdaptiveEquipment', createAdaptiveEquipment)
}

export function* watchGetAdaptiveEquipmentList() {
    yield takeEvery('user/listAdaptiveEquipment', listAdaptiveEquipment)
}

export function* watchGetAdaptiveEquipmentDetail() {
    yield takeEvery('user/getAdaptiveEquipment', getAdaptiveEquipmentDetail)
}

export function* watchUpdateAdaptiveEquipmentDetail() {
    yield takeEvery('user/updateAdaptiveEquipment', updateAdaptiveEquipmentDetail)
}

