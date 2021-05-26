import {call, put, takeLatest} from 'redux-saga/effects'
import {addPlaceFromBoone}     from 'services/place'

export function* createPlaceFromBoone({payload}) {
    const {
        _id,
        token,
        boonePlace
    } = payload

    //add to formdata so api can read
    const place = new FormData()
    place.set('_id', boonePlace.id)
    place.set('name', boonePlace.name)

    console.log('boone', boonePlace)

    const createdPlace = yield call(
        addPlaceFromBoone,
        {
            _id: _id,
            token: token,
            place: place
        }
    )
    console.log('createdPlace', createdPlace)
    if (!createdPlace.error) {
        console.log('CREAATEDDDDD', createdPlace)
        // yield put({type: 'place/getPlaces'})
        // yield put(push('/admin/places/update/' + createdPlace.slug))


    } else {
        yield put({type: 'admin/createPlacesFailure', payload})
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
    yield takeLatest('admin/createPlaceFromBoone', createPlaceFromBoone)
}
