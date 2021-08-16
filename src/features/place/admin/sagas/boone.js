import {push}                              from 'connected-react-router'
import {addPlaceFromBoone}                 from 'features/place/services'
import {call, put, putResolve, takeLatest} from 'redux-saga/effects'
import {setFormData}                       from 'utils/abstractions/setFormData'
import {createEntity}                      from '../../../../utils/abstractions/crud'
import {slugify}                           from '../../../../utils/helpers'

export function* createPlaceFromBoone({payload}) {
    const {
        _id,
        token,
        boonePlace
    } = payload

    const booneCategories = []
    for (const category of boonePlace.categories) {
        const placeCategory = new FormData()
        const fields = [{name: category.name}, {description: category.name}]
        for (let field of fields)
            setFormData(placeCategory, field)

        const createdPlaceCategory = yield call(createEntity, {
            _id: _id,
            token: token,
            body: placeCategory,
            slug: 'place-category'
        })

        if (!createdPlaceCategory.error) {
            booneCategories.push(createdPlaceCategory.id)
        }
    }

    const place = new FormData()
    const fields = [
        {booneId: boonePlace.id},
        {name: boonePlace.name},
        {address1: boonePlace?.locations?.[0].address1},
        {address2: boonePlace?.locations?.[0].address2},
        {city: boonePlace?.locations?.[0].city},
        {categories: booneCategories},
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
        yield put({type: 'place/createPlaceFromBooneSuccess', payload: {createdPlace}})

    } else {
        yield put({type: 'place/createPlaceFromBooneFailure', payload: {createdPlace}})
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
