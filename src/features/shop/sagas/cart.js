import {call, put, takeLatest} from 'redux-saga/effects'
import {addItem, removeItem}   from 'utils/cartHelpers'

export function* addToCart({payload}) {
    const cart = yield call(addItem, payload)
    yield put({type: 'shop/updateCartSuccess', payload: {cart: cart}})
}

export function* removeFromCart({payload}) {
    yield removeItem(payload)
}

/**
 *
 *
 * CART WATCHERS
 *
 *
 */


export function* watchAddToCart() {
    yield takeLatest('shop/addToCart', addToCart)
}

export function* watchRemoveFromCart() {
    yield takeLatest('shop/removeFromCart', removeFromCart)
}
