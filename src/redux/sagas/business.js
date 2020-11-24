import {takeEvery} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import {
    call,
    put
}                  from 'redux-saga/effects'
import {
    getBusiness,
    getBusinesses
}                  from '../../services/apiAdmin'

/**
 *
 *
 * @param BUSINESS
 *
 *
 */


export function* getMarketplace() {
    try {
        const payload = yield call(getBusinesses)
        if (!payload.error) {
            yield put({type: 'business/getMarketplaceSuccess', payload})
        } else {
            yield put({type: 'business/getMarketplaceFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getMarketplaceFailure', error})
    }
}

export function* getBusinessDetail({payload}) {
    try {
        const business = yield call(getBusiness, payload)
        if (!business.error) {
            yield put({type: 'business/getBusinessSuccess', payload: business})
        } else {
            yield put({type: 'business/getBusinessFailure', payload: business})
        }
    } catch (error) {
        yield put({type: 'business/getBusinessFailure'})
    }
}

/**
 *
 *
 * BUSINESS WATCHERS
 *
 *
 */

export function* watchGetMarketplace() {
    yield takeEvery('business/getMarketplace', getMarketplace)
}

export function* watchGetBusinessDetail() {
    yield takeEvery('business/getBusiness', getBusinessDetail)
}