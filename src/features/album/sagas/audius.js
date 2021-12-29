import {call, put, takeEvery}              from 'redux-saga/effects'
import {getAudiusProviders, getAudiusUser} from '../services/audius'


/**
 *
 *
 * @param POST
 *
 *
 */


export function* getAudiusProviderList() {
    try {
        const payload = yield call(getAudiusProviders)
        if (!payload.error) {
            yield put({type: 'album/getAudiusProvidersSuccess', payload})
        } else {
            yield put({type: 'album/getAudiusProvidersFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getAudiusProvidersFailure', error})
    }
}

export function* searchAudiusUser({payload}) {

    try {
        const user = yield call(getAudiusUser, {provider: payload})
        if (!user?.error) {
            yield put({type: 'album/getAudiusUserSuccess', user})
        } else {
            yield put({type: 'album/getAudiusUserFailure', user})
        }
    } catch (error) {
        yield put({type: 'album/getAudiusUserFailure', error})

    }
}


/**
 *
 *
 * POST WATCHERS
 *
 *
 */


export function* watchGetAudiusProviderList() {
    yield takeEvery('album/getAudiusProviderList', getAudiusProviderList)
}


export function* watchSearchAudiusUser() {
    yield takeEvery('album/searchAudiusUser', searchAudiusUser)
}
