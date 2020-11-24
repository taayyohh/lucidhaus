import {takeLatest}            from '@redux-saga/core/effects'
import {
    call,
    put
}                              from 'redux-saga/effects'
import {getProduct}            from '../../services/apiProduct'
import {listRelated}           from '../../services/apiShop'
import {updateProductQuantity} from './adminProduct'

export function* getProductDetail({payload}) {
    try {
        const product = yield call(getProduct, payload)
        if (!product.error) {
            yield put({type: 'shop/getProductSuccess', payload: product})
        } else {
            yield put({type: 'shop/getProductFailure', payload: product})
        }
    } catch (error) {
        yield put({type: 'shop/getProductFailure'})
    }
}

export function* getRelatedProducts({payload}) {
    try {
        const relatedProducts = yield call(listRelated, payload)
        if (!payload.error) {
            yield put({type: 'shop/getRelatedProductsSuccess', payload: relatedProducts})
        } else {
            yield put({type: 'shop/getRelatedProductsFailure', payload: relatedProducts})
        }
    } catch (error) {
        yield put({type: 'shop/getRelatedProductsFailure'})
    }
}

export function* watchGetProductDetail() {
    yield takeLatest('shop/getProduct', getProductDetail)
}

export function* watchGetRelatedProducts() {
    yield takeLatest('shop/getRelatedProducts', getRelatedProducts)
}

export function* watchUpdateProductQuantity() {
    yield takeLatest('shop/updateProductQuantity', updateProductQuantity)
}