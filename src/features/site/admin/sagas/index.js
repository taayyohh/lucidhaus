/* WATCHERS */

import {push}                     from 'connected-react-router'
import {deleteAlbum}              from 'features/album/services'
import {deleteArtist}             from 'features/artist/services'
import {deleteProduct}            from 'features/shop/services/product'
import {deleteProductCategory}    from 'features/shop/services/product/category'
import {deleteReview, deleteUser} from 'features/user/services'
import {call, put, takeLatest}    from 'redux-saga/effects'


export function* attemptDestroyEntity({payload}) {
    yield put({type: 'site/confirmDestroyEntity', payload: payload})
}

export function* destroyEntity({payload}) {
    const deleteSwitch = () => {
        switch (payload.type) {
            case 'artist':
                return deleteArtist
            case 'album':
                return deleteAlbum
            case 'product-category':
                return deleteProductCategory
            case 'product':
                return deleteProduct
            case 'user':
                return deleteUser
            case 'review':
                return deleteReview

            default:
                return null
        }
    }
    const destroyed = yield call(deleteSwitch(), payload)
    const {objectID, type} = payload

    if (!destroyed.error) {
        yield put({type: 'site/destroyEntitySuccess'})
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'Deleted Successfully',
                theme: 'green'
            }
        })

        if (type === 'user') {
            yield put({type: 'user/destroyUserSuccess', payload: {objectID}})
            yield put({type: 'user/signOut'})
            yield put(push('/signin'))
        }
        // yield put({type: 'shop/destroyProductSuccess', payload: {objectID}})
        // yield put({type: 'shop/getShop'})
        // yield put(push('/admin/'))
    } else {
        yield put({type: 'admin/destroyProductFailure'})
    }
}

export function* watchAttemptDestroyEntity() {
    yield takeLatest('site/attemptDestroyEntity', attemptDestroyEntity)
}

export function* watchDestroyEntity() {
    yield takeLatest('site/destroyEntity', destroyEntity)
}
