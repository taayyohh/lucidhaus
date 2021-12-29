import {takeEvery}                                  from '@redux-saga/core/effects'
import {push}                                       from 'connected-react-router'
import {addProductCategory, updateProductCategory}  from 'features/shop/services/product/category'
import {call, put, takeLatest}                      from 'redux-saga/effects'
import {getProductCategory, getProductCategoryList} from './services'


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
        } else {
            yield put({type: 'shop/updateProductCategoryFailure', category})
        }
    } catch (error) {
        yield put({type: 'shop/updateProductCategoryFailure', error})
    }
}

export function* getProductCategoryDetail({payload}) {
    try {
        const productCategory = yield call(getProductCategory, payload)
        if (!productCategory.error) {
            yield put({type: 'shop/getProductCategorySuccess', payload: productCategory})
        } else {
            yield put({type: 'shop/getProductCategoryFailure', payload: productCategory})
        }
    } catch (error) {
        yield put({type: 'shop/getProductCategoryFailure', payload: error})
    }
}

export function* listProductCategory() {
    try {
        const payload = yield call(getProductCategoryList)
        if (!payload.error) {
            yield put({type: 'shop/listProductCategorySuccess', payload})
        } else {
            yield put({type: 'shop/listProductCategoryFailure', payload})
        }
    } catch (error) {
        yield put({type: 'shop/listProductCategoryFailure', error})
    }
}

/**
 *
 *
 * ADMIN PRODUCT CATEGORY WATCHERS
 *
 *
 */


export function* watchCreateProductCategory() {
    yield takeLatest('shop/createProductCategory', createProductCategory)
}

export function* watchGetProductCategoryList() {
    yield takeEvery('shop/listProductCategory', listProductCategory)
}

export function* watchGetProductCategoryDetail() {
    yield takeEvery('shop/getProductCategory', getProductCategoryDetail)
}

export function* watchUpdateProductCategory() {
    yield takeLatest('shop/updateProductCategory', updateProductCategoryDetail)
}

