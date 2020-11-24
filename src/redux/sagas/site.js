import {takeLatest} from '@redux-saga/core/effects'
import {takeEvery}  from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import {put}        from 'redux-saga/effects'
import {getCart}    from '../../utils/cartHelpers'
import {navigate}   from './auth'

export function* loadConfig() {
    yield put({type: 'user/isAuthenticated'})
    const cart = yield getCart()
    if (cart.length > 0) {
        yield put({type: 'shop/updateCartSuccess', payload: {cart: cart}})
    }
}

export function* watchNavigate() {
    yield takeLatest('@@router/LOCATION_CHANGE', navigate)
}

/**
 *
 *
 * SITE WATCHERS
 *
 *
 */

export function* watchLoadConfig() {
    yield takeEvery('site/loadConfig', loadConfig)
}