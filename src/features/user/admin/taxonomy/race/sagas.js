import {takeEvery}                  from '@redux-saga/core/effects'
import {getRace, getRaceList}       from 'features/user/admin/taxonomy/race/services'
import {call, put}                  from 'redux-saga/effects'
import {createEntity, updateEntity} from 'utils/abstractions/crud'
import {setFormData}                from 'utils/abstractions/setFormData'

export function* createRace({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const race = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(race, field)

    const createdRace = yield call(createEntity, {
        _id: _id,
        token: token,
        body: race,
        slug: 'race'
    })
    if (!createdRace.error) {
        yield put({type: 'user/listRace'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'user/createRaceFailure', payload})

    }
}

export function* listRace() {
    try {
        const payload = yield call(getRaceList)
        if (!payload.error) {
            yield put({type: 'user/listRaceSuccess', payload})
        } else {
            yield put({type: 'user/listRaceFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/listRaceFailure', error})
    }
}

export function* getRaceDetail({payload}) {
    try {
        const race = yield call(getRace, payload)
        if (!race.error) {
            yield put({type: 'user/getRaceSuccess', payload: race})
        } else {
            yield put({type: 'user/getRaceFailure', payload: race})
        }
    } catch (error) {
        yield put({type: 'user/getRaceFailure', payload: error})
    }
}

export function* updateRaceDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const race = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(race, field)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'race',
            body: race,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updateRaceSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Race',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updateRaceFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateRaceFailure'})
    }
}


export function* watchCreateRace() {
    yield takeEvery('user/createRace', createRace)
}

export function* watchGetRaceList() {
    yield takeEvery('user/listRace', listRace)
}

export function* watchGetRaceDetail() {
    yield takeEvery('user/getRace', getRaceDetail)
}

export function* watchUpdateRaceDetail() {
    yield takeEvery('user/updateRace', updateRaceDetail)
}

