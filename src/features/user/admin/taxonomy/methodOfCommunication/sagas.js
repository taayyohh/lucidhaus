import {takeEvery}                                              from '@redux-saga/core/effects'
import {getMethodOfCommunication, getMethodOfCommunicationList} from 'features/user/admin/taxonomy/methodOfCommunication/services'
import {call, put}                                              from 'redux-saga/effects'
import {createEntity, updateEntity}                             from 'utils/abstractions/crud'
import {setFormData}                                            from 'utils/abstractions/setFormData'

export function* createMethodOfCommunication({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const methodOfCommunication = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(methodOfCommunication, field)

    const createdMethodOfCommunication = yield call(createEntity, {
        _id: _id,
        token: token,
        body: methodOfCommunication,
        slug: 'method-of-communication'
    })
    if (!createdMethodOfCommunication.error) {
        yield put({type: 'user/listMethodOfCommunication'})
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'Item Added!',
                theme: 'green'
            }
        })
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'user/createMethodOfCommunicationFailure', payload})

    }
}

export function* listMethodOfCommunication() {
    try {
        const payload = yield call(getMethodOfCommunicationList)
        if (!payload.error) {
            yield put({type: 'user/listMethodOfCommunicationSuccess', payload})
        } else {
            yield put({type: 'user/listMethodOfCommunicationFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/listMethodOfCommunicationFailure', error})
    }
}

export function* getMethodOfCommunicationDetail({payload}) {
    try {
        const methodOfCommunication = yield call(getMethodOfCommunication, payload)
        if (!methodOfCommunication.error) {
            yield put({type: 'user/getMethodOfCommunicationSuccess', payload: methodOfCommunication})
        } else {
            yield put({type: 'user/getMethodOfCommunicationFailure', payload: methodOfCommunication})
        }
    } catch (error) {
        yield put({type: 'user/getMethodOfCommunicationFailure', payload: error})
    }
}

export function* updateMethodOfCommunicationDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const methodOfCommunication = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(methodOfCommunication, field)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'method-of-communication',
            body: methodOfCommunication,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updateMethodOfCommunicationSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated MethodOfCommunication',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updateMethodOfCommunicationFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateMethodOfCommunicationFailure'})
    }
}


export function* watchCreateMethodOfCommunication() {
    yield takeEvery('user/createMethodOfCommunication', createMethodOfCommunication)
}

export function* watchGetMethodOfCommunicationList() {
    yield takeEvery('user/listMethodOfCommunication', listMethodOfCommunication)
}

export function* watchGetMethodOfCommunicationDetail() {
    yield takeEvery('user/getMethodOfCommunication', getMethodOfCommunicationDetail)
}

export function* watchUpdateMethodOfCommunicationDetail() {
    yield takeEvery('user/updateMethodOfCommunication', updateMethodOfCommunicationDetail)
}

