import {takeEvery}                                      from '@redux-saga/core/effects'
import {getCommunitiesServed, getCommunitiesServedList} from 'features/place/admin/taxonomy/communitiesServed/services'
import {call, put}                                      from 'redux-saga/effects'
import {createEntity, updateEntity}                     from 'utils/abstractions'

export function* createCommunitiesServed({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const communitiesServed = new FormData()
    communitiesServed.set('name', name)
    communitiesServed.set('description', description)

    const createdCommunitiesServed = yield call(createEntity, {
        _id: _id,
        token: token,
        body: communitiesServed,
        slug: 'communities-served'
    })
    if (!createdCommunitiesServed.error) {
        console.log('success', createdCommunitiesServed)
        yield put({type: 'place/listCommunitiesServed'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'place/createCommunitiesServedFailure', payload})

    }
}

export function* listCommunitiesServed() {
    try {
        const payload = yield call(getCommunitiesServedList)
        if (!payload.error) {
            yield put({type: 'place/listCommunitiesServedSuccess', payload})
        } else {
            yield put({type: 'place/listCommunitiesServedFailure', payload})
        }
    } catch (error) {
        yield put({type: 'place/listCommunitiesServedFailure', error})
    }
}

export function* getCommunitiesServedDetail({payload}) {
    try {
        const communitiesServed = yield call(getCommunitiesServed, payload)
        if (!communitiesServed.error) {
            yield put({type: 'place/getCommunitiesServedSuccess', payload: communitiesServed})
        } else {
            yield put({type: 'place/getCommunitiesServedFailure', payload: communitiesServed})
        }
    } catch (error) {
        yield put({type: 'place/getCommunitiesServedFailure', payload: error})
    }
}

export function* updateCommunitiesServedDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const updatedCommunitiesServed = new FormData()
    updatedCommunitiesServed.set('name', name)
    updatedCommunitiesServed.set('description', description)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'communities-served',
            body: updatedCommunitiesServed,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'place/updateCommunitiesServedSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated CommunitiesServed',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/updateCommunitiesServedFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'place/updateCommunitiesServedFailure'})
    }
}


export function* watchCreateCommunitiesServed() {
    yield takeEvery('place/createCommunitiesServed', createCommunitiesServed)
}

export function* watchGetCommunitiesServedList() {
    yield takeEvery('place/listCommunitiesServed', listCommunitiesServed)
}

export function* watchGetCommunitiesServedDetail() {
    yield takeEvery('place/getCommunitiesServed', getCommunitiesServedDetail)
}

export function* watchUpdateCommunitiesServedDetail() {
    yield takeEvery('place/updateCommunitiesServed', updateCommunitiesServedDetail)
}

