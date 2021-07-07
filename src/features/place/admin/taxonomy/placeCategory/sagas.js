import {takeEvery}                              from '@redux-saga/core/effects'
import {getPlaceCategory, getPlaceCategoryList} from 'features/place/admin/taxonomy/placeCategory/services'
import {call, put}                              from 'redux-saga/effects'
import {createEntity, updateEntity}             from 'utils/abstractions/crud'
import {setFormData}                            from 'utils/abstractions/setFormData'

export function* createPlaceCategory({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const placeCategory = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(placeCategory, field)

    const createdPlaceCategory = yield call(createEntity, {
        _id: _id,
        token: token,
        body: placeCategory,
        slug: 'place-category'
    })
    if (!createdPlaceCategory.error) {
        yield put({type: 'place/listPlaceCategory'})
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'Added New Place Category',
                theme: 'green'
            }
        })
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'place/createPlaceCategoryFailure', payload})

    }
}

export function* listPlaceCategory() {
    try {
        const payload = yield call(getPlaceCategoryList)
        if (!payload.error) {
            yield put({type: 'place/listPlaceCategorySuccess', payload})
        } else {
            yield put({type: 'place/listPlaceCategoryFailure', payload})
        }
    } catch (error) {
        yield put({type: 'place/listPlaceCategoryFailure', error})
    }
}

export function* getPlaceCategoryDetail({payload}) {
    try {
        const placeCategory = yield call(getPlaceCategory, payload)
        if (!placeCategory.error) {
            yield put({type: 'place/getPlaceCategorySuccess', payload: placeCategory})
        } else {
            yield put({type: 'place/getPlaceCategoryFailure', payload: placeCategory})
        }
    } catch (error) {
        yield put({type: 'place/getPlaceCategoryFailure', payload: error})
    }
}

export function* updatePlaceCategoryDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const placeCategory = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(placeCategory, field)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'adaptive-equipment',
            body: placeCategory,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'place/updatePlaceCategorySuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated PlaceCategory',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/updatePlaceCategoryFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'place/updatePlaceCategoryFailure'})
    }
}


export function* watchCreatePlaceCategory() {
    yield takeEvery('place/createPlaceCategory', createPlaceCategory)
}

export function* watchGetPlaceCategoryList() {
    yield takeEvery('place/listPlaceCategory', listPlaceCategory)
}

export function* watchGetPlaceCategoryDetail() {
    yield takeEvery('place/getPlaceCategory', getPlaceCategoryDetail)
}

export function* watchUpdatePlaceCategoryDetail() {
    yield takeEvery('place/updatePlaceCategory', updatePlaceCategoryDetail)
}

