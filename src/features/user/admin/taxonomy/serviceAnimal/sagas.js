import {takeEvery}                              from '@redux-saga/core/effects'
import {getServiceAnimal, getServiceAnimalList} from 'features/user/admin/taxonomy/serviceAnimal/services'
import {call, put}                              from 'redux-saga/effects'
import {createEntity, updateEntity}             from 'utils/abstractions/crud'
import {setFormData}                            from 'utils/abstractions/setFormData'

export function* createServiceAnimal({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const serviceAnimal = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(serviceAnimal, field)

    const createdServiceAnimal = yield call(createEntity, {
        _id: _id,
        token: token,
        body: serviceAnimal,
        slug: 'service-animal'
    })
    if (!createdServiceAnimal.error) {
        yield put({type: 'user/listServiceAnimal'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'user/createServiceAnimalFailure', payload})

    }
}

export function* listServiceAnimal() {
    try {
        const payload = yield call(getServiceAnimalList)
        if (!payload.error) {
            yield put({type: 'user/listServiceAnimalSuccess', payload})
        } else {
            yield put({type: 'user/listServiceAnimalFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/listServiceAnimalFailure', error})
    }
}

export function* getServiceAnimalDetail({payload}) {
    try {
        const serviceAnimal = yield call(getServiceAnimal, payload)
        if (!serviceAnimal.error) {
            yield put({type: 'user/getServiceAnimalSuccess', payload: serviceAnimal})
        } else {
            yield put({type: 'user/getServiceAnimalFailure', payload: serviceAnimal})
        }
    } catch (error) {
        yield put({type: 'user/getServiceAnimalFailure', payload: error})
    }
}

export function* updateServiceAnimalDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const serviceAnimal = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(serviceAnimal, field)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'service-animal',
            body: serviceAnimal,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updateServiceAnimalSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated ServiceAnimal',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updateServiceAnimalFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateServiceAnimalFailure'})
    }
}


export function* watchCreateServiceAnimal() {
    yield takeEvery('user/createServiceAnimal', createServiceAnimal)
}

export function* watchGetServiceAnimalList() {
    yield takeEvery('user/listServiceAnimal', listServiceAnimal)
}

export function* watchGetServiceAnimalDetail() {
    yield takeEvery('user/getServiceAnimal', getServiceAnimalDetail)
}

export function* watchUpdateServiceAnimalDetail() {
    yield takeEvery('user/updateServiceAnimal', updateServiceAnimalDetail)
}

