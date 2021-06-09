import {takeEvery}                  from '@redux-saga/core/effects'
import {getGender, getGenderList}   from 'features/user/admin/taxonomy/gender/services'
import {call, put}                  from 'redux-saga/effects'
import {createEntity, updateEntity} from 'utils/abstractions/crud'
import {setFormData}                from 'utils/abstractions/setFormData'

export function* createGender({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const gender = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(gender, field)

    const createdGender = yield call(createEntity, {
        _id: _id,
        token: token,
        body: gender,
        slug: 'gender'
    })
    if (!createdGender.error) {
        yield put({type: 'user/listGender'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'user/createGenderFailure', payload})

    }
}

export function* listGender() {
    try {
        const payload = yield call(getGenderList)
        if (!payload.error) {
            yield put({type: 'user/listGenderSuccess', payload})
        } else {
            yield put({type: 'user/listGenderFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/listGenderFailure', error})
    }
}

export function* getGenderDetail({payload}) {
    try {
        const gender = yield call(getGender, payload)
        if (!gender.error) {
            yield put({type: 'user/getGenderSuccess', payload: gender})
        } else {
            yield put({type: 'user/getGenderFailure', payload: gender})
        }
    } catch (error) {
        yield put({type: 'user/getGenderFailure', payload: error})
    }
}

export function* updateGenderDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const gender = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(gender, field)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'gender',
            body: gender,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updateGenderSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Gender',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updateGenderFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateGenderFailure'})
    }
}


export function* watchCreateGender() {
    yield takeEvery('user/createGender', createGender)
}

export function* watchGetGenderList() {
    yield takeEvery('user/listGender', listGender)
}

export function* watchGetGenderDetail() {
    yield takeEvery('user/getGender', getGenderDetail)
}

export function* watchUpdateGenderDetail() {
    yield takeEvery('user/updateGender', updateGenderDetail)
}

