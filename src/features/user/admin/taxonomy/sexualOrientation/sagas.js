import {takeEvery}                                      from '@redux-saga/core/effects'
import {getSexualOrientation, getSexualOrientationList} from 'features/user/admin/taxonomy/sexualOrientation/services'
import {call, put}                                      from 'redux-saga/effects'
import {createEntity, updateEntity}                     from 'utils/abstractions'

export function* createSexualOrientation({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const sexualOrientation = new FormData()
    sexualOrientation.set('name', name)
    sexualOrientation.set('description', description)

    const createdSexualOrientation = yield call(createEntity, {
        _id: _id,
        token: token,
        body: sexualOrientation,
        slug: 'sexual-orientation'
    })
    if (!createdSexualOrientation.error) {
        console.log('success', createdSexualOrientation)
        yield put({type: 'user/listSexualOrientation'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'user/createSexualOrientationFailure', payload})

    }
}

export function* listSexualOrientation() {
    try {
        const payload = yield call(getSexualOrientationList)
        if (!payload.error) {
            yield put({type: 'user/listSexualOrientationSuccess', payload})
        } else {
            yield put({type: 'user/listSexualOrientationFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/listSexualOrientationFailure', error})
    }
}

export function* getSexualOrientationDetail({payload}) {
    try {
        const sexualOrientation = yield call(getSexualOrientation, payload)
        if (!sexualOrientation.error) {
            yield put({type: 'user/getSexualOrientationSuccess', payload: sexualOrientation})
        } else {
            yield put({type: 'user/getSexualOrientationFailure', payload: sexualOrientation})
        }
    } catch (error) {
        yield put({type: 'user/getSexualOrientationFailure', payload: error})
    }
}

export function* updateSexualOrientationDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const updatedSexualOrientation = new FormData()
    updatedSexualOrientation.set('name', name)
    updatedSexualOrientation.set('description', description)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'sexual-orientation',
            body: updatedSexualOrientation,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updateSexualOrientationSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated SexualOrientation',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updateSexualOrientationFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateSexualOrientationFailure'})
    }
}


export function* watchCreateSexualOrientation() {
    yield takeEvery('user/createSexualOrientation', createSexualOrientation)
}

export function* watchGetSexualOrientationList() {
    yield takeEvery('user/listSexualOrientation', listSexualOrientation)
}

export function* watchGetSexualOrientationDetail() {
    yield takeEvery('user/getSexualOrientation', getSexualOrientationDetail)
}

export function* watchUpdateSexualOrientationDetail() {
    yield takeEvery('user/updateSexualOrientation', updateSexualOrientationDetail)
}

