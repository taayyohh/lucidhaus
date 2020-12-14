import {
    put,
    takeEvery,
    takeLatest
}                from 'redux-saga/effects'
import {getCart} from 'utils/cartHelpers'

export function* loadConfig() {
    yield put({type: 'user/isAuthenticated'})
    const cart = yield getCart()
    if (cart.length > 0) {
        yield put({type: 'shop/updateCartSuccess', payload: {cart: cart}})
    }
}

export function* navigate({payload}) {
    const {location} = payload
    const slug = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    yield put({type: 'site/setSlug', payload: {slug: slug}})
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