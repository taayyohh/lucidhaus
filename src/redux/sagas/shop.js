import {takeLatest}  from '@redux-saga/core/effects'
import {
    call,
    put
}                    from 'redux-saga/effects'
import {
    getBraintreeClientToken,
    getPaymentMethod
}                    from '../../services/apiBraintree'
import {getProducts} from '../../services/apiProduct'
import {
    createOrder,
    processPayment
}                    from '../../services/apiShop'
import {emptyCart}   from '../../utils/cartHelpers'

export function* getShop() {
    try {
        const payload = yield call(getProducts)
        if (!payload.error) {
            yield put({type: 'shop/getShopSuccess', payload})
        } else {
            yield put({type: 'shop/getShopFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getShopFailure', error})
    }
}

export function* getBraintreeToken({payload}) {
    const braintreeClientToken = yield call(getBraintreeClientToken, payload)
    if (!braintreeClientToken.error) {
        yield put({type: 'shop/getBraintreeTokenSuccess', payload: braintreeClientToken})
    } else {
        yield put({type: 'shop/getBraintreeTokenFailure', payload: braintreeClientToken})
    }
}

export function* getPaymentNonce({payload}) {
    const {dropInInstance, _id, token, amount, products, deliveryAddress, user} = payload
    const nonce = yield call(getPaymentMethod, dropInInstance)
    const paymentData = {paymentMethodNonce: nonce, amount: amount}
    const paymentProcessed = yield call(processPayment, {_id, token, paymentData})
    if (paymentProcessed.success === true) {
        const createOrderData = {
            products,
            transactionId_id: paymentProcessed.transaction.id,
            amount: paymentProcessed.transaction.amount,
            address: deliveryAddress,
            user: user
        }
        const createdOrder = yield call(createOrder, {_id, token, createOrderData})
        console.log('createdOrder', createdOrder)

        yield call(emptyCart)
        //TODO: success
    }

}

/**
 *
 *
 * SHOP WATCHERS
 *
 *
 */

export function* watchGetShop() {
    yield takeLatest('shop/getShop', getShop)
}

export function* watchGetBraintreeToken() {
    yield takeLatest('shop/getBraintreeToken', getBraintreeToken)
}

export function* watchGetPaymentNonce() {
    yield takeLatest('shop/getPaymentNonce', getPaymentNonce)
}