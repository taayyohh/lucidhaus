import {allProductCategories, getProductCategory} from 'features/shop/services/product/category'
import {call, put, takeLatest}                    from 'redux-saga/effects'

export function* getProductCategories() {
    const productCategories = yield call(allProductCategories)
    yield put({type: 'shop/getProductCategoriesSuccess', payload: productCategories})
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
        yield put({type: 'shop/getProductCategoryFailure', payload: error})
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
