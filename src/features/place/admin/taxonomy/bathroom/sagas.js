import {takeEvery}                    from '@redux-saga/core/effects'
import {getBathroom, getBathroomList} from 'features/place/admin/taxonomy/bathroom/services'
import {call, put}                    from 'redux-saga/effects'
import {createEntity, updateEntity}   from 'utils/abstractions/crud'
import {setFormData}                  from 'utils/abstractions/setFormData'

export function* createBathroom({payload}) {
    const {_id, token, name, gender, description, multiStall, toilets, urinals} = payload

    //add to formdata so api can read
    const bathroom = new FormData()
    const fields = [{name}, {gender}, {description}, {multiStall}, {toilets}, {urinals}]
    for (let field of fields)
        setFormData(bathroom, field)

    const createdBathroom = yield call(createEntity, {
        _id: _id,
        token: token,
        body: bathroom,
        slug: 'bathroom'
    })
    if (!createdBathroom.error) {
        yield put({type: 'place/listBathroom'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'place/createBathroomFailure', payload})

    }
}

export function* listBathroom() {
    try {
        const payload = yield call(getBathroomList)
        if (!payload.error) {
            yield put({type: 'place/listBathroomSuccess', payload})
        } else {
            yield put({type: 'place/listBathroomFailure', payload})
        }
    } catch (error) {
        yield put({type: 'place/listBathroomFailure', error})
    }
}

export function* getBathroomDetail({payload}) {
    try {
        const bathroom = yield call(getBathroom, payload)
        if (!bathroom.error) {
            yield put({type: 'place/getBathroomSuccess', payload: bathroom})
        } else {
            yield put({type: 'place/getBathroomFailure', payload: bathroom})
        }
    } catch (error) {
        yield put({type: 'place/getBathroomFailure', payload: error})
    }
}

export function* updateBathroomDetail({payload}) {
    const {slug, _id, token, gender, name, description, multiStall, toilets, urinals} = payload

    //add to formData so api can read
    const bathroom = new FormData()
    const fields = [{name}, {gender}, {description}, {multiStall}, {toilets}, {urinals}]
    for (let field of fields)
        setFormData(bathroom, field)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'bathroom',
            body: bathroom,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'place/updateBathroomSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Bathroom',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/updateBathroomFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'place/updateBathroomFailure'})
    }
}


export function* watchCreateBathroom() {
    yield takeEvery('place/createBathroom', createBathroom)
}

export function* watchGetBathroomList() {
    yield takeEvery('place/listBathroom', listBathroom)
}

export function* watchGetBathroomDetail() {
    yield takeEvery('place/getBathroom', getBathroomDetail)
}

export function* watchUpdateBathroomDetail() {
    yield takeEvery('place/updateBathroom', updateBathroomDetail)
}

