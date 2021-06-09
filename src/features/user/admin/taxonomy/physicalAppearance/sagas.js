import {takeEvery}                                        from '@redux-saga/core/effects'
import {getPhysicalAppearance, getPhysicalAppearanceList} from 'features/user/admin/taxonomy/physicalAppearance/services'
import {call, put}                                        from 'redux-saga/effects'
import {createEntity, updateEntity}                       from 'utils/abstractions/crud'
import {setFormData}                                      from 'utils/abstractions/setFormData'

export function* createPhysicalAppearance({payload}) {
    const {_id, token, name, description} = payload

    //add to formdata so api can read
    const physicalAppearance = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(physicalAppearance, field)

    const createdPhysicalAppearance = yield call(createEntity, {
        _id: _id,
        token: token,
        body: physicalAppearance,
        slug: 'physical-appearance'
    })
    if (!createdPhysicalAppearance.error) {
        yield put({type: 'user/listPhysicalAppearance'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'user/createPhysicalAppearanceFailure', payload})

    }
}

export function* listPhysicalAppearance() {
    try {
        const payload = yield call(getPhysicalAppearanceList)
        if (!payload.error) {
            yield put({type: 'user/listPhysicalAppearanceSuccess', payload})
        } else {
            yield put({type: 'user/listPhysicalAppearanceFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/listPhysicalAppearanceFailure', error})
    }
}

export function* getPhysicalAppearanceDetail({payload}) {
    try {
        const physicalAppearance = yield call(getPhysicalAppearance, payload)
        if (!physicalAppearance.error) {
            yield put({type: 'user/getPhysicalAppearanceSuccess', payload: physicalAppearance})
        } else {
            yield put({type: 'user/getPhysicalAppearanceFailure', payload: physicalAppearance})
        }
    } catch (error) {
        yield put({type: 'user/getPhysicalAppearanceFailure', payload: error})
    }
}

export function* updatePhysicalAppearanceDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const physicalAppearance = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(physicalAppearance, field)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'physical-appearance',
            body: physicalAppearance,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updatePhysicalAppearanceSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated PhysicalAppearance',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updatePhysicalAppearanceFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updatePhysicalAppearanceFailure'})
    }
}


export function* watchCreatePhysicalAppearance() {
    yield takeEvery('user/createPhysicalAppearance', createPhysicalAppearance)
}

export function* watchGetPhysicalAppearanceList() {
    yield takeEvery('user/listPhysicalAppearance', listPhysicalAppearance)
}

export function* watchGetPhysicalAppearanceDetail() {
    yield takeEvery('user/getPhysicalAppearance', getPhysicalAppearanceDetail)
}

export function* watchUpdatePhysicalAppearanceDetail() {
    yield takeEvery('user/updatePhysicalAppearance', updatePhysicalAppearanceDetail)
}

