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


    } else {
        yield put({type: 'place/createPlacesFailure', payload})
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
