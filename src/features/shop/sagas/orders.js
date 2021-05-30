import {listOrders, listStatusValues, updateOrderStatus} from 'features/shop/services/order'
import {call, put, takeEvery, takeLatest}                from 'redux-saga/effects'

export function* getOrders({payload}) {
    try {
        const orders = yield call(listOrders, payload)
        if (!orders.error) {
            yield put({type: 'shop/getOrdersSuccess', payload: orders})
        } else {
            yield put({type: 'shop/getOrdersFailure', payload: orders})
        }
    } catch (error) {
        yield put({type: 'admin/getOrdersFailure', error})
    }
}

export function* getStatusValues({payload}) {
    try {
        const statusValues = yield call(listStatusValues, payload)
        if (!statusValues.error) {
            yield put({type: 'shop/getStatusValuesSuccess', payload: statusValues})
        } else {
            yield put({type: 'shop/getStatusValuesFailure', payload: statusValues})
        }
    } catch (error) {
        yield put({type: 'admin/getStatusValuesFailure', error})
    }
}

export function* updateStatusValue({payload}) {
    const {_id, token, orderId, status} = payload

    try {
        const payload = yield call(updateOrderStatus, {_id, token, orderId, status: {status, orderId}})
        if (!payload.error) {
            yield put({type: 'shop/updateStatusValueSuccess', payload})
        } else {
            yield put({type: 'shop/updateStatusValueFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/updateStatusValueFailure', error})
    }
}

/**
 *
 *
 * ORDERS WATCHERS
 *
 *
 */


export function* watchGetOrders() {
    yield takeLatest('shop/getOrders', getOrders)
}

export function* watchGetStatusValues() {
    yield takeLatest('shop/getStatusValues', getStatusValues)
}

export function* watchUpdateStatusValue() {
    yield takeEvery('shop/updateStatusValue', updateStatusValue)
}
