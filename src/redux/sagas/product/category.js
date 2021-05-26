import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import {
    allProductCategories,
    getProductCategory
} from 'services/productCategory'

export function* getProductCategories() {
    const productCategories = yield call(allProductCategories)
    yield put({type: 'shop/getProductCategoriesSuccess', payload: {productCategories: productCategories}})
}

export function* getProductCategoryDetail({payload}) {
    try {
        const productCategory = yield call(getProductCategory, payload)
        if (!productCategory.error) {
            yield put({type: 'shop/getProductCategorySuccess', payload: {productCategory: productCategory}})
        } else {
            yield put({type: 'shop/getProductCategoryFailure', payload: {productCategory: productCategory}})
        }
    } catch (error) {
        yield put({type: 'admin/getProductCategoryFailure', payload: error})
    }
}

/**
 *
 *
 * PRODUCT CATEGORY WATCHERS
 *
 *
 */

export function* watchGetProductCategories() {
    yield takeLatest('shop/getProductCategories', getProductCategories)
}

export function* watchGetProductCategory() {
    yield takeLatest('shop/getProductCategory', getProductCategoryDetail)
}
