import {push}                  from 'connected-react-router'
import {addPlaceFromBoone}     from 'features/place/services'
import {call, put, takeLatest} from 'redux-saga/effects'
import {setFormData}           from 'utils/abstractions/setFormData'

export function* createPlaceFromBoone({payload}) {
    const {
        _id,
        token,
        boonePlace
    } = payload

    //TODO: at some point take categories from boone place make a call to store categories in guide

    console.log('boonePlace', boonePlace)

    for (const category of boonePlace.categories) {
        yield put({
            type: 'place/createPlaceCategory',
            payload: {
                name: category.name,
                description: category.name,
                _id,
                token
        }})
    }

    const place = new FormData()
    const fields = [
        {booneId: boonePlace.id},
        {name: boonePlace.name},
        {address1: boonePlace?.locations?.[0].address1},
        {address2: boonePlace?.locations?.[0].address2},
        {city: boonePlace?.locations?.[0].city},
        {zip: boonePlace?.locations?.[0].postal_code},
        {country: boonePlace?.locations?.[0].country},
        {state: boonePlace?.locations?.[0].state},
        {latitude: boonePlace?.locations?.[0].latitude},
        {longitude: boonePlace?.locations?.[0].longitude},
        {website: boonePlace?.contact_info.website}
    ]
    for (let field of fields)
        setFormData(place, field)

    const createdPlace = yield call(
        addPlaceFromBoone,
        {
            _id: _id,
            token: token,
            place: place
        }
    )
    if (!createdPlace.error) {
        yield put(push(`/places/${createdPlace.slug}`))
        yield put({type: 'place/getPlace', payload: {slug: createdPlace.slug}})

        // yield put({type: 'place/getPlaces'})
       // yield put(push(`/` + createdPlace.slug))
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
