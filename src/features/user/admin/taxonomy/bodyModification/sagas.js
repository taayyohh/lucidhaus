import {takeEvery}                                    from '@redux-saga/core/effects'
import {getBodyModification, getBodyModificationList} from 'features/user/admin/taxonomy/bodyModification/services'
import {call, put}                                    from 'redux-saga/effects'
import {createEntity, updateEntity}                   from 'utils/abstractions'

export function* createBodyModification({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const bodyModification = new FormData()
    bodyModification.set('name', name)
    bodyModification.set('description', description)

    const createdBodyModification = yield call(createEntity, {
        _id: _id,
        token: token,
        body: bodyModification,
        slug: 'body-modification'
    })
    if (!createdBodyModification.error) {
        console.log('success', createdBodyModification)
        yield put({type: 'user/listBodyModification'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'user/createBodyModificationFailure', payload})

    }
}

export function* listBodyModification() {
    try {
        const payload = yield call(getBodyModificationList)
        if (!payload.error) {
            yield put({type: 'user/listBodyModificationSuccess', payload})
        } else {
            yield put({type: 'user/listBodyModificationFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/listBodyModificationFailure', error})
    }
}

export function* getBodyModificationDetail({payload}) {
    try {
        const bodyModification = yield call(getBodyModification, payload)
        if (!bodyModification.error) {
            yield put({type: 'user/getBodyModificationSuccess', payload: bodyModification})
        } else {
            yield put({type: 'user/getBodyModificationFailure', payload: bodyModification})
        }
    } catch (error) {
        yield put({type: 'user/getBodyModificationFailure', payload: error})
    }
}

export function* updateBodyModificationDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const updatedBodyModification = new FormData()
    updatedBodyModification.set('name', name)
    updatedBodyModification.set('description', description)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'body-modification',
            body: updatedBodyModification,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updateBodyModificationSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated BodyModification',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updateBodyModificationFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateBodyModificationFailure'})
    }
}


export function* watchCreateBodyModification() {
    yield takeEvery('user/createBodyModification', createBodyModification)
}

export function* watchGetBodyModificationList() {
    yield takeEvery('user/listBodyModification', listBodyModification)
}

export function* watchGetBodyModificationDetail() {
    yield takeEvery('user/getBodyModification', getBodyModificationDetail)
}

export function* watchUpdateBodyModificationDetail() {
    yield takeEvery('user/updateBodyModification', updateBodyModificationDetail)
}

