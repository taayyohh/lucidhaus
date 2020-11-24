import {takeLatest}            from '@redux-saga/core/effects'
import {push}                  from 'connected-react-router'
import {
    call,
    put
}                              from 'redux-saga/effects'
import {
    deleteProductCategory,
    updateProductCategory
}                              from '../../services/apiProductCategory'
import {createProductCategory} from './adminProduct'

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
        yield put(push('/admin/shop'))
    } else {
        yield put({type: 'admin/destroyProductCategoryFailure'})
    }
}

export function* destroyProductCategorySuccess() {
    yield put(push('/admin/taxonomy'))
}

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