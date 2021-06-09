import {takeEvery}                          from '@redux-saga/core/effects'
import {getFoodOptions, getFoodOptionsList} from 'features/place/admin/taxonomy/foodOptions/services'
import {call, put}                          from 'redux-saga/effects'
import {createEntity, updateEntity}         from 'utils/abstractions/crud'
import {setFormData}                        from 'utils/abstractions/setFormData'

export function* createFoodOptions({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const foodOptions = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(foodOptions, field)

    const createdFoodOptions = yield call(createEntity, {
        _id: _id,
        token: token,
        body: foodOptions,
        slug: 'food-options'
    })
    if (!createdFoodOptions.error) {
        yield put({type: 'place/listFoodOptions'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'place/createFoodOptionsFailure', payload})

    }
}

export function* listFoodOptions() {
    try {
        const payload = yield call(getFoodOptionsList)
        if (!payload.error) {
            yield put({type: 'place/listFoodOptionsSuccess', payload})
        } else {
            yield put({type: 'place/listFoodOptionsFailure', payload})
        }
    } catch (error) {
        yield put({type: 'place/listFoodOptionsFailure', error})
    }
}

export function* getFoodOptionsDetail({payload}) {
    try {
        const foodOptions = yield call(getFoodOptions, payload)
        if (!foodOptions.error) {
            yield put({type: 'place/getFoodOptionsSuccess', payload: foodOptions})
        } else {
            yield put({type: 'place/getFoodOptionsFailure', payload: foodOptions})
        }
    } catch (error) {
        yield put({type: 'place/getFoodOptionsFailure', payload: error})
    }
}

export function* updateFoodOptionsDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const foodOptions = new FormData()
    const fields = [{name}, {description}]
    for (let field of fields)
        setFormData(foodOptions, field)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'food-options',
            body: foodOptions,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'place/updateFoodOptionsSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated FoodOptions',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/updateFoodOptionsFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'place/updateFoodOptionsFailure'})
    }
}


export function* watchCreateFoodOptions() {
    yield takeEvery('place/createFoodOptions', createFoodOptions)
}

export function* watchGetFoodOptionsList() {
    yield takeEvery('place/listFoodOptions', listFoodOptions)
}

export function* watchGetFoodOptionsDetail() {
    yield takeEvery('place/getFoodOptions', getFoodOptionsDetail)
}

export function* watchUpdateFoodOptionsDetail() {
    yield takeEvery('place/updateFoodOptions', updateFoodOptionsDetail)
}

