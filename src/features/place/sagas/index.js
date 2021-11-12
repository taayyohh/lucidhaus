import {push}                             from 'connected-react-router'
import {
    getAlgoliaPlaces,
    getPlace,
    getPlaceById,
    getPlaceCategories,
    getPlaces,
    handlePageView
}                                         from 'features/place/services'
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {getEntityById}    from 'utils/abstractions/crud'
import {slugify}                          from 'utils/helpers'

/**
 *
 *
 * @param POST
 *
 *
 */


export function* getPlacesDetail() {
    try {
        const payload = yield call(getPlaces)
        if (!payload.error) {
            yield put({type: 'place/getPlacesSuccess', payload})
        } else {
            yield put({type: 'place/getPlacesFailure', payload})
        }
    } catch (error) {
        yield put({type: 'place/getPlacesFailure', error})
    }
}

export function* getPlaceDetail({payload}) {
    try {
        const place = yield call(getPlace, payload)
        if (!place.error) {
            yield put({type: 'place/getPlaceSuccess', payload: place})
        } else {
            yield put({type: 'place/getPlaceFailure', payload: place})
        }
    } catch (error) {
        yield put({type: 'place/getPlaceFailure'})
    }
}

export function* getUserReviewedPlace({payload}) {
    const {placeId} = payload
    try {
        const place = yield call(getPlaceById, {_id: placeId})
        if (!place.error) {
            yield put({type: 'user/getUserReviewedPlaceSuccess', payload: place})
        } else {
            yield put({type: 'user/getUserReviewedPlaceFailure', payload: place})
        }
    } catch (error) {
        yield put({type: 'user/getUserReviewedPlaceFailure'})
    }
}

export function* searchAllPlaces({payload}) {
    yield put({type: 'place/searchAlgoliaPlaceIndex', payload})
    yield put({type: 'place/getBooneAutoComplete', payload})
    yield put({type: 'place/getPlaceCategoryByNameOrDescription', payload: payload.input})

    if (payload.input.length > 0)
        yield put(push(`/places/search/${slugify(payload.input)}`))
}

export function* getPlaceCategoryByNameOrDescription({payload}) {
    // yield put({type: 'place/getPlaceCategoryByNameOrDescription', payload: payload.input}

    yield call(getPlaceCategories, {payload})
}

export function* searchAlgoliaPlaceIndex({payload}) {
    const result = yield call(getAlgoliaPlaces, payload)
    if (result.hits.length > 0) {
        yield put({
            type: 'place/getAlgoliaPlacesSuccess',
            payload: result.hits
        })
    } else {
        yield put({
            type: 'place/getAlgoliaPlacesFailure',
            payload: result.hits
        })
    }
}

export function* getReview({payload}) {
    const review = yield call(getEntityById, {
        entityId: payload.review,
        path: 'review'
    })
    if (!review.error) {
        yield put({type: 'place/getReviewSuccess', payload: review})
    }
}

export function* addToViewCount({payload}) {
    const place = yield call(handlePageView, payload)
    if(!place?.error) {
        yield put({type: 'place/addViewSuccess', payload: place})
    }
}

/**
 *
 *
 * POST WATCHERS
 *
 *
 */

export function* watchGetPlaces() {
    yield takeEvery('place/getPlaces', getPlacesDetail)
}

export function* watchGetPlaceDetail() {
    yield takeEvery('place/getPlace', getPlaceDetail)
}

export function* watchSearchAllPlaces() {
    yield takeEvery('place/searchAllPlaces', searchAllPlaces)
}

export function* watchSearchAlgoliaPlaceIndex() {
    yield takeEvery('place/searchAlgoliaPlaceIndex', searchAlgoliaPlaceIndex)
}

export function* watchGetReviews() {
    yield takeEvery('place/getReview', getReview)
}

export function* watchGetUserReviewedPlaces() {
    yield takeEvery('place/getUserReviewedPlaces', getUserReviewedPlace)
}

export function* watchGetPlaceCategoryByNameOrDescription() {
    yield takeEvery('place/getPlaceCategoryByNameOrDescription', getPlaceCategoryByNameOrDescription)
}

export function* watchAddToViewCount() {
    yield takeLatest('place/addToViewCount', addToViewCount)
}
