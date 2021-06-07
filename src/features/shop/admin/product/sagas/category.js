import {push}                                                             from 'connected-react-router'
import {addProductCategory, deleteProductCategory, updateProductCategory} from 'features/shop/services/product/category'
import {call, put, takeLatest}                                            from 'redux-saga/effects'


export function* createProductCategory({payload}) {
    const {_id, token, name} = payload
    const category = new FormData()
    category.set('name', name)

    try {
        const created = yield call(addProductCategory, {_id, token, category})
        if (!created.error) {
            yield put({type: 'shop/createProductCategorySuccess', created})
            yield push(yield put(push('/admin/taxonomy')))
        } else {
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: created.error,
                    theme: 'red'
                }
            })
        }
    } catch (error) {
        yield put({type: 'shop/updateProductCategoryFailure', error})
    }
}

export function* updateProductCategoryDetail({payload}) {
    const {categoryId, name, token, _id} = payload

    const productCategory = new FormData()
    productCategory.set('name', name)


    try {
        const category = yield call(updateProductCategory, {categoryId, productCategory, token, _id})
        if (!category.error) {
            yield put({type: 'shop/updateProductCategorySuccess', category})
            yield push(yield put(push('/admin/taxonomy')))
        } else {
            yield put({type: 'shop/updateProductCategoryFailure', category})
        }
    } catch (error) {
        yield put({type: 'shop/updateProductCategoryFailure', error})
    }
}

export function* destroyProductCategory({payload}) {
    const destroyed = yield call(deleteProductCategory, payload)
    if (!destroyed.error) {
        yield put({type: 'shop/destroyProductCategorySuccess'})
        yield put(push('/admin/taxonomy'))
    } else {
        yield put({type: 'shop/destroyProductCategoryFailure'})
    }
}

export function* destroyProductCategorySuccess() {
    yield put(push('/admin/taxonomy'))
}

/**
 *
 *
 * ADMIN PRODUCT CATEGORY WATCHERS
 *
 *
 */

export function* watchDestroyProductCategory() {
    yield takeLatest('shop/destroyProductCategory', destroyProductCategory)
}

export function* watchDestroyProductCategorySuccess() {
    yield takeLatest('shop/attemptDestroyProductCategorySuccess', destroyProductCategorySuccess)
}

export function* watchCreateProductCategory() {
    yield takeLatest('shop/createProductCategory', createProductCategory)
}

export function* watchUpdateProductCategory() {
    yield takeLatest('shop/updateProductCategory', updateProductCategoryDetail)
}
