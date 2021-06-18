import {addPlaceFromBoone}     from 'features/place/services'
import {call, put, takeLatest} from 'redux-saga/effects'

export function* createPlaceFromBoone({payload}) {
    const {
        _id,
        token,
        boonePlace
    } = payload

    //add to formdata so api can read
    const place = new FormData()
    place.set('booneId', boonePlace.id)
    place.set('name', boonePlace.name)
    place.set('slug', boonePlace.slug)

    console.log('boonePlace', boonePlace)

    const createdPlace = yield call(
        addPlaceFromBoone,
        {
            _id: _id,
            token: token,
            place: place
        }
    )
    if (!createdPlace.error) {
        // yield put({type: 'place/getPlaces'})
        // yield put(push('/admin/places/update/' + createdPlace.slug))
        yield put({type: 'place/createPlaceSuccess', payload})



    } else {
        yield put({type: 'place/createPlaceFailure', payload})
    }

}


/**
 *
 *
 * ADMIN ARTIST WATCHERS
 *
 *
 */

export function* watchCreatePlaceFromBoone() {
    yield takeLatest('place/createPlaceFromBoone', createPlaceFromBoone)
}
