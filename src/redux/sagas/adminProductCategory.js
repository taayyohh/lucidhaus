import {push} from 'connected-react-router'
import {
    call,
    put,
    takeLatest
}             from 'redux-saga/effects'
import {
    addProductCategory,
    deleteProductCategory,
    updateProductCategory
}             from '../../services/apiProductCategory'


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
        yield put({type: 'admin/updateProductCategoryFailure', error})
    }
}

export function* updateProductCategoryDetail({payload}) {
    const {categoryId, name, token, _id} = payload
    console.log('pay', payload)

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
        yield put({type: 'admin/updateProductCategoryFailure', error})
    }
}

export function* destroyProductCategory({payload}) {
    const destroyed = yield call(deleteProductCategory, payload)
    if (!destroyed.error) {
        yield put({type: 'admin/destroyProductCategorySuccess'})
        yield put(push('/admin/taxonomy'))
    } else {
        yield put({type: 'admin/destroyProductCategoryFailure'})
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
    yield takeLatest('admin/destroyProductCategory', destroyProductCategory)
}

export function* watchDestroyProductCategorySuccess() {
    yield takeLatest('admin/attemptDestroyProductCategorySuccess', destroyProductCategorySuccess)
}

export function* watchCreateProductCategory() {
    yield takeLatest('shop/createProductCategory', createProductCategory)
}

export function* watchUpdateProductCategory() {
    yield takeLatest('shop/updateProductCategory', updateProductCategoryDetail)
}