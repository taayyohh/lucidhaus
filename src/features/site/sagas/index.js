import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {getEntityById}                    from 'utils/abstractions/crud'
import {getCart}                          from 'utils/cartHelpers'

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
    const url = location.pathname.split('/').filter(u => u.length !== 0)

    yield put({
        type: 'site/destructureUrl',
        payload: {
            slug: slug,
            url: url
        }
    })
}

export function* getEntity({payload}) {
    const featureSwitch = () => {
        switch (payload.path) {
            case 'bathroom':
                return 'Bathroom'
            case 'business-owner':
                return 'BusinessOwner'
            case 'place-category':
                return 'PlaceCategory'
            case 'communities-served':
                return 'CommunitiesServed'
            case 'food-options':
                return 'FoodOptions'
            case 'language-spoken':
                return 'LanguageSpoken'
            case 'pending-place':
                return 'PendingPlace'
            default:
                return ''

        }
    }

    const entity = yield call(getEntityById, {
        entityId: payload.entityId,
        path: payload.path === 'pending-place' ? 'place' : payload.path
    })

    if (!entity.error) {
        yield put({
            type: `${payload.feature}/get${featureSwitch()}EntitySuccess`,
            payload: {
                entity
            }
        })
    }

}

/**
 *
 *
 * SITE WATCHERS
 *
 *
 */

export function* watchNavigate() {
    yield takeLatest('@@router/LOCATION_CHANGE', navigate)
}

export function* watchLoadConfig() {
    yield takeEvery('site/loadConfig', loadConfig)
}

export function* watchGetEntityById() {
    yield takeEvery('site/getEntityById', getEntity)
}
